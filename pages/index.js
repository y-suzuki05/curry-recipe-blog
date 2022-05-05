import Link from "next/link";
import { client } from "../libs/client";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <ul>
        {blog.map((blog) =>  (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{ blog.title }</a>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    }
  }
}