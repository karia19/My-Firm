

declare global {
    interface Window {
      dataLayer: any[];
    }
}

export type CookieSettings = {
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  };
  
  export const defaultSettings: CookieSettings = {
    analytics: false,
    marketing: false,
    preferences: false,
  };
  
  export function saveCookieSettings(settings: CookieSettings) {
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
  }
  
  export function getCookieSettings(): CookieSettings | null {
    const raw = localStorage.getItem("cookieSettings");
    return raw ? JSON.parse(raw) : null;
  }
  
  export function loadGoogleAnalytics() {
    const GA_MEASUREMENT_ID = "G-XXXXXXX"; // Replace with your actual ID
    if (document.getElementById("ga-script")) return;
  
    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
  
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }
  