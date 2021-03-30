import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Tags from "../components/tags";
import {siteTitle} from "../const";
import Seo from "../components/seo";

export default function Blog({allPostsData}) {
  return (
    <Layout>
      <Seo title={`Blog | ${siteTitle}`} description={`${siteTitle} personal blog.`} />
      <h1 className={utilStyles.heading2Xl}>Blog</h1>
      <section className={utilStyles.headingMd}>
        <p>My personal notes.</p>
        {/*<p>I have started blogging to become better developer, to force myself to learn new things and to improve my english.</p>*/}
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title, tags}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
                <Tags tags={tags}/>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
