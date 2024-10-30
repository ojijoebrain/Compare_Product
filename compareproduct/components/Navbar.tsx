import Image from "next/image";
import Link from "next/link";

const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'Search' },
    { src: '/assets/icons/black-heart.svg', alt: 'heart'},
    { src: '/assets/icons/user.svg', alt: 'User'},
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.JPG"
            width={27}
            height={27}
            alt="Compare product logo"
          />
          <p className="nav-logo">
            Compare<span className="text-primary">_product</span>
          </p>
        </Link>
        
        <div className="flex items-center gap-5" aria-label="Navigation Icons">
          {navIcons.map((icon) => (
            <button key={icon.alt} aria-label={icon.alt} className="focus:outline-none">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
