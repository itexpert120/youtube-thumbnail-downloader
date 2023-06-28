import { Youtube } from "lucide-react";

export function MainNav() {
  return (
    <nav className="flex flex-row items-center">
      <Youtube className="mr-2 h-8 w-8 hidden sm:flex" />
      <p className="text-md sm:text-xl font-bold">
        YouTube Thumbnail Downloader
      </p>
    </nav>
  );
}
