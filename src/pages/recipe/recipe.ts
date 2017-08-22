import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {DishesProvider} from '../../providers/dishes/dishes'
import {ModalController} from 'ionic-angular';
import { ChooseModalComponent } from '../../components/choose-modal/choose-modal'
import {Settings} from '../../providers/settings';

import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {
  recipes;
  limit = 20;
  constructor(public navCtrl: NavController,
              private _dishesService: DishesProvider,
              public settings: Settings,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public translate: TranslateService) {
    this._dishesService.getDishes()
      .subscribe(
        response => {
          this.recipes = response;
        },
        error => console.error(error)
      );
  }

  moreDishes(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.complete();
    },500)
  }
  chosenModal() {
    let newModal = this.modalCtrl.create(ChooseModalComponent);
    newModal.present();
  }
}
