import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="container max-w-6xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Can I use YouTube thumbnail downloader to download thumbnails for
            any video?
          </AccordionTrigger>
          <AccordionContent>
            YouTube thumbnail downloaders are intended for personal and
            non-commercial use. It&apos;s essential to respect the copyright and
            intellectual property rights of others. Ensure that you have the
            necessary permissions or consider fair use policies when using
            downloaded thumbnails.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need permission to use thumbnails downloaded from YouTube?
          </AccordionTrigger>
          <AccordionContent>
            The ownership and rights to the videos and their thumbnails reside
            with the original creators. Using downloaded thumbnails without
            permission may infringe upon copyright laws. It&apos;s advisable to
            seek permission from the video creators or check if they provide
            explicit permission or guidelines for using their thumbnails.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I use downloaded thumbnails for commercial purposes?
          </AccordionTrigger>
          <AccordionContent>
            Generally, using downloaded thumbnails for commercial purposes
            without permission may violate copyright laws and could lead to
            legal consequences. It&apos;s important to obtain proper
            authorization or explore alternative options like creating your own
            custom thumbnails or seeking licensed images.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Are there any restrictions on modifying downloaded YouTube
            thumbnails?
          </AccordionTrigger>
          <AccordionContent>
            Modifying downloaded thumbnails may be subject to copyright laws.
            Altering or manipulating thumbnails without permission may infringe
            upon the original creator&apos;s rights. If you need to modify a
            thumbnail, it&apos;s advisable to obtain proper authorization or
            consider creating your own custom graphics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What are the consequences of copyright infringement when using
            downloaded thumbnails?
          </AccordionTrigger>
          <AccordionContent>
            Copyright infringement can have legal ramifications, including
            potential legal actions, penalties, and financial liabilities.
            It&apos;s crucial to respect copyright laws and obtain appropriate
            permissions or licenses before using thumbnails downloaded from
            YouTube or any other platform. Familiarize yourself with the
            copyright policies and laws of your jurisdiction to ensure
            compliance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
