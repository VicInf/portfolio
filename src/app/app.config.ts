import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

/**
 * Single-page portfolio — no Angular Router. In-page navigation uses anchor
 * links (`#work`, `#about`, `#contact`) with CSS smooth scrolling, which also
 * keeps the prerendered shell dead simple.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Reuse the prerendered DOM instead of destroying and re-rendering it.
    // Language is applied only after hydration (see I18n) so the client's
    // first render matches the EN output of the SSG build.
    provideClientHydration(),
  ]
};
