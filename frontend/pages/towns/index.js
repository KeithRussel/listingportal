import { normalize } from "../../utils/normalize";
import Link from "next/link";

export default function Post({ towns }) {
  return (
    <div>
      <Link href={`/`}>
        <a>Go Home</a>
      </Link>
      {towns && towns.map((town) => <h2>{town.Town}</h2>)}
    </div>
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
