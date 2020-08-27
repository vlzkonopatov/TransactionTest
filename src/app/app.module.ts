import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HistoryComponent } from './history/history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardDirective } from './create/card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HistoryComponent,
    CardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
