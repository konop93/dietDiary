import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {DishesProvider} from '../../providers/dishes/dishes'
import {UserDataProvider} from '../../providers/user-data/user-data'
import {ModalController} from 'ionic-angular';
import {ChooseModalComponent} from '../../components/choose-modal/choose-modal'
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
              private _userService: UserDataProvider,
              public settings: Settings,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this._dishesService.getDishes()
      .subscribe(
        response => {
          this.recipes = response;
          console.log(this.recipes);
        },
        error => console.error(error)
      );
  }

  moreDishes(infiniteScroll) {
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.complete();
    }, 500)
  }

  chosenModal(recipe) {
    let newModal = this.modalCtrl.create(ChooseModalComponent, {item: recipe, type: 'recipes'});
    newModal.onDidDismiss((calories) => {
      this._userService.saveData('caloriesToday',calories);
    });
    newModal.present();
  }
}
