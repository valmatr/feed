import { Component, OnInit } from '@angular/core';
import { FeedItem, FeedService } from './feed-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'feed-line',
    templateUrl: './feed-line.component.html',
    styleUrls: ['./feed-line.component.css']
})
export class FeedLineComponent implements OnInit {

    searchTerms: string;
    items: FeedItem[];

    constructor(private feedService: FeedService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        this.activatedRoute.queryParamMap.subscribe(paramMap => {
            this.searchTerms = paramMap.get('searchTerms');

            this.feedService.get().subscribe(fItems => {
                this.items = fItems.filter(item => item.description.includes(this.searchTerms));
            });
        });
    }
}