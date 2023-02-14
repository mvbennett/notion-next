import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const book = req.body;
  if (book === null || book === undefined || book === '') return res.send('');

  let results: any = [];
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.BOOK_API}&language=en`)
  .then(response => response.json())
  .then((data) => {
    data.items.forEach((item: any) => {
      results.push(item.volumeInfo)
    });;
  })
  res.send(results);
}
