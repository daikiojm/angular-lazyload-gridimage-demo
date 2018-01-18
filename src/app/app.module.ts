import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // 追加
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    LazyLoadImageModule // 追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
