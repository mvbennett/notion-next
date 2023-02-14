import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

  const book = req.book;
  let results = [];
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.BOOK_API}&language=en`)
  .then(response => response.json())
  .then((data) => {
    data.items.forEach(item => {
      results.push(item.volumeInfo)
    });;
  })
  res.send(results);
}
