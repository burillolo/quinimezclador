import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuininputComponent } from './quininput/quininput.component';
import { QuinicountComponent } from './quinicount/quinicount.component';


@NgModule({
  declarations: [
    AppComponent,
    QuininputComponent,
    QuinicountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
