import { normalize } from "../../utils/normalize";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="posts">
      <Link href={`/`}>
        <a>Go Home</a>
      </Link>
      <h2>{post.Title}</h2>
    </div>
  );
}

const { BASE_URL } = process.env;

// tell next.js how many pages they are
export async function getStaticPaths() {
  const res = await fetch(`${BASE_URL}/api/posts`);
  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const posts = normalize(results);

  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for individual page
export async function getStaticProps({ params }) {
  const { slug } = params;

  //   const res = await fetch(`http://localhost:1338/api/posts?Slug=${slug}`);
  const res = await fetch(`${BASE_URL}/api/posts?filters[Slug][$eq]=${slug}`);

  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const data = normalize(results);

  const post = data[0];

  return {
    props: { post },
  };
}
