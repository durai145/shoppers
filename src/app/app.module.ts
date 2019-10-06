import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { ElementComponent } from './element/element.component';
import { MenuPanelComponent } from './element/menu-panel/menu-panel.component';
import { HeaderPanelComponent } from './element/header-panel/header-panel.component';
import { BodyPanelComponent } from './element/body-panel/body-panel.component';
import { InputTextElementComponent } from './element/input-text-element/input-text-element.component';
import { InputListElementComponent } from './element/input-list-element/input-list-element.component';
import { InputTextPasswordElementComponent } from './element/input-text-password-element/input-text-password-element.component';
import { InputAmountElementComponent } from './element/input-amount-element/input-amount-element.component';
import { InputButtonElementComponent } from './element/input-button-element/input-button-element.component';
import { MosaicComponent } from './element/mosaic/mosaic.component';
import { GridComponent } from './element/grid/grid.component';
import { MenuListComponent } from './element/menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicElementsComponent,
    ElementComponent,
    MenuPanelComponent,
    HeaderPanelComponent,
    BodyPanelComponent,
    InputTextElementComponent,
    InputListElementComponent,
    InputTextPasswordElementComponent,
    InputAmountElementComponent,
    InputButtonElementComponent,
    MosaicComponent,
    GridComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
