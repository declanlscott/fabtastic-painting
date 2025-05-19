import {
  createVisibilityObserver,
  withOccurrence,
} from "@solid-primitives/intersection-observer";

import type { JSX } from "solid-js";

export type FadeInProps = {
  children?: JSX.Element;
};
export function FadeIn(props: FadeInProps) {
  const useVisibilityObserver = createVisibilityObserver(
    {},
    withOccurrence((entry, { visible }) => {
      // If element was already visible, keep it visible
      if (visible) return true;

      // Otherwise, return if the element is intersecting
      return entry.isIntersecting;
    })
  );

  let ref: HTMLDivElement | undefined;

  const isVisible = useVisibilityObserver(() => ref);

  return (
    <div class="overflow-hidden">
      <div
        ref={(element) => (ref = element)}
        style={{
          transition: "opacity 1000ms, transform 1000ms",
          opacity: isVisible() ? 1 : 0,
          transform: `translateX(${isVisible() ? 0 : -100}px)`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
