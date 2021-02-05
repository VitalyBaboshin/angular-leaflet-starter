import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

import {NominatimService} from "./services/nominatim-service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {GeocodingComponent} from "./shared/component/geocoding/geocoding.component";
import {ResultsListComponent} from "./shared/component/results-list/results-list.component";
import {MapPointFormComponent} from "./shared/component/map-point-form/map-point-form.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GeocodingComponent,
    MapPointFormComponent,
    ResultsListComponent
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
