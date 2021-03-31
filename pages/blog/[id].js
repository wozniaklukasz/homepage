import Layout from "../../components/layout";
import { getAllPostIds, getNextPostData, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Tags from "../../components/tags";
import Hero from "../../components/hero";
import "highlight.js/styles/vs2015.css"; // highlight.js style
import Image from "next/image";
import { siteTitle } from "../../const";
import Seo from "../../components/seo";
import PostPreview from "../postPreview";

export default function Post({ postData, nextPostData }) {
  const imgSrc = `/images/posts/${postData.id}/${postData.image}`;

  return (
    <Layout>
      {/*todo: post description instead of substring*/}
      <Seo
        title={`${postData.title} | ${siteTitle}`}
        description={postData.description}
        imageSrc={imgSrc}
        imageAlt={postData.title}
      />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <Tags tags={postData.tags} />
        </div>
        <Image src={imgSrc} alt={postData.title} width={1280} height={720} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Hero />
      <div>
        <h3>U may also like:</h3>
        <PostPreview postData={nextPostData} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const nextPostData = getNextPostData(params.id);

  return {
    props: {
      postData,
      nextPostData,
    },
  };
}
