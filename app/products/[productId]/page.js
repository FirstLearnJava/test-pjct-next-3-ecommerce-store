'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { getFruitById, getVegetableById } from '../../database/page';

export const dynamic = 'force - dynamic';

export default function DynamicPage({ params }) {
  const singleVegetable = getVegetableById(Number(params.productId));
  const singleFruit = getFruitById(Number(params.productId));
  const [quantityVegetable, setQuantityVegetable] = useState(1);

  if (!singleVegetable && !singleFruit) {
    notFound();
  } else if (singleVegetable) {
    return (
      <div>
        <h1>{singleVegetable.name}</h1>
        <Image
          src={`/images/${singleVegetable.name}.jpg`}
          width="144"
          height="100"
          alt="vegetable image"
          data-test-id="product-image"
        />
        <p>{singleVegetable.price}</p>
        <form>
          <label>
            quantity
            <input
              type="number"
              // placeholder="quantity"
              value={quantityVegetable}
              data-test-id="product-quantity"
            />
          </label>
        </form>
      </div>
    );
  } else if (singleFruit) {
    return (
      <div>
        <h1>{singleFruit.name}</h1>
        <Image
          src={`/images/${singleFruit.name}.jpg`}
          width="144"
          height="100"
          alt="fruit image"
          data-test-id="product-image"
        />
        <p>{singleFruit.price}</p>
        <form>
          <input placeholder="quantity" />
        </form>
      </div>
    );
  }
}
