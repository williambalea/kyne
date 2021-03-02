import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { MdcDrawerModule } from '@angular-mdc/web/drawer';
import { MdcListModule } from '@angular-mdc/web/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MdcButtonModule,
    MdcDrawerModule,
    MdcListModule,
  ],
})
export class MaterialModule { }
