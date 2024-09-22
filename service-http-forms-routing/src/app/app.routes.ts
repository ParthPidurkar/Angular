import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AppComponent } from './app.component';
import { NotFoundComponeentComponent } from './component/product-list/not-found-componeent/not-found-componeent.component';

export const routes: Routes = [
    // {path: '', component: AppComponent},
    {path: 'product-list', component: ProductListComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: '*', component:NotFoundComponeentComponent}
    
];
