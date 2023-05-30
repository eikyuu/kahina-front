import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { Route, RouterModule } from '@angular/router';
import { BearerInterceptor } from './@core/utils/BearerInterceptor';

const APP_ROUTES: Route[] = [
    {
      path: "",
      loadChildren: () => import("./app.routes").then((m) => m.routes),
    },
  ];
  
export const appConfig : ApplicationConfig = {
    providers: [
      importProvidersFrom(HttpClientModule),
      importProvidersFrom(RouterModule.forRoot(APP_ROUTES, { useHash: true, scrollPositionRestoration: 'top'  })),
      { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true },
    ]
  }