import Head from "next/head";
import { Fetcher } from '../components/Fetcher'; 

export default function Home() {
  return <>
    <Head>
      <title>Create Next App</title>
    </Head>
    <Fetcher url="https://jsonplaceholder.typicode.com/users">
      
    </Fetcher>
  </>
}
