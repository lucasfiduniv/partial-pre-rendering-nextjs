import { Suspense } from "react";

type Posts = {
  id: number;
  title: string;
  body: string;
};

async function Posts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = (await data.json()) as Posts[];
  return (
    <>
      <h1>All Posts</h1>
      {posts.slice(0, 7).map((post) => (
        <div key={post.id}>
          <h3>Title: {post.title}</h3>
          <p>content: {post.body}</p>
        </div>
      ))}
    </>
  );
}

function Loading() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-10">
        <h1>Partial pre-Rendering</h1>
      </div>
      <Suspense fallback={<Loading/>}>
        <Posts/>
      </Suspense>
    </main>
  );
}
