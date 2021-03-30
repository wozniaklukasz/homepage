import {NextSeo} from "next-seo";
import {siteTitle, siteUrl} from "../const";

export default function Seo({title, description, imageSrc, imageAlt}) {
  return (
    <NextSeo
      title={title}
      description={description}
      // canonical="https://www.canonical.ie/"
      openGraph={{
        url: siteUrl,
        title: title,
        description: description,
        images: [
          {
            url: imageSrc ? `https://lukaszwozniak.dev${imageSrc}` : 'https://lukaszwozniak.dev/images/lukasz-wozniak.jpg',
            width: 800,
            height: 600,
            alt: imageAlt ? imageAlt : siteTitle,
          },
        ],
        site_name: siteTitle,
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  )
}
