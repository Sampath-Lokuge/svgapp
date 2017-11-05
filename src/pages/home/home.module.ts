import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    RoundProgressModule
  ],
})
export class HomePageModule { }
