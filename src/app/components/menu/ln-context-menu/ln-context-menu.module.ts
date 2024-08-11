import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
// Components
//
import { LnIconModule } from '@components/ln-icon/ln-icon.module';
import { LnContextMenu } from '@components/ln-context-menu/ln-context-menu';

@NgModule({
    imports: [CommonModule, LnIconModule],
    declarations: [LnContextMenu],
    exports: [LnContextMenu],
})
export class LnContextMenuModule {}
