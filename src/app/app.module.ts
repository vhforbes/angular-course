import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingPracticeComponent } from './databinding-practice/databinding-practice.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingPracticeComponent,
    DirectivesPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
