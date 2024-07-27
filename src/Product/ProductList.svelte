<script>
    import { products } from '../Store/productStore';
    import ProductCard from './ProductCard.svelte';
    import { get } from 'svelte/store';
  
    let productList = get(products);
    products.subscribe(value => {
      productList = value;
    });
  </script>
  
  <div class="product-list">
    {#each productList as product}
      <ProductCard {product} />
    {/each}
  </div>
  
  <style>
    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
  </style>
  