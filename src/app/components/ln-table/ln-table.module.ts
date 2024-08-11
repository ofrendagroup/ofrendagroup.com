import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
// Component
//
import { LnIconModule } from '@components/ln-icon/ln-icon.module';
import { LnTable } from '@components/ln-table/ln-table';
//
// ngModule
//
@NgModule({
  imports: [CommonModule, LnIconModule],
  declarations: [LnTable],
  exports: [LnTable],
})
//
// Name: LnTabPanelModule
//
export class LnTableModule {}
