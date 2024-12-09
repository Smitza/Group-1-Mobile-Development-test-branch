import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasyPageRoutingModule } from './easy-routing.module';

import { EasyPage } from './easy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasyPageRoutingModule
  ],
  declarations: [EasyPage]
})
export class EasyPageModule {}
