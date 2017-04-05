import { NgModule } from '@angular/core';

import { CtaContactComponent } from './cta-contact';
import { CtaInOfficeTrainingComponent } from './cta-inoffice-training';
import { CtaOnlineTrainingComponent } from './cta-online-training';

export const COMPONENTS = [
  CtaContactComponent,
  CtaInOfficeTrainingComponent,
  CtaOnlineTrainingComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }