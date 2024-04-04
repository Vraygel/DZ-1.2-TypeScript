interface  Book {
		id: string,
		title: string,
		description: string,
		authors: string,
		favorite: string,
		fileCover: string,
		fileName: string
	}


abstract class BooksRepository {
	abstract createBook(book: Book): void;
	abstract getBook(id: string): Book | undefined;
	abstract getBooks(): Book[];
	abstract updateBook(id: string, updatedBook: Book): void;
	abstract deleteBook(id: string): void;
}
