import { useRouter } from "next/router";
import Link from "next/link";


export async function getServerSideProps({params}){
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return{
    props: {
      posts: await response.json()
    }
}
}
export default function Details({posts}) {
 
  return (
    <>
    <div>
        <Link href="/">
       Back to Home</Link>
    </div>

      <div>{JSON.stringify(posts)}</div>
    </>
  );
}
