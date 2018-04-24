import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {HotelAdminService} from "../services/hotel-admin.service";
import {Observable} from "rxjs/Rx"

@Component({
  selector: 'app-hotel-admin',
  templateUrl: './hotel-admin.component.html',
  styleUrls: ['./hotel-admin.component.css']
})
export class HotelAdminComponent implements OnInit {

  newButtonShowHide = 'visible';
  listHotelsShowHide = 'visible';
  newModifyShowHide = 'collapse';
  isNew = true;
  hotels: IHotel[];
  hotelTmp;

  constructor(private hotelAdminService: HotelAdminService) {
    this.initHotelTmp();
    this.retrieveHotels();
  }

  ngOnInit() {
  }

  showNewHotel() {
    this.newButtonShowHide = 'collapse';
    this.listHotelsShowHide = 'collapse';
    this.newModifyShowHide = 'visible';
    this.initHotelTmp();
    this.isNew = true;
  }

  hideNewHotel() {
    this.newButtonShowHide = 'visible';
    this.listHotelsShowHide = 'visible';
    this.newModifyShowHide = 'collapse';
  }

  checkInformation(hotel) {
    this.showNewHotel();
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

  addNewHotel() {
    this.hotelAdminService.registerHotel(this.hotelTmp).subscribe(data => {
      console.log("Output from srv--------");
      console.log(data);
      //this.hotels.push(this.hotelTmp);
      this.retrieveHotels();
    }, error => {
      console.log(error);
      this.retrieveHotels();
    });
    this.initHotelTmp();
    this.hideNewHotel();


  }

  modifyHotel() {
    this.hotelAdminService.modifyHotel(this.hotelTmp).subscribe((hotels: IHotel[]) => {
        this.retrieveHotels();
        console.log("Modfy:" + this.hotelTmp._id);
        this.hideNewHotel();
      },
      error => {
        console.log("error   " + error);
      });


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
}

export interface IHotel {
  _id: string;
  name: string;
  address: string;
  description: string;
  phoneNumber: string;
  email: string
  numberRooms: number;
}

