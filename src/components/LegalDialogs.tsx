// components/LegalDialogs.tsx

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function LegalDialogs() {
  return (
    <div className="flex gap-4 text-sm">
      <Dialog>
        <DialogTrigger className="text-purple-700 hover:underline">Privacy</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              We collect minimal user data such as cookies or device info to improve the site experience. Your data is never sold or shared without consent.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger className="text-purple-700 hover:underline">Terms</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              By using our site, you agree not to misuse services, copy content without permission, or breach any applicable laws. The service is provided “as is.”
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <a href="https://github.com/yourusername/yourrepo" className="text-purple-700 hover:underline">Github</a>
    </div>
  );
}
