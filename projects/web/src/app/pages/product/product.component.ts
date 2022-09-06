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
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      const slug = this.route.snapshot.paramMap.get('slug');
      if (slug) {
        this.categoryService.getCategories().subscribe((data) => {
          this.categories = data;
        });
        this.productService.getProductBySlug(slug).subscribe((data) => {
          if (Array.isArray(data)) {
            this.product = data[0];
            this.titleService.setTitle(this.product.name);
            this.addTag();
          }
        });
      }
    });
  }

  getCategoryName(code: any) {
    return this.categories.find((el) => el.category.code === code);
  }

  addTag() {
    this.metaService.updateTag({
      name: this.product.name,
      content: this.product.short_description.replace(/<\/?[^>]+(>|$)/g, ''),
      'og:title': this.product.name,
      'og:description': this.product.short_description.replace(
        /<\/?[^>]+(>|$)/g,
        ''
      ),
      'og;image': this.product.product.images[0].image,
      'og:image:secure_url': this.product.product.images[0].image,
    });
  }
}
