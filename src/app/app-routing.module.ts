import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListsComponent } from './components/page-lists/page-lists.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PageListsComponent
  },
  {
    path: 'movie/detail/:id',
    component: PageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
