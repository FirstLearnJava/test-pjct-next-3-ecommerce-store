import { notFound } from 'next/navigation';
import { getProductById } from '../../database/page';

export const dynamic = 'force - dynamic';

export default function DynamicPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <div>
      {singleProduct.name} is {singleProduct.taste}
    </div>
  );
}
