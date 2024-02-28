
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-content',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Dell WM118 Wireless Mouse',
      imageUrl: './assets/mouse.png',
      currency: '₹',
      price: '649',
      mrp: '₹1,299',
      discount: '(50% off)',
    },
    {
      id: 1,
      name: 'Dell WM118 Wireless Mouse',
      imageUrl: './assets/mouse.png',
      currency: '₹',
      price: '649',
      mrp: '₹1,299',
      discount: '(50% off)',
    },
    {
      id: 1,
      name: 'Dell WM118 Wireless Mouse',
      imageUrl: './assets/mouse.png',
      currency: '₹',
      price: '649',
      mrp: '₹1,299',
      discount: '(50% off)',
    },
    {
      id: 1,
      name: 'Dell WM118 Wireless Mouse',
      imageUrl: './assets/mouse.png',
      currency: '₹',
      price: '649',
      mrp: '₹1,299',
      discount: '(50% off)',
    },
    {
      id: 1,
      name: 'Dell WM118 Wireless Mouse',
      imageUrl: './assets/mouse.png',
      currency: '₹',
      price: '649',
      mrp: '₹1,299',
      discount: '(50% off)',
    },
 
 
 
 
 
 
 
    // Add more sample products as needed
  ];
 
  navigateToProductDetails(productId: number): void {
    // Implement navigation logic if needed
  }
 
}
 