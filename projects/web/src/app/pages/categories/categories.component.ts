import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/interfaces/category.interface';
import { CategoryService } from '../../shared/services/category/category.service';
import { ProductService } from '../../shared/services/product/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  code!: string | null;
  category!: Category;
  headerImg = Math.floor(Math.random() * 34);

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('code');
    if (this.code) {
      this.categoryService.getCategoryByCode(this.code).subscribe((data) => {
        if (Array.isArray(data)) {
          this.category = data[0];
          this.titleService.setTitle(this.category.name);
          this.meta.updateTag({
            name: this.category.name,
            content: this.category.description,
          });
        }
      });
    }
  }
}
