import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {UserDataProvider} from "../../providers/user-data/user-data";

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfileComponent {
  users: any;

  constructor(public viewCtrl: ViewController,
              private _userDataProvider: UserDataProvider,
              public modalCtrl: ModalController) {
    this.users = this._userDataProvider.getUserData();
  };

  closeModal() {
    this.viewCtrl.dismiss();
  };
  saveChanges(){
    this._userDataProvider.update(this.users[0])
    this.viewCtrl.dismiss();
  }
}
