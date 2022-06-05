import Link from "next/link";
import { client } from "../libs/client";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <ul className="max-w-screen-md mt-12 px-4 md:px-8 mx-auto">
        {blog.map((blog) =>  (
          <li key={blog.id} className="mb-12">
            <Link href={`/blog/${blog.id}`}>
              <a className="lg:flex hover:opacity-50">
                <img src={ blog.thumbnail.url } alt="" className="w-full lg:w-1/2 h-40 object-contain" />
                <div className="lg:ml-1.5 mt-5">
                  <p className="text-lg font-bold mb-1">
                    { blog.title }
                  </p>
                  <p className="text-sm text-gray-500">
                    { blog.description }
                  </p>
                </div>
              </a>
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