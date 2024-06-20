'use client';

import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Script from "next/script";
import { ApolloClient, ApolloNextAppProvider, InMemoryCache } from "@apollo/experimental-nextjs-app-support";

const client= () => new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/clxkbsa29008p07v0bwililjb/master",
  cache: new InMemoryCache(),
});

const DOGS = gql`
  query MyQuery {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`;

export default function Home() {
  // console.log(DOGS)
  console.log(useQuery(DOGS))
  return (
    <ApolloNextAppProvider makeClient={client}>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div>test</div>
      </main>
    </ApolloNextAppProvider>
  );
}
