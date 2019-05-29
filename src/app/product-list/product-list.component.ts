import { Component, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../enums/category.enum';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	Category = Category;
	private render: Renderer2;
	productList: Product[] = [
			new Product(
				'Red Delicious Apple',
				'A red delicious apple.',
				2.99,
				0,
				0.99,
				Category.Fruit
			),
			new Product(
				'Apple',
				'A red delicious apple.',
				2.99,
				0,
				0.99,
				Category.Fruit
			)]
		;
	grid: boolean;
	constructor() {
		this.grid = false;
   }

	ngOnInit() {
	}

}
