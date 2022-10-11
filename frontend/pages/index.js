import { normalize } from "../utils/normalize";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Hero />
        <div>
          {/* loop over the posts and show in UI */}
          <h1>Fetch All Posts</h1>
          {posts &&
            posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.Slug}`}>
                <a>
                  <div>
                    {<h2>{post.Title}</h2>}
                    {<pre>{post.User.username}</pre>}
                  </div>
                </a>
              </Link>
            ))}
        </div>
        <div>
          <Link href={`/towns`}>
            <a>
              <h3>Towns Category</h3>
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  console.log("this is server side render");

  // get posts from our api
  const res = await fetch("http://localhost:1338/api/posts?populate=*");
  const results = await res.json();
  // I used normalize to return the data that I need not the attribute object
  const posts = normalize(results);

  return {
    // pass posts through props
    props: { posts },
  };
}
