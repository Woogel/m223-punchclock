import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EntriesComponent} from './entries/entries.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {EntryDialogComponent} from './entry-dialog/entry-dialog.component';
import {FormsModule} from '@angular/forms';
import {LogInComponent} from './log-in/log-in.component';
import {CredentialInterceptor} from './credential.interceptor';
import {LogInDialogComponent} from './log-in-dialog/log-in-dialog.component';
import {CategoryDialogComponent} from './category-dialog/category-dialog.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    EntryDialogComponent,
    LogInComponent,
    LogInDialogComponent,
    CategoryDialogComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [EntryDialogComponent, LogInDialogComponent, CategoryDialogComponent]
})
export class AppModule {
}
