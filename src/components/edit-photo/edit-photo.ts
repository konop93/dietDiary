import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'edit-photo',
  templateUrl: 'edit-photo.html'
})
export class EditPhotoComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  };
}
