import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Tags from "../components/tags";

export default function PostPreview({ postData }) {
  if (!postData) return null;

  return (
    <div>
      <div className={utilStyles.headingMd}>
        <Link href={`/blog/${postData.id}`}>
          <a>{postData.title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          <Tags tags={postData.tags} />
        </small>
      </div>
      <p>{postData.description}</p>
    </div>
  );
}
