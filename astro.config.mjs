// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import matomo from '@jop-software/astro-matomo';

// https://astro.build/config
export default defineConfig({
  image: {
      service: passthroughImageService()
  },
  site: "https://fabianpecher.de",
  integrations: [
    matomo({
      baseUrl: "https://matomo.fpecher.de/",
      siteId: 1
    }),
  ],
});

