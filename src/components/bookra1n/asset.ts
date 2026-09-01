/**
 * Prefix a public asset with the deploy base path.
 * NEXT_PUBLIC_BASE_PATH is baked in at build time (GitHub Pages export uses
 * /bookra1n), so plain <img> tags resolve correctly in every environment.
 */
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
