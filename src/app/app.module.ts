import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StorageServiceModule} from 'angular-webstorage-service';
import {ROUTING} from './conf/routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './components/pages/public/main/main.component';
import {ApiService} from './providers/api/api.service';
import {LocalStorageService} from './providers/storage/local-storage.service';
import {AuthGuardService} from './providers/auth-guard/auth-guard.service';
import {RequisitionInterceptor} from './interceptors/requisition.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    ROUTING,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService,
    LocalStorageService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequisitionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
