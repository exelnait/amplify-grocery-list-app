import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import 'flowbite';

Amplify.configure(awsconfig)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
