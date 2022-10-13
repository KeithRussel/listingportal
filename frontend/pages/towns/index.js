import { normalize } from "../../utils/normalize";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import styled from "@emotion/styled";

let Towns = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default function Post({ towns }) {
  return (
    <Layout>
      <Link href={`/`}>
        <a>Go Home</a>
      </Link>
      {/* Show Town Categories */}
      <Towns>
        {towns &&
          towns.map((town) => (
            <Link key={town.id} href={`/towns/${town.Town}`}>
              <a>
                <div>
                  <h2>{town.Town}</h2>
                </div>
              </a>
            </Link>
          ))}
      </Towns>
    </Layout>
  );
}

// for each individual page: get the data for individual page
export async function getStaticProps() {
  const res = await fetch(`http://localhost:1338/api/towns?populate`);

  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const towns = normalize(results);

  return {
    props: { towns },
  };
}
