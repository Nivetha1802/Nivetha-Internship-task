import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product: any;
  navigateToProductDetails(productId: number): void {
    // Implement your navigation logic here
    console.log(`Navigating to product details for product with ID: ${productId}`);
  }
}
