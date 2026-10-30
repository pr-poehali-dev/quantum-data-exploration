// framer-motion 10 typings reference React 18 factory types (ReactHTML,
// DetailedHTMLFactory) that were removed from @types/react 19. Restore them
// as type-only declarations so motion.* components keep their HTML props.
import type { ClassAttributes, DetailedHTMLProps, DetailedReactHTMLElement, HTMLAttributes, JSX, ReactNode } from "react";

type HtmlTag = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] extends DetailedHTMLProps<infer P, infer T>
    ? P extends HTMLAttributes<T>
      ? T extends HTMLElement
        ? K
        : never
      : never
    : never;
}[keyof JSX.IntrinsicElements];

type HtmlFactories = {
  [K in HtmlTag]: JSX.IntrinsicElements[K] extends DetailedHTMLProps<infer P, infer T>
    ? P extends HTMLAttributes<T>
      ? T extends HTMLElement
        ? import("react").DetailedHTMLFactory<P, T>
        : never
      : never
    : never;
};

declare module "react" {
  interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> {
    (props?: (ClassAttributes<T> & P) | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
  }
  interface ReactHTML extends HtmlFactories {}
}
