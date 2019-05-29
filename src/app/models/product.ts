import { Category } from '../enums/category.enum';
import { Review } from './review';

export class Product {
	private _reviews: Review[];

	// tslint:disable: variable-name
	constructor(
		private _id: number,
		private _name?: string,
		private _description?: string,
		private _price?: number,
		private _sale?: number,
		private _shipping?: number,
		private _category?: Category
	) {
		this._reviews  = [
			new Review('Test', 5)
		];
	}

	public get id(): number {
		return this._id;
	}
	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}

	public get price(): number {
		return this._price;
	}

	public set price(value: number) {
		this._price = value;
	}


	public get sale(): number {
		return this._sale;
	}

	public set sale(value: number) {
		this._sale = value;
	}

	public get shipping(): number {
		return this._shipping;
	}

	public set shipping(value: number) {
		this._shipping = value;
	}

	public get category(): Category {
		return this._category;
	}

	public set category(value: Category) {
		this._category = value;
	}

	public get reviews() {
		return this._reviews;
	}

	public AddReview(review: Review) {
		this._reviews.push(review);
	}

	public GetReviewCount() {
		return this._reviews.length;
	}

	public GetAverageRating() {
		let val = 0;
		const count = this.GetReviewCount();

		if (count < 1 || count == null) {
			return 0;
		}

		for (const r of this._reviews) {
			val += r.rating;
		}

		return Math.floor(val / count);
	}
}
