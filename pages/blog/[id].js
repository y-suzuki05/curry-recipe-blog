import { client } from "../../libs/client";

export default function BlogId({ blog }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-md px-4 md:px-8 mx-auto">
        <h1 className="text-gray-800">{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <p>{blog.category && `${blog.category.name}`}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`
          }}
        />
      </div>
    </div>
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