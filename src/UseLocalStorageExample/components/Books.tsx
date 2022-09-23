export type BooksType = {
  id: number;
  title: string;
  price: number;
};

type BooksPropsType = {
  books: Array<BooksType>;
  addToOrder: (id: number) => void;
};

export const Books = (props: BooksPropsType) => {
  return (
    <div>
      {props.books.map((book) => {
        return <Book key={book.id} book={book} addToOrder={props.addToOrder} />;
      })}
    </div>
  );
};

type BookPropsType = {
  book: BooksType;
  addToOrder: (id: number) => void;
};

const Book = ({ book, addToOrder }: BookPropsType) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <span>{book.price} </span>
      <button
        onClick={() => {
          addToOrder(book.id);
        }}
      >
        Buy
      </button>
    </div>
  );
};
