import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {LogoutComponent} from "../../../components/logout/logout";
import {EditProfileComponent} from "../../../components/edit-profile/edit-profile";


import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-settings',
  templateUrl: './settings.html'
})
export class SettingsPage {
  options: any;

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public translate: TranslateService) {
  }

  showModalLogout() {
    let newModal = this.modalCtrl.create(LogoutComponent);
    newModal.present();
  }
  showModalEditProfile() {
    let newModal = this.modalCtrl.create(EditProfileComponent);
    newModal.present()
  }
}
