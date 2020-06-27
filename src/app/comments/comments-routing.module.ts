import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsPage } from './comments.page';

const routes: Routes = [
  {
    path: '',
    component: CommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsPageRoutingModule {}
