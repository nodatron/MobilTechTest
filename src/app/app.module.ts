import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { AlienComponent } from './aliens/alien.component';

@NgModule({
  declarations: [
    AppComponent,
    AlienComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
