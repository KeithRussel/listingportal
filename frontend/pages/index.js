import { normalize } from "../utils/normalize";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Hero />
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
