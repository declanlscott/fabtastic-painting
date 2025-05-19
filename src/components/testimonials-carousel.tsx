import Autoplay from "embla-carousel-autoplay";
import { For } from "solid-js";

import { Carousel, CarouselContent, CarouselItem } from "./carousel";

import type { getCollection } from "astro:content";

export type TestimonialsCarouselProps = {
  testimonials: Awaited<ReturnType<typeof getCollection<"testimonials">>>;
};
export function TestimonialsCarousel(props: TestimonialsCarouselProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ playOnInit: true, delay: 15_000 })]}
    >
      <CarouselContent class="flex items-center">
        <For each={props.testimonials}>
          {(testimonial) => (
            <CarouselItem>
              <div class="mx-auto max-w-4xl text-center">
                <p class="font-base mb-6 font-light italic">
                  "{testimonial.data.content}"
                </p>

                <p class="font-base font-medium">{testimonial.data.author}</p>
              </div>
            </CarouselItem>
          )}
        </For>
      </CarouselContent>
    </Carousel>
  );
}
