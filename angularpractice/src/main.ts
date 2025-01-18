import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CustomAppModule } from './app/custom-app/custom-app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  // platformBrowserDynamic().bootstrapModule(CustomAppModule)
  // .catch(err => console.error(err));
