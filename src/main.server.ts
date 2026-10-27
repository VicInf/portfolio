import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/** Server entry — the SSG builder calls this with a BootstrapContext. */
export default (context: BootstrapContext) => bootstrapApplication(App, appConfig, context);
