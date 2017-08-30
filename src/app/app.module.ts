import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Stepcounter } from '@ionic-native/stepcounter';
import { MyApp } from './app.component';

import { TrainingPage } from '../pages/tabs-menu/training/training';
import { ProfilePage } from '../pages/tabs-menu/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/tabs-menu/settings/settings';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { MainScreenPage } from '../pages/main-screen/main-screen';
import { RecipePage } from '../pages/tabs-menu/recipe/recipe'
import { DietPage } from '../pages/tabs-menu/diet/diet'
import { Api } from '../providers/api';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { EditProfileComponent } from '../components/edit-profile/edit-profile'
import { ChooseModalComponent } from '../components/choose-modal/choose-modal'
import { LogoutComponent } from '../components/logout/logout'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserDataProvider } from '../providers/user-data/user-data';
import { DishesProvider } from '../providers/dishes/dishes';
import { ExercisesProvider } from '../providers/exercises/exercises';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    TrainingPage,
    ProfilePage,
    LoginPage,
    SettingsPage,
    RegisterPage,
    TabsPage,
    MainScreenPage,
    RecipePage,
    DietPage,
    EditProfileComponent,
    LogoutComponent,
    ChooseModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrainingPage,
    ProfilePage,
    LoginPage,
    SettingsPage,
    RegisterPage,
    TabsPage,
    MainScreenPage,
    RecipePage,
    DietPage,
    EditProfileComponent,
    LogoutComponent,
    ChooseModalComponent,
  ],
  providers: [
    Api,
    Stepcounter,
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    DishesProvider,
    ExercisesProvider,
  ]
})
export class AppModule { }
