import React from 'react';
import { Link } from 'react-router-dom';

function SingleBook({ book }) {
  return (
    <Link to={`books/${book.bookId}`}>
      <div className="flex flex-col gap-2 p-4 rounded-lg border w-[320px] h-[600px] items-start text-left justify-between">
        <img
          className="max-w-[250px] max-h-[400px] border p-2 self-center"
          src={book.image}
          alt={book.bookName}
        />
        <div className="flex items-center gap-3">
          {book.tags.map((tag, idx) => {
            return (
              <span
                key={idx}
                className="text-orange-600 text-sm bg-orange-50 px-2 py-1 rounded-lg font-semibold"
              >
                {tag}
              </span>
            );
          })}
        </div>

        <h1 className="text-xl font-bold max-w-[310px]">{book.bookName}</h1>
        <h2 className="font-semibold">By: {book.author}</h2>
        <div className="divider m-0"></div>
        <div className="flex items-center justify-between w-full pb-2">
          <span className="py-1 px-3 bg-gray-700 rounded-lg">
            {book.category}
          </span>
          <span>{book.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default SingleBook;
