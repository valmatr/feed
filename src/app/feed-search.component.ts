import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'feed-search',
    templateUrl: './feed-search.component.html',
    styleUrls: ['./feed-search.component.css']
})
export class FeedSearchComponent implements OnInit {
    form: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
        private router: Router) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
          searchTerms: this.formBuilder.control('searchTerms', Validators.compose([
            Validators.required
          ]))
        });
      }

    onSubmit(input: SearchInput) {
        console.log(input);
        this.router.navigate(['/', 'items'],  {queryParams: {searchTerms: input.searchTerms}});
    }
}

class SearchInput {
    searchTerms: string;
}