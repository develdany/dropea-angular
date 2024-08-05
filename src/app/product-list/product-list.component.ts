import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

declare const bootstrap: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  openModal(product: any) {
    this.selectedProduct = product;
    const modal = new bootstrap.Modal(document.getElementById('productModal')!);
    modal.show();
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
