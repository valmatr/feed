import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(private httpClient: HttpClient) {}

    get(source?: string) {
        
        return this.httpClient.get('https://feeds.dzone.com/home', {responseType: 'text'}).pipe(map(response => {

            let fItems: FeedItem[] = [];
            parseString(response, (error, result) => {
                if (!error) {
                     result.rss.channel[0].item.forEach(item => {
                        const fi: FeedItem = new FeedItem();
                        fi.title = item.title[0];
                        fi.link = item.link[0];
                        fi.description = item.description[0];
                        fi.source = 'DZONE';
                        fi.date = item.pubDate[0];

                        fItems.push(fi);
                    });
                    console.log(fItems);
                }
            });

            return fItems;
        }));
    }
}

export class FeedItem {
    date: string;
    source: string;
    title: string;
    link: string;
    description: string;
}

interface FeedItemsResponse {
    feedItems: FeedItem[];
}