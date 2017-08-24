import { Component } from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular';

@Component({
  selector: 'choose-modal',
  templateUrl: 'choose-modal.html'
})
export class ChooseModalComponent {
  items: any;
  type: any;
  calories;
  constructor(public viewCtrl: ViewController,
              public params: NavParams) {
    this.items = params.get('item');
    this.type = params.get('type');
    console.log(this.items);
  };


  closeModalSuccess() {
    this.calories = Math.floor(Math.random() * 80) + 50;
    this.viewCtrl.dismiss(this.calories);
  }
  closeModal() {
    this.calories = 0;
    this.viewCtrl.dismiss(this.calories);
  };

}
