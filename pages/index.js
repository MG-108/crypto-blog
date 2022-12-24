import Head from "next/head";
import React, { useEffect, useState } from "react";

import { PostCard, Categories, PostWidget } from "../components";
import { getPosts, getPagination } from "../services";
import { FeaturedPosts } from "../sections";

import { useStateContext } from "../context/contextProvider";
import Script from "next/script";

import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

export default function Home({ posts }) {
  const { setTheme } = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeMode) {
      setTheme(currentThemeMode);
    }
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <section className=" container mx-auto px-10  ">
      <Head>
        <title>Cripto Area | Informações sobre Criptomoedas e Blockchain</title>
        <meta
          name="description"
          content="No Cripto Area, você encontra as últimas notícias e análises de criptomoedas, além de insights exclusivos sobre a blockchain. Mantenha-se atualizado sobre as tendências do mercado e aproveite o conteúdo de qualidade. Visite o Cripto Area agora mesmo e fique por dentro do mundo das criptomoedas."
        />
        <meta
          name="keywords"
          content=" Criptomoedas, Blockchain, Tecnologia, Bitcoin, Ethereum, Altcoin, Nft, Defi,  cripto wallet, hard wallet, dinheiro digital"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {currentPosts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1 lg:pb-6  ">
          <div className="lg:sticky relative top-2">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

      <Stack mt="24px" alignItems="center">
        {posts.length > 10 ? (
          <Pagination
            defaultPage={1}
            count={Math.ceil(posts.length / postsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        ) : null}
      </Stack>

      <div></div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
