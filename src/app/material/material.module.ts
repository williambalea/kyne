import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { MdcDrawerModule } from '@angular-mdc/web/drawer';
import { MdcListModule } from '@angular-mdc/web/list';
import { MdcCardModule } from '@angular-mdc/web/card';
import { MDCDataTableModule } from '@angular-mdc/web/data-table';
import { MdcTypographyModule } from '@angular-mdc/web/typography';
import { MdcIconModule } from '@angular-mdc/web/icon';
import { MdcElevationModule } from '@angular-mdc/web/elevation';
import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';


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
    MdcTypographyModule,
    MdcIconModule,
    MdcElevationModule,
    MdcTopAppBarModule
  ],
})
export class MaterialModule { }
