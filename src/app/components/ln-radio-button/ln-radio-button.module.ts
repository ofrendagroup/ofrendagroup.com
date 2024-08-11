import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
// Lernender/cdk
//
import { LnCdkBaseModule } from '@lernender/cdk';

//
// Component
//
import { LnRadioButton } from './ln-radio-button';
//
// ngModule
//
@NgModule({
  imports: [CommonModule],
  declarations: [LnRadioButton],
  exports: [LnRadioButton],
})
//
// Name: LnRadioButtonModule
//
export class LnRadioButtonModule {}
