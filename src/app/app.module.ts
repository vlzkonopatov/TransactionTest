import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HistoryComponent } from './history/history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardDirective } from './create/card.directive';
import { AppService } from './app.service';
import { CreditCardMaskPipe } from './history/card.pip';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HistoryComponent,
    CardDirective,
    CreditCardMaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
