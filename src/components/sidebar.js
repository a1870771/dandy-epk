import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';

const navItems = {
  '/': {
    name: 'home',
  },
  '/bios-100': {
    name: 'bios',
  },
  '/photos': {
    name: 'photos',
  },
  '/videos': {
    name: 'videos'
  },
  '/music': {
    name: 'music',
  },
  '/contact': {
    name: 'contact',
  }
};


export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  if (pathname.includes('/bios-')) {
    pathname = '/bios-100';
  }
  return (
    <aside className="font-['kaisei'] relative lg:w-[150px] lg:flex-shrink-0 -mx-4 lg:mx-0 lg:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 lg:ml-[12px] mb-2 px-4 lg:px-0 lg:mb-8 space-y-10 flex flex-col lg:flex-row items-start ">
            <Image src='/japan.png' href='/' width={85} height={85} className='relative -left-3'/>
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row lg:flex-col items-start relative px-2 lg:px-0 pb-0 fade lg:overflow-visible scroll-pr-6 lg:relative"
            id="nav"
          >
            <div className="flex flex-row lg:flex-col -space-x-2 sm:space-x-0 pr-10 mb-2 mt-2 lg:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}