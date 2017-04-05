import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page';
import { ProcessPageComponent } from './containers/process-page';
import { BlogPageComponent } from './containers/blog-page';
import { ResourcesPageComponent } from './containers/resources-page';
import { ServicesPageComponent } from './containers/services-page';
import { TechstackPageComponent } from './containers/techstack-page';
import { WorkPageComponent } from './containers/work-page';
import { HomePageComponent } from './containers/home-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'process',
    component: ProcessPageComponent
  },
  {
    path: 'work',
    component: WorkPageComponent
  },
  {
    path: 'resources',
    component: ResourcesPageComponent
  },
  {
    path: 'tech-stack',
    component: TechstackPageComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
