import { DefaultSeo as NextDefaultSeo } from "next-seo";
import { siteTitle, siteUrl } from "../const";

export default function DefaultSeo() {
  return (
    <NextDefaultSeo
      openGraph={{
        type: "website",
        locale: "en_US",
        url: siteUrl,
        site_name: siteTitle,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
}
