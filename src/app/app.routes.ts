import { provideRouter, RouterConfig } from '@angular/router';

import { LandingPageComponent } from './landing-page/';

export const routes: RouterConfig = [
    { path: '/landing', component: LandingPageComponent, index: true },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];