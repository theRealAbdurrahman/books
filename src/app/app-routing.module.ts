import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListingComponent } from './books/components/containers/books-listing/books-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },

  {
    path: 'books',
    component: BooksListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
