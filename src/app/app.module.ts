import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { GeocodingComponent } from './shared/geocoding/geocoding.component';
import { MapPointFormComponent } from './shared/map-point-form/map-point-form.component';
import { ResultListComponent } from './shared/result-list/result-list.component';
import {NominatimService} from "./services/nominatim-service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GeocodingComponent,
    MapPointFormComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NominatimService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
