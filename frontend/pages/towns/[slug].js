import { normalize } from "../../utils/normalize";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Posts/Post";
import styled from "@emotion/styled";
import Sidebar from "../../components/Sidebar/Sidebar";

let CategoryByCity = styled("div")`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 15px;
`;

let Posts = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  & > h2 {
    width: 100%;
    text-align: center;
    background-color: gray;
    margin: 0 0 1rem;
    padding: 1rem 0;
    color: #fff;
  }
`;

export default function Town({ postsByTown }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div>
        <Link href={`/`}>
          <a>Go Home</a>
        </Link>
        <CategoryByCity>
          <Posts>
            <h2>{`List of Business in ${slug}`}</h2>
            {postsByTown &&
              postsByTown.map((post) => <Post key={post.id} post={post} />)}
          </Posts>
          <Sidebar />
        </CategoryByCity>
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
