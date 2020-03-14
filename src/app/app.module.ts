import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedLineComponent } from './feed-line.component';
import { FeedItemComponent } from './feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedLineComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
