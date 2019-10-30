import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entry} from './entries.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  entries: Entry[];

  ngOnInit() {
    this.httpClient.get<Entry[]>('api/entries')
      .subscribe(entries => this.entries = entries);
  }

}
