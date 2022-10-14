import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// type ng.profiler.timeChangeDetection({record: true})
// in the browser console to see change detection
platformBrowserDynamic().bootstrapModule(AppModule)
                        .then(module => {
                          const applicationRef = module.injector.get(ApplicationRef);
                          const appComponent = applicationRef.components[0];
                          enableDebugTools(appComponent);
                        })
                        .catch(err => console.error(err));
