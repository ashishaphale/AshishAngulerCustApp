import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './CustomerApp/Home/CustomerApp.MainModule';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
