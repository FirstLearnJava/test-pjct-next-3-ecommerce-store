import './globals.scss';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../public/images/cart.svg';
import logo from '../public/images/logo.png';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Make some test',
  description: 'test template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${inter.className}`}>
      <header data-test-id="products-link">
        <nav
          className={`${styles.layoutHeader} ${styles.navbarAnchorElements}`}
        >
          <Link href="/">
            <Image src={logo} className={styles.logo} />
          </Link>

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">
                <Image src={cart} className={styles.cart} />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <div className={styles.spaceForFixedHeader} />
        {children}
      </body>
    </html>
  );
}
