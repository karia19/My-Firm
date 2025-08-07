"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import CookieSettingsModal from "./CookieSettingsModal";
import { getCookieSettings, loadGoogleAnalytics } from "@/lib/cookieUtils";
import type { CookieSettings } from "@/lib/cookieUtils";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const settings = getCookieSettings();
    if (!settings) {
      setVisible(true);
    } else {
      if (settings.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const all: CookieSettings = {
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem("cookieSettings", JSON.stringify(all));
    setVisible(false);
    loadGoogleAnalytics();
  };

  const handleDeclineAll = () => {
    const none: CookieSettings = {
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem("cookieSettings", JSON.stringify(none));
    setVisible(false);
  };

  const handleSave = (settings: CookieSettings) => {
    setVisible(false);
    if (settings.analytics) {
      loadGoogleAnalytics();
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-2 right-2 z-50"
        >
          <Card className="p-4 shadow-xl bg-background border border-muted">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience. Manage your preferences or accept all.
              </p>
              <div className="flex gap-2">
                <Button variant="default" onClick={handleAcceptAll}>
                  Accept All
                </Button>
                <Button variant="outline" onClick={handleDeclineAll}>
                  Decline
                </Button>
                <CookieSettingsModal onSave={handleSave} />
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
