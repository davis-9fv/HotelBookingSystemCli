import { Component, OnInit } from '@angular/core';
import {IHotel} from '../hotel-admin/hotel-admin.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  listHotelsShowHide = 'visible';
  newModifyShowHide = 'collapse';
  isNew = true;
  hotels: IHotel[];
  hotelTmp;

  constructor() { }

  ngOnInit() {
  }
  checkInformation(hotel) {
    this.showHotelDetails();
    this.hotelTmp = Object.create(hotel);
    console.log(hotel);
    this.isNew = false;
  }
  initHotelTmp() {
    this.hotelTmp = {
      phoneNumber: '', name: '', phone: '', address: ''
      , email: '', numberRooms: 1, description: ''
    };
  }
  searchHotels() {
  }
  showHotelDetails() {
    this.listHotelsShowHide = 'collapse';
    this.newModifyShowHide = 'visible';
    this.initHotelTmp();
    this.isNew = true;
  }

}
