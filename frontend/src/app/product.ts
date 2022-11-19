import { Review } from './review';

export class Product {
  constructor(
    public id: Number,
    public name: String,
    public price: {
      current: {
        value: Number;
        text: String;
      };
      prev: {
        value: Number;
        text: String;
      };
    },
    public isSellingFast: Boolean,
    public isInStock: Boolean,
    public dateCreation: Date,
    public media: [
      { img: String },
      { img: String },
      { img: String },
      { img: String }
    ],
    public categorie: String,
    public categId: Number,
    public brandName: String,
    public comments: Review[]
  ) {}
}
