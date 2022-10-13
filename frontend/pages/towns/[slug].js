import { normalize } from "../../utils/normalize";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

export default function Town({ postsByTown }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div>
        <Link href={`/`}>
          <a>Go Home</a>
        </Link>
        <h2>{`List of Business in ${slug}`}</h2>
        {postsByTown &&
          postsByTown.map((post) => <h2 key={post.id}>{post.Title}</h2>)}
      </div>
    </Layout>
  );
}

// tell next.js how many pages they are
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1338/api/towns");
  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const towns = normalize(results);

  const paths = towns.map((town) => ({
    params: { slug: town.Town },
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
    `http://localhost:1338/api/posts?filters[Town][Town][$eq]=${slug}`
  );

  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const postsByTown = normalize(results);

  //   const post = data[0];

  return {
    props: { postsByTown },
  };
}
