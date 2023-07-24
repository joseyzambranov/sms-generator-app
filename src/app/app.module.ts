import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsGeneratorComponent } from './sms-generator/sms-generator.component';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SmsGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgxGraphModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SmsGeneratorComponent
  ]
})
export class AppModule { }
