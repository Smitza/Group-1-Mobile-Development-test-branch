import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyPage } from './easy.page';

const routes: Routes = [
  {
    path: '',
    component: EasyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasyPageRoutingModule {}
