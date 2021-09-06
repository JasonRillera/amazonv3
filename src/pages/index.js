import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <link rel="shortcut icon" href="amazonicon.png" />
        <title>Amazon.com</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}
        <Banner />

        {/* PRODUCT FEED */}
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { 
    props: {
      products,
    },
  };
}
