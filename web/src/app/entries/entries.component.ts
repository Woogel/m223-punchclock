import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entry} from './entries.model';
import {MatDialog} from '@angular/material';
import {EntryDialogComponent} from '../entry-dialog/entry-dialog.component';
import {EntryService} from '../entry.service';
import {CategoryDialogComponent} from '../category-dialog/category-dialog.component';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              public dialog: MatDialog,
              private entryService: EntryService,
              private categoryService: CategoryService) {
  }

  displayedColumns: string[] = ['id', 'categoryName', 'checkIn', 'checkOut'];
  dataSource: Entry[];

  id: number;
  checkIn: Date;
  checkOut: Date;

  ngOnInit() {
    this.updateEntries();
  }

  updateEntries() {
    this.entryService.getEntries()
      .subscribe(entries => this.dataSource = entries);
  }

  openCategoryDialog(): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.categoryService.createCategory(result).subscribe(() => this.updateEntries());
    });
  }

  openEntryDialog(): void {
    const dialogRef = this.dialog.open(EntryDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.entryService.createEntry(result).subscribe(() => {
        this.updateEntries();
      });
    });
  }

}
