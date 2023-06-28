"use client";

import { useState } from "react";

import { ThumbnailViewer } from "@/components/thumbnail-viewer";
import { InvalidVideoLink } from "@/components/invalid-video-link";
import { Form } from "@/components/form";

import { getVideoId } from "@/lib/utils";

export default function Home() {
  const [link, setLink] = useState("");
  const [validLink, setValidLink] = useState(true);
  const [thumbnailSource, setThumbnailSource] = useState("");

  const handleError = () => {
    setValidLink(false);
    setThumbnailSource("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!link) {
      return;
    }

    const videoId = getVideoId(link);

    if (!videoId) {
      setValidLink(false);
      return;
    }
    setValidLink(true);
    setThumbnailSource(
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    );
    setLink("");
  };

  return (
    <div className="container relative flex flex-col gap-4">
      <div className="grid w-full max-w-sm md:max-w-md lg:max-w-lg items-center gap-2 mx-auto my-4">
        <Form link={link} setLink={setLink} handleSubmit={handleSubmit} />
      </div>

      {!validLink && <InvalidVideoLink />}

      <ThumbnailViewer
        thumbnailSource={thumbnailSource}
        handleError={handleError}
      />
    </div>
  );
}
