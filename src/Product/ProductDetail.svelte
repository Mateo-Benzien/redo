<script>
    import ProductDetail from './ProductDetail.svelte';
    import { productDetails } from '../Store/productStore'; // Adjust import as needed
  
    let product = {}; // Placeholder for product details, fetch from store or API
  
    // Example of fetching product details
    productDetails.subscribe(value => {
      product = value;
    });
  </script>
  
  <ProductDetail
    {product.id}
    {product.title}
    {product.description}
    {product.image}
    {product.price}
    {product.rating}
    {product.category}
  />
  
  <style>
    /* Add any additional styles or adjustments here if needed */
  </style>
  