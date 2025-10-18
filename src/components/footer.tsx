import React from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Citadel Publication. All rights
          reserved.
        </p>
        <Button variant="outline">
          <MessageCircle className="mr-2 h-4 w-4" />
          Talk with Us
        </Button>
      </div>
    </footer>
  );
}
