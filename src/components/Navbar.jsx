"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  // navbar options
  const navLinks = [
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Services',
      path: '/services'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ]

  console.log(pathName);

  // redirect to login page
  const handleLoginBtn = () => {
    router.push('/login');
  }

  return (
    <nav className="flex p-4 justify-between items-center bg-purple-900 text-white">
      <h6 className="text-green-400 text-4xl font-bold"><Link href={'/'}>Logo</Link></h6>
      <ul className="flex gap-5 items-center">
        {
          navLinks.map(
            link =>
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`${pathName.includes(link.path) && 'text-green-400'}`}
                >
                  {link.title}
                </Link>
              </li>
          )
        }
      </ul>
      <button onClick={handleLoginBtn} className="bg-white text-green-600 font-bold px-4 py-2 rounded-lg">Login</button>
    </nav>
  );
};

export default Navbar;