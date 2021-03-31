import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ContactForm from "../components/contactForm";
import { siteTitle } from "../const";
import Seo from "../components/seo";

export default function Contact() {
  return (
    <Layout>
      <Seo
        title={`Contact | ${siteTitle}`}
        description={`${siteTitle} contact page.`}
      />
      <h1 className={utilStyles.heading2Xl}>Contact</h1>
      <section className={utilStyles.headingMd}>
        <ContactForm />
      </section>
    </Layout>
  );
}
