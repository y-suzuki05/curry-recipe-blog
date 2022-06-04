import { client } from "../../libs/client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Date from "../../components/date";

export default function BlogId({ blog }) {
  return (
    <>
      <Header />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-3xl mb-4">{blog.title}</h1>
          <Date dateString={blog.publishedAt} className="mb-4" />
          <p className="mb-4">{blog.category && `${blog.category.name}`}</p>
          <img src={ blog.thumbnail.url } alt="" className="mb-4" />
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`
            }}
          />
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