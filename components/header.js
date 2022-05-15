import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="text-4xl p-10">
        <Link href="/">
          {/* <a>CurryRecipeBlog</a> */}
          <a>RecipeBlog</a>
        </Link>
      </div>
    </header>
  )
}