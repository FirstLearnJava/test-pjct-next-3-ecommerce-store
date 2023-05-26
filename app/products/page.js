import Link from 'next/link';
import { products } from '../database/page';
import styles from '../layout.module.scss';

export default function productsPage() {
  return (
    <div className="styles.productsPageStyling">
      Products-page
      {products.map((product) => {
        return (
          <div key={`product-id:${product.id}`}>
            The <Link href={`/products/${product.id}`}>{product.name}</Link> is{' '}
            {product.taste}
          </div>
        );
      })}
    </div>
  );
}
