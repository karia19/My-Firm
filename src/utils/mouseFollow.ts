import {
  createScope,
  createAnimatable,
  createSpring
} from 'animejs';

export function setupMouseFollow(
  targetRef: React.RefObject<HTMLElement>,
  containerRef: React.RefObject<HTMLElement>,
  dotRef?: React.RefObject<HTMLElement>
): () => void {
  if (!targetRef.current || !containerRef.current) return () => {};

  const scope = createScope({ root: containerRef });

  scope.add(() => {
    // Animate a target within bounds (optional use)
    const anim = createAnimatable(targetRef.current!, {
      x: 0,
      y: 0,
      ease: createSpring({ stiffness: 80, damping: 12 }),
    });

    // Animate dot to actual cursor
    let dotAnim: ReturnType<typeof createAnimatable> | null = null;
    if (dotRef?.current) {
      dotAnim = createAnimatable(dotRef.current, {
        x: 0,
        y: 0,
        ease: createSpring({ stiffness: 100, damping: 18 }),
      });
    }

    let bounds = containerRef.current!.getBoundingClientRect();

    const refreshBounds = () => {
      bounds = containerRef.current!.getBoundingClientRect();
    };

    const onMouseMove = (e: MouseEvent) => {
      const { width, height, left, top } = bounds;
      const hw = width / 2;
      const hh = height / 2;
      const x = Math.max(-hw, Math.min(e.clientX - left - hw, hw));
      const y = Math.max(-hh, Math.min(e.clientY - top - hh, hh));
      anim.x(x);
      anim.y(y);

      // Animate dot to real mouse position (offset by 6px to center 12x12 dot)
      if (dotAnim) {
        dotAnim.x(e.clientX - 0);
        dotAnim.y(e.clientY - 0);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    containerRef.current!.addEventListener('scroll', refreshBounds);

    scope.methods.cleanup = () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', refreshBounds);
      }
      scope.revert();
    };
  });

  return () => {
    scope.methods.cleanup?.();
  };
}
