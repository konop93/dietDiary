import {Component} from '@angular/core';
import {ExercisesProvider} from '../../../providers/exercises/exercises'
import {UserDataProvider} from '../../../providers/user-data/user-data'
import {NavController, NavParams} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import { ChooseModalComponent } from '../../../components/choose-modal/choose-modal'
@Component({
  selector: 'page-cards',
  templateUrl: 'training.html'
})
export class TrainingPage {
  exercises;
  limit = 20;

  constructor(public navCtrl: NavController,
              private _exerciseService: ExercisesProvider,
              private _userService: UserDataProvider,
              public navParams: NavParams,
              public modalCtrl: ModalController,) {
    this._exerciseService.getExercises()
      .subscribe(
        res => {
          this.exercises = res;
          this.exercises = this.exercises.results;
        },
        error => console.error(error)
      )
  }
  moreExercises(infiniteScroll) {
    if(this.exercises.length <= this.limit){
      infiniteScroll.complete();
    }
    setTimeout(() => {
      this.limit += 10;
      infiniteScroll.complete();
    },500)
  }
  chosenModal(exercise) {
    let newModal = this.modalCtrl.create(ChooseModalComponent, {item: exercise, type: 'exercises'});
    newModal.onDidDismiss((calories) => {
      this._userService.saveData('exercises',calories);
    });

    newModal.present();
  }
}
