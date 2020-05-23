import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { SlideShowComponent } from './element/slide-show/slide-show.component';
import { SearchTextComponent } from './element/search-text/search-text.component';
import { SearchBoxComponent } from './element/search-box/search-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { ModelComponent } from './model/model.component';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductTilesComponent } from './element/product-tiles/product-tiles.component';
import { ProductTileComponent } from './element/product-tile/product-tile.component';
import { MoasicLargeComponent } from './element/mosaic/moasic-large/moasic-large.component';
import { MoasicSmallComponent } from './element/mosaic/moasic-small/moasic-small.component';
import { MoasicMediumComponent } from './element/mosaic/moasic-medium/moasic-medium.component';
import { TitleComponent } from './element/mosaic/title/title.component';
import { SubTitleComponent } from './element/mosaic/sub-title/sub-title.component';
import { ListViewComponent } from './list-view/list-view.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ProductStandardViewComponent } from './product-standard-view/product-standard-view.component';
import { ProductFullViewComponent } from './product-full-view/product-full-view.component';
import { RatingComponent } from './element/rating/rating.component';
import { MapBasicComponent } from './element/map-basic/map-basic.component';
import { AgmCoreModule } from '@agm/core';
import { MailComponent } from './mail/mail.component';
import { MailRecordComponent } from './mail/mail-record/mail-record.component';
import { DetailsComponent } from './mail/mail/details/details.component';
import { MailDetailsComponent } from './mail/mail-details/mail-details.component';
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
    MenuListComponent,
    SlideShowComponent,
    SearchTextComponent,
    SearchBoxComponent,
    LandingPageComponent,
    FooterComponent,
    ModelComponent,
    ProductTilesComponent,
    ProductTileComponent,
    MoasicLargeComponent,
    MoasicSmallComponent,
    MoasicMediumComponent,
    TitleComponent,
    SubTitleComponent,
    ListViewComponent,
    UploadImageComponent,
    ProductStandardViewComponent,
    ProductFullViewComponent,
    RatingComponent,
    MapBasicComponent,
    MailComponent,
    MailRecordComponent,
    DetailsComponent,
    MailDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEvhYgeKLzYv7186JkGQSlOURaRkUzKZE',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
