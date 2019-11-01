import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Category, Entry} from '../entries/entries.model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {

  private categories: Category[] = [];
  private entry = {checkIn: new Date(), checkOut: new Date(), category: {id: 0, name: ''}} as Entry;

  constructor(
    public dialogRef: MatDialogRef<EntryDialogComponent>,
    private categoryService: CategoryService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.entry.category = this.categories.find(x => x.id == this.entry.category.id);
    this.dialogRef.close(this.entry);
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
