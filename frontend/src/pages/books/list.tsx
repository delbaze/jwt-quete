import { LIST_BOOKS } from "@/requetes/queries/books.queries";
import { BooksQuery, BooksQueryVariables } from "@/types/graphql";
import { useQuery } from "@apollo/client";

function ListBooks() {
  const { data } = useQuery<BooksQuery, BooksQueryVariables>(LIST_BOOKS);
  return (
    <div>
      {data?.books.map((b) => (
        <li key={b.id}>{b.title}</li>
      ))}
    </div>
  );
}

export default ListBooks;
