import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedLineComponent } from './feed-line.component';
import { FeedItemComponent } from './feed-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedSearchComponent } from './feed-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedSearchComponent,
    FeedLineComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
