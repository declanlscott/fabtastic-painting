import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "./carousel";

import type { JSX } from "solid-js";

export type GalleryCarouselProps = {
  one?: JSX.Element;
  two?: JSX.Element;
  three?: JSX.Element;
  four?: JSX.Element;
  five?: JSX.Element;
};
export function GalleryCarousel(props: GalleryCarouselProps) {
  return (
    <Carousel
      class="max-w-md rounded-3xl"
      opts={{ loop: true }}
      plugins={[Autoplay({ playOnInit: true, delay: 5_000 })]}
    >
      <CarouselContent>
        <CarouselItem>{props.one}</CarouselItem>

        <CarouselItem>{props.two}</CarouselItem>

        <CarouselItem>{props.three}</CarouselItem>

        <CarouselItem>{props.four}</CarouselItem>

        <CarouselItem>{props.five}</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
