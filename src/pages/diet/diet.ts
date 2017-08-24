import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DIET} from '../../models/diet.mock'
import {UserDataProvider} from '../../providers/user-data/user-data'
import {ModalController} from 'ionic-angular';
import {ChooseModalComponent} from '../../components/choose-modal/choose-modal'
@Component({
  selector: 'page-diet',
  templateUrl: 'diet.html',
})
export class DietPage {
  diets: any;

  constructor(public navCtrl: NavController,
              private _userService: UserDataProvider,
              public modalCtrl: ModalController) {
    this.diets = DIET;
  }

  chosenModal(diet) {
    let newModal = this.modalCtrl.create(ChooseModalComponent, {item: diet, type: 'diet'});
    newModal.onDidDismiss((diet) => {
      this._userService.saveDiet(diet);
    });
    newModal.present();
  }


}
