import {SettingsPage} from './tabs-menu/settings/settings';
import {TabsPage} from './tabs/tabs';
import {LoginPage} from './login/login';
import {TrainingPage} from './tabs-menu/training/training'
import {ProfilePage} from './tabs-menu/profile/profile'
import {RecipePage} from './tabs-menu/recipe/recipe'
import {DietPage} from './tabs-menu/diet/diet'

export const LoginRegisterPage = LoginPage;

export const MainPage = TabsPage;

export const Tab1Root = ProfilePage;
export const Tab2Root = RecipePage;
export const Tab3Root = TrainingPage;
export const Tab4Root = DietPage;
export const Tab5Root = SettingsPage;
