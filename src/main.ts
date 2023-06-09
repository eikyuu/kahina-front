import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localFrExtra from '@angular/common/locales/extra/fr';
import { appConfig } from './app/app.config';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(localeFr, 'fr-FR', localFrExtra);

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
