import React, { useEffect, useState } from 'react';
import SingleBook from './SingleBook';

function Allbooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json',
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="flex flex-col my-8">
      <h1 className="text-2xl font-bold text-center my-8">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between p-2 gap-y-8 gap-x-9 w-full">
        {books.map((book) => (
          <div key={book.bookId}>
            <SingleBook book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allbooks;
