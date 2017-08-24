import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Stepcounter } from '@ionic-native/stepcounter';
import { MyApp } from './app.component';

import { TrainingPage } from '../pages/training/training';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { MainScreenPage } from '../pages/main-screen/main-screen';
import { RecipePage } from '../pages/recipe/recipe'
import { DietPage } from '../pages/diet/diet'
import { Api } from '../providers/api';
import { Settings } from '../providers/settings';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { EditProfileComponent } from '../components/edit-profile/edit-profile'
import { EditPhotoComponent } from '../components/edit-photo/edit-photo'
import { ChooseModalComponent } from '../components/choose-modal/choose-modal'
import { LogoutComponent } from '../components/logout/logout'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserDataProvider } from '../providers/user-data/user-data';
import { DishesProvider } from '../providers/dishes/dishes';
import { ExercisesProvider } from '../providers/exercises/exercises';
import { StepCounterProvider } from '../providers/step-counter/step-counter';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
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
    EditPhotoComponent,
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
    IonicStorageModule.forRoot()
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
    EditPhotoComponent,
    ChooseModalComponent
  ],
  providers: [
    Api,
    Camera,
    Stepcounter,
    GoogleMaps,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    DishesProvider,
    ExercisesProvider,
    StepCounterProvider
  ]
})
export class AppModule { }
