// components/CookieSettingsModal.tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { CookieSettings } from "@/lib/cookieUtils";
import { saveCookieSettings } from "@/lib/cookieUtils";

export default function CookieSettingsModal({ onSave }: { onSave: (settings: CookieSettings) => void }) {
  const [settings, setSettings] = useState<CookieSettings>({
    analytics: true,
    marketing: true,
    preferences: true,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Cookie Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Manage Cookie Preferences</DialogHeader>
        <div className="space-y-4">
          {["analytics", "marketing", "preferences"].map((key) => (
            <div key={key} className="flex justify-between items-center">
              <span className="capitalize">{key} Cookies</span>
              <Switch
                checked={settings[key as keyof CookieSettings]}
                onCheckedChange={(val) =>
                  setSettings((prev) => ({ ...prev, [key]: val }))
                }
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              saveCookieSettings(settings);
              onSave(settings);
            }}
          >
            Save Preferences
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
