import Head from 'next/head'
import { Inter } from '@next/font/google'
import Search from 'components/Search';
import Results from 'components/Results';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [results, setResults] = useState([])
  const search = async (data: any) => {
    const response = await fetch(
      '/api',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );
    return response.json();
  }
  return (
    <>
      <Head>
        <title>Notion Book Injector</title>
        <meta name="description" content="Search for a book you want to add to your library, get a csv file with that information and add it to Notion." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app">
        <h1>
          Notion Book Injector
        </h1>
        <Search search={search} setResults={setResults} />
        <Results results={results} />
      </div>
    </>
  )
}
