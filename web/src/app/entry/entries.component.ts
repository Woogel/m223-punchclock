import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category, Entry} from './entries.model';
import {MatDialog} from '@angular/material';
import {EntryDialogComponent} from '../entry-dialog/entry-dialog.component';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  constructor(private httpClient: HttpClient, public dialog: MatDialog, private entryService: EntryService) {
  }

  displayedColumns: string[] = ['id', 'categoryName', 'checkIn', 'checkOut'];
  dataSource: Entry[];

  id: number;
  checkIn: Date;
  checkOut: Date;

  ngOnInit() {
    this.entryService.getEntries()
      .subscribe(entries => this.dataSource = entries);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EntryDialogComponent, {
      width: '250px',
      data: {id: 0, checkIn: '', checkOut: '', category: {}}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.entryService.createEntry(result).subscribe(() => {
        this.ngOnInit();
      });
    });
  }

}
