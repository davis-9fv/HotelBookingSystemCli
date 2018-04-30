import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {appRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HotelAdminComponent} from './hotel-admin/hotel-admin.component';

import {HotelAdminService} from './services/hotel-admin.service';
import { HotelsComponent } from './hotels/hotels.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HotelAdminComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HotelAdminService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
