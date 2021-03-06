import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import style from './hero.module.css'
import Link from "next/link";
import {siteTitle} from "../const";

export default function Hero() {
  return (
    <div className={style.container}>
      <Image
        priority
        src="/images/lukasz-wozniak.jpg"
        height={144}
        width={144}
        alt={siteTitle}
        className={utilStyles.image}
      />
      <p className={style.text}>
        Łukasz Woźniak - software developer specialized in React, Redux and TypeScript. Read more <Link href="/about"><a>about
        me</a></Link>.
      </p>
    </div>
  )
}
