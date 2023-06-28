import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t mt-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href="https://linkedin.com/in/itexpert120"
            target="_blank"
            className="font-medium underline underline-offset-4"
            rel="noreferrer"
          >
            itexpert120
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/itexpert120/youtube-thumbnail-downloader"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
