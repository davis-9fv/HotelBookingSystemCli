import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class HotelAdminService {

  constructor(private http: HttpClient) {
  }

  registerHotel(hotel) {

    const body = new URLSearchParams();
    body.set('name', hotel.name);
    body.set('address', hotel.address);
    body.set('description', hotel.description);
    body.set('phoneNumber', hotel.phoneNumber);
    body.set('email', hotel.email);
    body.set('numberRooms', hotel.numberRooms);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post('http://localhost:5000/rest/hotel/insert', body.toString(), options);
  }

  modifyHotel(hotel){
    const body = new URLSearchParams();
    body.set('hotelId', hotel._id);
    body.set('name', hotel.name);
    body.set('address', hotel.address);
    body.set('description', hotel.description);
    body.set('phoneNumber', hotel.phoneNumber);
    body.set('email', hotel.email);
    body.set('numberRooms', hotel.numberRooms);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post('http://localhost:5000/rest/hotel/update', body.toString(), options);

  }

  retrieveHotels() {
    const body = new URLSearchParams();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.get('http://localhost:5000/rest/hotel/find', options);
  }

}
