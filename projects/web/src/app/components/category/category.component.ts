import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductService } from '../../shared/services/product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() categoryCode!: string | null;
  products!: Product[];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    if (this.categoryCode) {
      this.productsService
        .getProductsByCategoryCode(this.categoryCode)
        .subscribe((data) => {
          this.products = data;
        });
    } else {
      this.productsService.getProducts().subscribe((data) => {
        data.sort((a: any, b: any) =>
          a.cat > b.last_nom ? 1 : b.last_nom > a.last_nom ? -1 : 0
        );
        this.products = data;
      });
    }
  }
}
