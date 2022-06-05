import { client } from "../../libs/client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Date from "../../components/date";
import Link from "next/link";

export default function BlogId({ blog }) {
  return (
    <>
      <Header />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <Date dateString={blog.publishedAt} className="text-sm text-gray-500" />
          <img src={ blog.thumbnail.url } alt="" className="my-7" />
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`
            }}
          />
          <div className="text-center mt-10">
            <Link href="/">
              <a className="px-5 py-1 text-gray-500 border border-gray-500 hover:bg-gray-100 cursor-pointer">top</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getStaticPaths = async() => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
}

export const getStaticProps = async(context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    }
  }
}