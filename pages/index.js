import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from "next/image";
import {siteTitle} from "../const";
import Seo from "../components/seo";

export default function Home() {
  return (
    <Layout>
      <Seo title={siteTitle} description={`${siteTitle} homepage. This is my personal website where I write about stuff I'm working with, new things I want to learn, and some personal thoughts.`} />
      <h1 className={utilStyles.heading2Xl}>Łukasz Woźniak</h1>
      <div className={utilStyles.center}>
        <Image
          priority
          src="/images/lukasz-wozniak.jpg"
          height={144}
          width={144}
          alt={siteTitle}
          className={utilStyles.image}
        />
      </div>
      <section className={utilStyles.headingMd}>
        <p>I am a software developer specialized in React, Redux, and TypeScript. Read more <Link href="/about"><a>about
          me</a></Link>.</p>
        <p>Check out my <Link href="/blog"><a>blog</a></Link> where I write about stuff I'm working with, new things I want to learn, and some personal thoughts.</p>
        <p>You can contact me via <Link href="/contact"><a>contact form</a></Link> or <a href='https://www.linkedin.com/in/wozniaklukaszg/'
                                          target='linkedin'>LinkedIn</a>.</p>
      </section>
      {/*<section className={utilStyles.lightText}>*/}
      {/*  <p>You may ask <i>"why this site is so clean and simple?"</i>. It's because of focusing on content instead of some fancy front-end stuff. I created my personal website multiple times and when I started to do some "polishing" I couldn't stop and finish a project 😊.</p>*/}
      {/*</section>*/}
    </Layout>
  )
}
