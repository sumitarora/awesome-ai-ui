import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ComponentsModule } from './components';

import { AppComponent } from './containers/app';
import { ProcessPageComponent } from './containers/process-page';
import { BlogPageComponent } from './containers/blog-page';
import { ResourcesPageComponent } from './containers/resources-page';
import { ServicesPageComponent } from './containers/services-page';
import { TechstackPageComponent } from './containers/techstack-page';
import { WorkPageComponent } from './containers/work-page';
import { HomePageComponent } from './containers/home-page';
import { NotFoundPageComponent } from './containers/not-found-page';

import { AnalyticsService } from './services/analytics';
import { SessionService } from './services/session';

import { routes } from './routes';
import { reducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    RouterStoreModule.connectRouter(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [
    AppComponent,
    ProcessPageComponent,
    BlogPageComponent,
    ResourcesPageComponent,
    ServicesPageComponent,
    TechstackPageComponent,
    WorkPageComponent,
    HomePageComponent,
    NotFoundPageComponent
  ],
  providers: [
    AnalyticsService,
    SessionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }