import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntriesComponent} from './entry/entries.component';


const routes: Routes = [{ path: '', component: EntriesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
