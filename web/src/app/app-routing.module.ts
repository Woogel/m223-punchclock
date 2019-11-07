import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntriesComponent} from './entries/entries.component';
import {LogInComponent} from './log-in/log-in.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: '', component: EntriesComponent, pathMatch: 'full'},
  {path: 'log-in', component: LogInComponent, data: {registration: false}},
  {path: 'register', component: LogInComponent, data: {registration: true}},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
