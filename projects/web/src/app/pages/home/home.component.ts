import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../../shared/interfaces/category.interface';
import { Product } from '../../shared/interfaces/product.interface';
import { CategoryService } from '../../shared/services/category/category.service';
import { ProductService } from '../../shared/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  data!: Product[];
  pages!: number[];
  page: number = 0;
  categories!: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Motiko');
    this.meta.updateTag({
      name: 'Motiko',
      content: '',
    });
    this.productService.getProducts().subscribe((data) => {
      this.data = data;
      this.products = this.data.slice(0, 6);
      this.pages = Array.from(
        { length: Math.ceil(data.length / 6) },
        (v, k) => k
      );
    });

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getProductCategory(code: any) {
    return this.categories.find((el) => el.category.code === code);
  }
  selectPage(p: number) {
    if (p > this.pages.length - 1) {
      this.page = 0;
    } else {
      this.page = p;
    }
    this.products = this.data.slice(this.page * 6, this.page * 6 + 6);
  }
}
