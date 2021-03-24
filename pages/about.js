import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from "next/image";

export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>About me</h1>
      <section>
        <h2>Professional experience</h2>
        <p>I started working as a software developer when I was a student in July 2014. I did an one-year internship as
          a .NET
          developer. At the same time I've done my engineering project <i>"The web application supporting a
            water equipment rental company"</i> (in ASP .NET MVC 5). After that I've got my first job as a Front-End
          developer. That time I created lots of small websites based on Joomla.</p>
        <Image
          src="/images/lukasz-wozniak-workation.jpeg"
          alt='lukasz-wozniak-software-developer'
          width={1024}
          height={576}
        />
        <i className={utilStyles.lightText}>
          October 2018, I had the opportunity to go with my team for a workation to work from sunny Malta.
        </i>
        <p>In 2017 I defended my Master's thesis <i>"Comparative analysis of selected methods of testing the usability
          of mobile applications"</i> at the Wrocław University of Science and Technology. Also that year I got my first
          full-time job as a Front-end developer. I made an application to internal use of company in Angular.</p>
        <p>At the beginning of 2018 I started to use React and Redux. I had the opportunity to create 3 React
          applications from scratch. Beyond that I rarely helped with simple backend tasks and maintain AngularJS
          applications. As a member of interdisciplinary scrum team I cooperated with Java developers,
          DevOps developers and QA Automation testers.</p>
        <p>To be continued...</p>
      </section>
      <section>
        <h2>Free time</h2>
        <p>During the winter I go snowboarding. In the summer I sail. During the year you can meet me at the gym
          (recently I started learning to olympic weightlifting). I like cooking and eating some good food (sushi, pizza
          or some beef). Sometimes I enjoy good whisky or beer. I'd like to read more books. My favourite film is <i>"Chłopaki
            nie płaczą"</i>.</p>
      </section>
    </Layout>
  )
}
