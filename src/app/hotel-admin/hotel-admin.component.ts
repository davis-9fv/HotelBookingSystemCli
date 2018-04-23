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

  /**
   hotel1 = {
    number: '1', name: 'Francisco Hotel', phone: '+993 9230 2392', address: 'Juan Arauz y Vicente Hereda'
    , email: 'fran@hotmail.com', rooms: 3, description: 'descripont'
  };

   hotel2 = {
    number: '1', name: 'Francisco Hotel', phone: '+993 9230 2392', address: 'Juan Arauz y Vicente Hereda'
    , email: 'fran@hotmail.com', rooms: 3, description: 'descripont'
  };

   hotels: Array<Object> = [this.hotel1, this.hotel2];
   **/
  hotelTmp;

  constructor(private hotelAdminService: HotelAdminService) {
    this.initHotelTmp();
    console.log("asdf")
    console.log(hotelAdminService.retrieveHotels());

    hotelAdminService.retrieveHotels().subscribe((hotels: IHotel[]) => {
        this.hotels = hotels;
        console.log("----" + this.hotels[0].description);
      },
      error => {
        console.log("error   " + error);
      });


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
    // this.initHotelTmp();
  }

  checkInformation(hotel) {
    this.showNewHotel();
    this.hotelTmp = hotel;
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
      console.log(data);
    }, error => {
      console.log(error);
      console.log('hiba');
    });


    this.hotels.push(this.hotelTmp);
    console.log(this.hotelTmp);
    this.initHotelTmp();
    this.hideNewHotel();

  }

  modifyHotel() {
    this.hideNewHotel();
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

