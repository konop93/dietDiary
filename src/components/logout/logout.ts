import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  constructor(public viewCtrl: ViewController) {
  };

  closeModal() {
    this.viewCtrl.dismiss();
  };


}
