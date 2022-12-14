import React, { useEffect } from "react";
import { normalize } from "../utils/normalize";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import LatestList from "../components/LatestList/LatestList";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Hero />
        <LatestList posts={posts} />
      </Layout>
    </>
  );
}

const { BASE_URL } = process.env;

export async function getStaticProps() {
  console.log("this is server side render");

  // get posts from our api
  const res = await fetch(
    `${BASE_URL}/api/posts?=sort[0]=createdAt&pagination[page]=1&pagination[pageSize]=10&populate=*`
  );

  const results = await res.json();
  // I used normalize to return the data that I need not the attribute object
  const posts = normalize(results);

  return {
    // pass posts through props
    props: { posts },
  };
}
