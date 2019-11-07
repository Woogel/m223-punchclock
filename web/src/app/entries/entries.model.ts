import {User} from '../log-in/log-in.model';

export class Entry {
  id: number;
  checkIn: Date;
  checkOut: Date;
  category: Category;
  user: User;
}

export class Category {
  id: number;
  name: string;
}
