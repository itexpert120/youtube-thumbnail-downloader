import { Github } from "lucide-react";

import { MainNav } from "./main-nav";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-backgroudn/95 backdrop-blur flex justify-between items-center p-2">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex space-x-4 flex-1 justify-end">
          <Button>
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
