import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsGeneratorComponent } from './sms-generator/sms-generator.component';
import { DragDropModule } from '@angular/cdk/drag-drop'; 

@NgModule({
  declarations: [
    AppComponent,
    SmsGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SmsGeneratorComponent
  ]
})
export class AppModule { }
