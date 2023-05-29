import Image from 'next/image';
import Link from 'next/link';
import { fruits, products, vegetables } from '../database/page';
import styles from '../products.module.scss';

export default function productsPage() {
  return (
    <div className={styles.productsPageStyling}>
      <h1>Products-page</h1>
      <h2>vegetables</h2>
      <div className={styles.vegetablesFlexbox}>
        {vegetables.map((vegetable) => {
          return (
            <div key={`fruit-id:${vegetable.id}`}>
              <Link href={`/products/${vegetable.id}`}>{vegetable.name}</Link>
              <Link
                href={`/products/${vegetable.id}`}
                data-test-id={`product-${vegetable.id}`}
              >
                <Image
                  src={`/images/${vegetable.name}.jpg`}
                  width="144"
                  height="100"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <h2>fruits</h2>
      <div className={styles.fruitsFlexbox}>
        {fruits.map((fruit) => {
          return (
            <div key={`fruit-id:${fruit.id}`}>
              <Link href={`/products/${fruit.id}`}>{fruit.name}</Link>
              <Link
                href={`/products/${fruit.id}`}
                data-test-id={`product-${fruit.id}`}
              >
                <Image
                  src={`/images/${fruit.name}.jpg`}
                  width="144"
                  height="100"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
