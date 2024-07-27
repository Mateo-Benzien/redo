import { writable } from 'svelte/store';

const products = writable([]);
const sorting = writable('default');

const sortProducts = () => {
  products.update(currentProducts => {
    const sortOrder = get(sorting);
    const sortedProducts = [...currentProducts];

    if (sortOrder === 'low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  });
};

const setSorting = (newSorting) => {
  sorting.set(newSorting);
  sortProducts();
};

export { products, sorting, sortProducts, setSorting };
