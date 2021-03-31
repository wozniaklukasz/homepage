import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { siteTitle } from "../const";
import Seo from "../components/seo";
import PostPreview from "./postPreview";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Seo
        title={`Blog | ${siteTitle}`}
        description={`${siteTitle} personal blog.`}
      />
      <h1 className={utilStyles.heading2Xl}>Blog</h1>
      <section>
        <p className={utilStyles.headingMd}>My personal notes.</p>
        {/*<p>I have started blogging to become better developer, to force myself to learn new things and to improve my english.</p>*/}
        <ul className={utilStyles.list}>
          {allPostsData.map((postData) => (
            <li className={utilStyles.listItem} key={postData.id}>
              <PostPreview postData={postData} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
