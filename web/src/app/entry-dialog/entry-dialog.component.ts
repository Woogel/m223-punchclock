import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Category, Entry} from '../entry/entries.model';
import {EntryService} from '../entry.service';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {

  private categories: Category[] = [];
  private categoryId: number;

  constructor(
    public dialogRef: MatDialogRef<EntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Entry, private categoryService: CategoryService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.data.category = this.categories.filter(category => category.id === this.categoryId)[0];
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
}
