import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import { siteTitle } from "../const";
import Seo from "../components/seo";

export default function About() {
  return (
    <Layout>
      <Seo
        title={`About | ${siteTitle}`}
        description={`${siteTitle} about page.`}
      />
      <h1 className={utilStyles.heading2Xl}>About me</h1>
      <section>
        <h2>Professional experience</h2>
        <p>
          I started working as a software developer when I was a student in July
          2014. I did a one-year internship as a .NET developer. At the same
          time, I&apos;ve done my engineering project{" "}
          <i>
            &quot;The web application supporting a water equipment rental
            company&quot;
          </i>{" "}
          (in ASP .NET MVC 5). After that, I&apos;ve got my first job as a
          Front-End developer. That time I created lots of small websites based
          on Joomla.
        </p>
        <Image
          src="/images/lukasz-wozniak-workation.jpg"
          alt={siteTitle}
          width={1024}
          height={576}
        />
        <i className={utilStyles.lightText}>
          In October 2018, I had the opportunity to go with my team for a
          workation to work from sunny Malta.
        </i>
        <p>
          In 2017 I defended my Master&apos;s thesis{" "}
          <i>
            &quot;Comparative analysis of selected methods of testing the
            usability of mobile applications&quot;
          </i>{" "}
          at the Wrocław University of Science and Technology. Also that year I
          got my first full-time job as a Front-end developer. I made an
          application for internal use of the company in Angular.
        </p>
        <p>
          At the beginning of 2018, I started to use React and Redux. I had the
          opportunity to create 3 React applications from scratch. Beyond that,
          I rarely helped with simple backend tasks and maintain AngularJS
          applications. As a member of the interdisciplinary scrum team, I
          cooperated with Java developers, DevOps developers, and QA Automation
          testers.
        </p>
        <p>To be continued...</p>
      </section>
      <section>
        <h2>Free time</h2>
        <p>
          During the winter I go snowboarding. In the summer I sail. During the
          year you can meet me at the gym (recently I started learning to
          weightlifting). I like cooking and eating some good food (sushi, pizza
          or some beef). Sometimes I enjoy good whisky or beer. I&apos;d like to
          read more books. My favourite film is{" "}
          <i>&quot;Chłopaki nie płaczą&quot;</i>.
        </p>
      </section>
    </Layout>
  );
}
