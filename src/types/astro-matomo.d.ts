declare module '@jop-software/astro-matomo' {
  import type { AstroIntegration } from 'astro';

  interface MatomoOptions {
    baseUrl: string;
    siteId: number;
  }

  function matomo(options: MatomoOptions): AstroIntegration;

  export default matomo;
}
