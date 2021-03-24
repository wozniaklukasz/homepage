import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import {useRouter} from "next/router";

export default function Menu() {
  const router = useRouter()

  const getClassName = (href) => router.pathname.split('/')[1] === href ? `${utilStyles.link} active` : utilStyles.link;

  return (
    <>
      <Link href="/">
        <a className={getClassName('')}>Home</a>
      </Link>
      <Link href="/about">
        <a className={getClassName('about')}>About me</a>
      </Link>
      <Link href="/blog">
        <a className={getClassName('blog')}>Blog</a>
      </Link>
    </>
  )
}
