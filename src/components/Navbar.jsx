import Link from "next/link";

const Navbar = () => {
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
  return (
    <div>
      <nav>
            <h6><Link href={'/'}>Logo</Link></h6>
            <ul>
              {
                navLinks.map(link => <li key={link.path}><Link href={link.path}>{link.title}</Link></li>)
              }
            </ul>
          </nav>
    </div>
  );
};

export default Navbar;