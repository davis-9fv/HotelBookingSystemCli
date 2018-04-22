import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HotelAdminComponent} from './hotel-admin/hotel-admin.component';

export const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'HotelAdmin', component: HotelAdminComponent},
  {path: '**', component: MainComponent}
];
