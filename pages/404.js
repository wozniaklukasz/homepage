import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { siteTitle } from "../const";

export default function NotFound() {
  return (
    <Layout>
      <NextSeo noindex={true} />
      <h1 className={utilStyles.heading2Xl}>404</h1>
      <div style={{ textAlign: "center" }}>
        <Image src="/images/404.gif" alt={siteTitle} width={426} height={213} />
      </div>
    </Layout>
  );
}
