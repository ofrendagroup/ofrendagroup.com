import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
//
// Component
//
import { LnCdkDirectiveModule } from '@lernender/cdk';
import { LnIconModule } from '@components/ln-icon/ln-icon.module';
import { LnDropDown } from './ln-dropdown';

//
// ngModule
//
@NgModule({
  imports: [CommonModule, LnIconModule, LnCdkDirectiveModule, PortalModule],
  declarations: [LnDropDown],
  exports: [LnDropDown],
})
//
// Name: LnDropdownModule
//
export class LnDropDownModule {}
