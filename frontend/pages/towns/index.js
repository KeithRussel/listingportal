import { normalize } from "../../utils/normalize";
import Link from "next/link";

export default function Post({ towns }) {
  return (
    <div>
      <Link href={`/`}>
        <a>Go Home</a>
      </Link>
      {/* Show Town Categories */}
      {towns &&
        towns.map((town) => (
          <Link key={town.id} href={`/towns/${town.Town}`}>
            <a>
              <h2>{town.Town}</h2>
            </a>
          </Link>
        ))}
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
