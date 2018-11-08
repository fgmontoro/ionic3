import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Pipe({ name: 'keyValueUnsorted', pure: false  })
export class KeyValuePipe implements PipeTransform {
  transform(input: any): any {
    let keys = [];
    for (let key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key: key, value: input[key]});
      }
    }
    return keys;
  }
}

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public beer :any;
  show:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('beer'));
    this.beer = this.navParams.get('beer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goback() {
    this.navCtrl.pop();
  }

}
