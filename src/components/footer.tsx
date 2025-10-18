import React from "react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Citadel Publication. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">Talk with Us</p>
        </div>
      </div>
    </footer>
  );
}