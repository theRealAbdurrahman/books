import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/models/books';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-books-listing',
  templateUrl: './books-listing.component.html',
  styleUrls: ['./books-listing.component.scss'],
})
export class BooksListingComponent implements OnInit {
  booksList!: Book[];
  filteredBooksList!: Book[];
  constructor (private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: (books: Book[]) => {
        console.log({ books });
        this.booksList = books;
        this.filteredBooksList = books;
      },
    });
  }

  searchBooks(event: KeyboardEvent) {
    let searchString: string = (event.target as HTMLInputElement).value
      .toLowerCase()
      .trim();
    console.log(searchString);
    this.filteredBooksList = this.booksList.filter(
      (book) =>
        book.title.toLocaleLowerCase().trim().includes(searchString) ||
        this.filterBooksByDate(book, searchString)
    );
  }

  filterBooksByDate(book: Book, input: string): boolean | void {
    const date = new Date(book.publishDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const dateString = `${monthIndex}/${day}/${year}`;
    return dateString.includes(input);
  }
}
