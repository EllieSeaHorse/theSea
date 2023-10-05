import Head from 'next/head';
import Portfolio from "@/pages/Portfolio/portfolio";
import Link from "next/link";

export default function Home() {
  return (
      <div>
          <Link href={'Portfolio/portfolio'}> Portfolio</Link>
      </div>
  );
}
