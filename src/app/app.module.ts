import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { HttpClientInterceptor } from './Interceptor/http.client.interceptor';
import { RoleGuardService } from './Interceptor/rolo.guard.service'
import { ToastrModule } from 'ngx-toastr';
import { FormsModule  } from '@angular/forms';
import { AdminService } from './Service/admin.service';
import { ConfigService } from './Service/config.service';
import { OAuthLogger, OAuthService, UrlHelperService } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AdminService,
    ConfigService,
    OAuthService,
    UrlHelperService,
    RoleGuardService,
    // OAuthLogger,
    AsyncPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
