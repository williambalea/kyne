import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { MdcDrawerModule } from '@angular-mdc/web/drawer';
import { MdcListModule } from '@angular-mdc/web/list';
import { MdcCardModule } from '@angular-mdc/web/card';
import { MDCDataTableModule } from '@angular-mdc/web/data-table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MdcButtonModule,
    MdcDrawerModule,
    MdcListModule,
    MdcCardModule,
    MDCDataTableModule,
  ],
})
export class MaterialModule { }
