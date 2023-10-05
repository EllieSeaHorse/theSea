import Head from 'next/head';
import Portfolio from "@/pages/Portfolio/portfolio";
import Link from "next/link";
import Layout from "@/pages/layout";

export default function Home() {
  return (
      <Layout>
          <Link href={'Portfolio/portfolio'}> Portfolio</Link>
      </Layout>
  );
}
