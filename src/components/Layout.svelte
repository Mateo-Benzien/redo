<script>
  import { onMount } from 'svelte';
  import ProductList from '../Product/ProductList.svelte';
  import { products } from '../Store/productStore';

  let isLoading = true;
  let error = null;

  onMount(async () => {
    try {
      await fetchProducts();
      isLoading = false;
    } catch (err) {
      error = err;
      isLoading = false;
    }
  });

  async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    products.set(data);
  }
</script>

<main>
  {#if isLoading}
    <p>Loading...</p>
  {:else if error}
    <p>Error loading products: {error.message}</p>
  {:else}
    <ProductList />
  {/if}
</main>

<style>
  main {
    padding: 1rem;
  }
</style>
