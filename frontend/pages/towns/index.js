import React, { useState } from "react";
import { normalize } from "../../utils/normalize";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import styled from "@emotion/styled";

let Towns = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  & > a {
    & > div {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  }
`;

const { APP_URL } = process.env;

export default function Post({ towns }) {
  return (
    <Layout>
      <Link href={`/`}>
        <a>Go Home</a>
      </Link>
      {/* Show Town Categories */}
      <h2>List of Town Categories</h2>
      <Towns>
        {towns &&
          towns.map((town) => (
            <Link key={town.id} href={`/towns/${town.Town}`} passHref>
              <a
                style={{
                  backgroundImage:
                    town.Image && `url(${APP_URL}${town.Image.url})`,
                }}
              >
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
  const res = await fetch(`${APP_URL}/api/towns?populate[Image][posts]`);

  const results = await res.json();
  // Should integrate the normalize function to trigger the deep objects in API
  const towns = normalize(results);

  // console.log(towns);
  return {
    props: { towns },
  };
}
