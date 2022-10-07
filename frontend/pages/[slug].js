import { normalize } from "../utils/normalize";

export default function Post({ post }) {
  return <div>{post.Title}</div>;
}

// tell next.js how many pages they are
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1338/api/posts");
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
  const res = await fetch(
    `http://localhost:1338/api/posts?filters[Slug][$eq]=${slug}`
  );

  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const data = normalize(results);

  const post = data[0];

  return {
    props: { post },
  };
}
