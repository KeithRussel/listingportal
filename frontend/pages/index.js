import { normalize } from "../utils/normalize";

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show in UI */}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            {<h2>{post.Title}</h2>}
            {<pre>{post.User.username}</pre>}
          </div>
        ))}
      {/* {console.log(posts)} */}
    </div>
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
