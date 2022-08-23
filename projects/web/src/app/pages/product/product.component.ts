import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/interfaces/category.interface';
import { Product } from '../../shared/interfaces/product.interface';
import { CategoryService } from '../../shared/services/category/category.service';
import { ProductService } from '../../shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  isToggle = 0;
  categories!: Category[];
  product!: Product;
  headerImg = Math.floor(Math.random() * 34);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      const code = this.route.snapshot.paramMap.get('code');
      console.log(code);
      if (code) {
        this.categoryService.getCategories().subscribe((data) => {
          this.categories = data;
        });
        this.productService.getProductByCode(code).subscribe((data) => {
          if (Array.isArray(data)) {
            this.product = data[0];
            this.titleService.setTitle(this.product.name);
            this.meta.updateTag({
              name: this.product.name,
              content: this.product.description,
            });
          }
        });
      }
    });
  }

  getCategoryName(code: any) {
    return this.categories.find((el) => el.category.code === code);
  }
}
