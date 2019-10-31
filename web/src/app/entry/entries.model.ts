export class Entry {
  id: number;
  checkIn: Date;
  checkOut: Date;
  category: Category;
}

export class Category {
  id: number;
  name: string;
}
