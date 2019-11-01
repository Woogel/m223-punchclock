import {Component} from '@angular/core';
import {Category} from '../entries/entries.model';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent {

  private category = {
    name: ''
  } as Category;

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialogRef.close(this.category);
  }
}
