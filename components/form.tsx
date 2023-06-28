import { Label } from "@radix-ui/react-label";
import { SetStateAction } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export interface FormProps {
  link: string;
  handleSubmit: (e: any) => void;
  setLink: (value: SetStateAction<string>) => void;
}

export function Form({ link, handleSubmit, setLink }: FormProps) {
  return (
    <div className="grid w-full max-w-sm md:max-w-md lg:max-w-lg items-center gap-2 mx-auto my-4">
      <Label htmlFor="url">YouTube Video Link</Label>
      <Input
        type="url"
        id="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <p
        className="text-sm text-muted-foreground"
        onClick={() => setLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
      >
        <span className="font-bold">Sample YouTube Link: </span>
        <span className="underline underline-offset-4 cursor-pointer">
          https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </span>
      </p>
      <Button onClick={handleSubmit} type="submit" className="mt-4">
        Get Thumbnail
      </Button>
    </div>
  );
}
