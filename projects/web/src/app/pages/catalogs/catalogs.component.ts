import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from 'express';
import { Catalog } from '../../shared/interfaces/catalog .interface';
import { Category } from '../../shared/interfaces/category.interface';
import { CatalogService } from '../../shared/services/catalog/catalog.service';
import { CategoryService } from '../../shared/services/category/category.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss'],
})
export class CatalogsComponent implements OnInit {
  title = '';
  imgHeader = 'assets/img/about.webp';
  headerDescription = ``;
  catalogCode!: string;
  catalog!: Catalog;
  categories!: Category[];
  headerImg = Math.floor(Math.random() * 34);

  constructor(
    private route: ActivatedRoute,
    private CatalogService: CatalogService,
    private categoryService: CategoryService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => {
      const code = this.route.snapshot.paramMap.get('code');
      if (code) {
        this.categoryService.getCategories().subscribe((data) => {
          this.categories = data;
        });
        this.CatalogService.getCatalogsByCode(code).subscribe((data) => {
          if (Array.isArray(data)) {
            this.catalog = data[0];
            this.titleService.setTitle(this.catalog.name);
            this.meta.updateTag({
              name: this.catalog.name,
              content: this.catalog.description,
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
