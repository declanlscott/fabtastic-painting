import { createEffect, createSignal, For, onCleanup, Show } from "solid-js";

import type { JSX } from "solid-js";

type MainNavLink = { label: string; path: string };

export type MainNavProps = {
  currentPath: string;
  logo?: JSX.Element;
};

export function MainNav(props: MainNavProps) {
  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
  ] satisfies Array<MainNavLink>;

  const currentPath = () => {
    // Remove trailing slash
    if (props.currentPath !== "/" && props.currentPath.endsWith("/"))
      return props.currentPath.slice(0, -1);

    return props.currentPath;
  };

  const [isOpen, setIsOpen] = createSignal(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  createEffect(() => {
    const hideMobileMenu = () => {
      if (isOpen() && window.innerWidth > 1024) toggle();
    };

    window.addEventListener("resize", hideMobileMenu);

    onCleanup(() => window.removeEventListener("resize", hideMobileMenu));
  });

  return (
    <nav class="bg-black lg:sticky lg:top-0 lg:z-10">
      <div class="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <a href="/" class="flex items-center py-3">
              {props.logo}
            </a>
          </div>

          <ul class="hidden items-center text-lg font-bold text-white lg:flex">
            <For each={links}>
              {(link) => (
                <li>
                  <a
                    href={link.path}
                    class="hover:text-primary px-7 py-4 uppercase transition duration-200"
                    classList={{
                      "text-primary": currentPath() === link.path,
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              )}
            </For>

            <li>
              <a
                href="/contact-us"
                class="bg-tertiary hover:bg-tertiary-dark ml-7 rounded-full px-4 py-2 uppercase transition duration-200"
              >
                Free Estimate
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggle}
            class="flex cursor-pointer items-center px-4 lg:hidden"
          >
            <Show when={!isOpen()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-primary size-8"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Show>

            <Show when={isOpen()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-primary size-8"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Show>
          </button>
        </div>
      </div>

      <Show when={isOpen()}>
        <ul class="bg-secondary items-center text-center text-lg font-bold uppercase text-white">
          <For each={links}>
            {(link) => (
              <li>
                <a
                  href={link.path}
                  class="hover:text-primary block px-2 py-4 transition duration-200"
                  classList={{
                    "text-primary": currentPath() === link.path,
                  }}
                >
                  {link.label}
                </a>
              </li>
            )}
          </For>

          <li>
            <a
              href="/contact-us"
              class="hover:text-primary block px-2 py-4 transition duration-200"
              classList={{
                "text-primary": currentPath() === "/contact-us",
              }}
            >
              Free Estimate
            </a>
          </li>
        </ul>
      </Show>
    </nav>
  );
}
