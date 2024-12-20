import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayExComponent } from './two-way-ex/two-way-ex.component';
import { ForExComponent } from './for-ex/for-ex.component';
import { IfExComponent } from './if-ex/if-ex.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayExComponent,
    ForExComponent,
    IfExComponent,
    PipeExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
