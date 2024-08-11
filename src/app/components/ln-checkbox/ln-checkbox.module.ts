import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LnIconModule } from '@components/ln-icon/ln-icon.module';
import { LnCheckBox } from '@components/ln-checkbox/ln-checkbox';

@NgModule({
  imports: [CommonModule, LnIconModule],
  declarations: [LnCheckBox],
  exports: [LnCheckBox],
})
export class LnCheckboxModule {}
