import { Button } from "./ui/button";
import Image from "next/image";

export interface ThumbnailViewerProps {
  thumbnailSource: string;
  handleError: () => void;
}

export function ThumbnailViewer({
  thumbnailSource,
  handleError,
}: ThumbnailViewerProps) {
  return (
    <>
      {thumbnailSource && (
        <div className="flex flex-col gap-2 justify-center mx-auto my-6 w-auto h-auto">
          <p className="font-semibold text-xl">Thumbnail</p>
          <Image
            src={thumbnailSource}
            alt="thumbnail"
            width={720}
            height={480}
            onError={handleError}
            style={{
              objectFit: "cover",
            }}
            className="rounded-md"
          />
          <Button>
            <a href={thumbnailSource} target="_blank" download="Thumbnail">
              Download Image
            </a>
          </Button>
        </div>
      )}
    </>
  );
}
