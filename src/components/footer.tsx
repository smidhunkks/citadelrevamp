import React from "react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ClaritySite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
