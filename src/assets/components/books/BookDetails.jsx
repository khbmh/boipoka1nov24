import { useLoaderData, useParams } from 'react-router-dom';

function BookDetails() {
  const { bookId } = useParams();
  const data = useLoaderData();
  // Find the specific book based on bookId (convert bookId from URL to a number)
  const bookInfo = data.find((book) => book.bookId === Number(bookId));
  if (!bookInfo) {
    return (
      <div className='h-[30vh] md:h-[70vh] w-[80vw] mx-auto'>
        <div className="m-4 w-full h-full font-semibold">Book not found.</div>
      </div>
    );
  }

  return (
    <div className="m-8 p-5 border rounded-xl flex flex-col gap-4 w-full lg:w-2/3 mx-auto">
      <h1 className="text-2xl font-semibold">{bookInfo.bookName}</h1>
      <p>Author: {bookInfo.author}</p>
      <img
        className="max-w-[300px] max-h-[400px] self-center lg:self-start"
        src={bookInfo.image}
        alt={bookInfo.bookName}
      />
      <p className="text-justify">{bookInfo.review}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default BookDetails;
