import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LnJson } from '@components/ln-json/ln-json';

@NgModule({
  imports: [CommonModule],
  declarations: [LnJson],
  exports: [LnJson],
})
export class LnJsonModule {}
