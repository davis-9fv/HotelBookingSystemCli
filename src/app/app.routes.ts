import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HotelAdminComponent} from './hotel-admin/hotel-admin.component';
import {HotelsComponent} from './hotels/hotels.component';
import {LoginComponent} from './login/login.component';

export const appRoutes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'HotelAdmin', component: HotelAdminComponent},
  {path: 'Hotels', component: HotelsComponent},
  {path: 'Login', component: LoginComponent},
  {path: '**', component: MainComponent}
];
