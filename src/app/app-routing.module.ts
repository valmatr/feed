import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedItemComponent } from './feed-item.component';
import { FeedLineComponent } from './feed-line.component';
import { FeedSearchComponent } from './feed-search.component';


const routes: Routes = [
  {path: '', component: FeedSearchComponent},
  {path: 'items', component: FeedLineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
