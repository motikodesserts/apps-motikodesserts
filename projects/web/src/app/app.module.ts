import { ErrorHandler, NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
  Meta,
  TransferState,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServerErrorHandler } from './shared/interceptors/server-error-handler.interceptor';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { NgxTranslateRoutesModule } from 'ngx-translate-routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'motikodessertsApp' }),
    BrowserTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
    NgxTranslateRoutesModule.forRoot({
      enableRouteTranslate: true,
      enableTitleTranslate: true,
    }),
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    RecaptchaV3Module,
  ],
  providers: [
    { provide: ErrorHandler, useClass: ServerErrorHandler },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
    Meta,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
