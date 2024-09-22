import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddProductComponent } from "./component/add-product/add-product.component";
import { NotFoundComponeentComponent } from './component/product-list/not-found-componeent/not-found-componeent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, ProductListComponent, AddProductComponent, AddProductComponent,NotFoundComponeentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-http-forms-routing';
}
