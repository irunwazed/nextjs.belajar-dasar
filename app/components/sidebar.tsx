import Link from "next/link"

const Sidebar = () => {
    return (

        <nav className="bg-black p-5 ">
        <ul className="grid gap-3">
          <li className="hover:opacity-80"><Link href="/pages/about">About</Link></li>
          <li><Link href="/pages/counter">Counter</Link></li>
        </ul>
      </nav>
    )
}

export default Sidebar;