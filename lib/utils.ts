import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getVideoId(url: string) {
  let videoId = null;

  // Handle regular YouTube links
  const params = new URL(url).searchParams;
  videoId = params.get("v");

  // Handle short YouTube lilinknks
  if (!videoId && url.includes("youtu.be/")) {
    const urlParts = url.split("/");
    videoId = urlParts[urlParts.length - 1];
  }

  return videoId;
}
