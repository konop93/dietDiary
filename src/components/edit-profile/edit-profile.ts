import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {EditPhotoComponent} from "../../components/edit-photo/edit-photo";

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfileComponent {

  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController) {
  };

  changeImageModal() {
    let newModal = this.modalCtrl.create(EditPhotoComponent);
    newModal.present()
  }
  closeModal() {
    this.viewCtrl.dismiss();
  };

}
