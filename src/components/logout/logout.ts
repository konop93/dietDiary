import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import { LoginPage } from '../../pages/login/login'
import {NativeStorage} from 'ionic-native';

@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {

  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController,) {
  };
  closeModalAndLogout(){
    NativeStorage.clear().then(data => console.log(data));
    this.navCtrl.push(LoginPage);
    this.viewCtrl.dismiss();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  };


}
