import React from "react";
import Head from "next/head";
import Rules from "./Rules";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>Piedra</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-indigo-900 min-h-screen w-full p-1 relative">
        <div className="container mx-auto w-8/12 mt-7">{children}</div>
        <Rules/>
      </main>
    </>
  );
};

export default Layout;
