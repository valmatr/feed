import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    feedItems: FeedItem[] = [
        {
            date: '03/12/2020',
            title: 'Lorem ipsum dolor sit amet',
            source: 'SRC01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
            date: '03/13/2020',
            title: 'Duis aute irure dolor in reprehenderit',
            source: 'SRC02',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            date: '03/14/2020',
            title: 'Sed ut perspiciatis unde omnis',
            source: 'SRC01',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        }
    ];

    get(source?: string): FeedItem[] {
        return this.feedItems.filter(item => !source || item.source === source);
    }
}

export class FeedItem {
    date: string;
    source: string;
    title: string;
    description: string;
}