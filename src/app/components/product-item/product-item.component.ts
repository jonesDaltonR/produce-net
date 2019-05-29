import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../enums/category.enum';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
	@Input() grid: boolean;
	@Input() product: Product;
	Category = Category;

	constructor() {}

	ngOnInit() {}

}
