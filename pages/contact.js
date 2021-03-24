import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.heading2Xl}>Contact</h1>
      <section className={utilStyles.headingMd}>
        <ContactForm />
      </section>
    </Layout>
  )
}
