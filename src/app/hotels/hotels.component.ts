import { Component, OnInit } from '@angular/core';
import {IHotel} from '../hotel-admin/hotel-admin.component';
import {HotelAdminService} from "../services/hotel-admin.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  listHotelsShowHide = 'visible';
  hotelDetailsShowHide = 'collapse';
  bookSuccessShowHide = 'collapse';
  isBooked = false; // true, if user has already booked the hotel
  hotels: IHotel[];
  hotelTmp;

  constructor(private hotelAdminService: HotelAdminService) {
    this.initHotelTmp();
    this.retrieveHotels();
  }
  ngOnInit() {
  }
  bookHotel() {
    this.bookSuccessShowHide = 'visible';
    this.hideHotelDetails();
  }
  checkInformation(hotel) {
    this.showHotelDetails();
    this.hotelTmp = Object.create(hotel);
    console.log(hotel);
  }
  hideHotelDetails() {
    this.listHotelsShowHide = 'visible';
    this.hotelDetailsShowHide = 'collapse';
  }
  initHotelTmp() {
    this.hotelTmp = {
      phoneNumber: '', name: '', phone: '', address: ''
      , email: '', numberRooms: 1, description: ''
    };
  }
  retrieveHotels() {
    this.hotelAdminService.retrieveHotels().subscribe((hotels: IHotel[]) => {
        this.hotels = hotels;
        console.log("----");
        console.log(this.hotels);
      },
      error => {
        console.log("error   " + error);
      });

  }
  showHotelDetails() {
    this.listHotelsShowHide = 'collapse';
    this.hotelDetailsShowHide = 'visible';
    this.bookSuccessShowHide = 'collapse'; // hide old success message
    this.initHotelTmp();
  }

}
