import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'choose-modal',
  templateUrl: 'choose-modal.html'
})
export class ChooseModalComponent {

  constructor(public viewCtrl: ViewController) {
  };

  closeModal() {
    this.viewCtrl.dismiss();
  };

}
