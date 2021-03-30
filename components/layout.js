import styles from './layout.module.css'
import Menu from "./menu";
import utilStyles from '../styles/utils.module.css'
import {
  EntypoLinkedinWithCircle,
  EntypoMailWithCircle,
  EntypoGithubWithCircle,
  EntypoTwitterWithCircle
} from 'react-entypo-icons';
import Link from 'next/link'

export default function Layout({children}) {
  const footerLinkClassName = `${utilStyles.lightText} ${utilStyles.link} ${utilStyles.headingLg}`;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Menu/>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div>
          <a aria-label="GitHub" href="https://github.com/wozniaklukasz/" target="github" className={footerLinkClassName}>
            <EntypoGithubWithCircle/>
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/wozniaklukaszg/" target="linkedin" className={footerLinkClassName}>
            <EntypoLinkedinWithCircle/>
          </a>
          <a aria-label="Twitter" href="https://twitter.com/wozniaklukaszg/" target="twitter" className={footerLinkClassName}>
            <EntypoTwitterWithCircle/>
          </a>
          <Link href='/contact'>
            <a aria-label="Contact" className={footerLinkClassName}>
              <EntypoMailWithCircle/>
            </a>
          </Link>
        </div>
        <p className={utilStyles.lightText}>
          &copy; 2021 Łukasz Woźniak. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
