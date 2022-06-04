import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="text-4xl text-gray-900 text-center font-bold m-5">
        <Link href="/">
          <a>RecipeBlog</a>
        </Link>
      </div>
    </header>
  )
}