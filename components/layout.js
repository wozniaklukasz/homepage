import Head from 'next/head'
import styles from './layout.module.css'
import Menu from "./menu";
import utilStyles from '../styles/utils.module.css'
import {EntypoLinkedinWithCircle, EntypoMailWithCircle, EntypoGithubWithCircle} from 'react-entypo-icons';
import Link from 'next/link'

export const siteTitle = 'Łukasz Woźniak Software Developer'

export default function Layout({children}) {
  const footerLinkClassName = `${utilStyles.lightText} ${utilStyles.link} ${utilStyles.headingLg}`;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <header className={styles.header}>
        <Menu/>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div>
          <a href="https://github.com/wozniaklukasz" target="github" className={footerLinkClassName}>
            <EntypoGithubWithCircle/>
          </a>
          <a href="https://www.linkedin.com/in/wozniaklukaszg/" target="linkedin" className={footerLinkClassName}>
            <EntypoLinkedinWithCircle/>
          </a>
          <Link href='/contact'>
            <a className={footerLinkClassName}>
              <EntypoMailWithCircle/>
            </a>
          </Link>
        </div>
        <p className={`${utilStyles.lightText} ${utilStyles.noMargin}`}>
          &copy; 2020 - {new Date().getFullYear()} Łukasz Woźniak. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
