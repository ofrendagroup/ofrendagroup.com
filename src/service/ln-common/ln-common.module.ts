import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//
// Import Services
//
import { LnMessageService } from '@service/ln-common/ln-message.service';
import { LnTextFileService } from '@service/ln-common/ln-text-file.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [LnMessageService, LnTextFileService],
})

//
// LnCommonServiceModule
//
export class LnCommonServiceModule {
  /**
   * forRoot()
   */
  public static forRoot(): ModuleWithProviders<LnCommonServiceModule> {
    return {
      ngModule: LnCommonServiceModule,
      providers: [LnMessageService, LnTextFileService],
    };
  }
}
