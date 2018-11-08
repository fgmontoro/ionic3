import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public myString: string = '';

  constructor(public navCtrl: NavController, public service: RequestProvider) {
  }

  ionViewDidLoad() {
    this.service.request().subscribe(
      (data) => {
        console.log(data);
        this.service.beers = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("completed");
      }
    );
  }

  media(message: string) {
    this.myString = message;
  }

  gotodetails(beer) {
    this.navCtrl.push(DetailsPage, {beer})
  }

}
