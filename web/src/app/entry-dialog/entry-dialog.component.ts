import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Category, Entry} from '../entries/entries.model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {

  private categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<EntryDialogComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public entry: Entry) {
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
