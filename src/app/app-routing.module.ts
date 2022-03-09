import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Link } from './link';
import { GroceryComponent } from './grocery/grocery.component';
import { OpticalComponent } from './optical/optical.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'home',
    component: HomeComponent  },
  {
    path: 'grocery',
    component: GroceryComponent

  }, {
    path: 'optical',
    component: OpticalComponent
  }, {
    path: 'photo',
    component: PhotoComponent
  }, {
   path: 'admin',
   component: AdminComponent
  }
];
/*const listA: Array<Link> = new Array<Link>(new Link('Home', '1'),
new Link('Grocery', '2'),
new Link('Optical', '3'),
new Link('Photo', '4'),
new Link('Travel', '5')
);*/



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
