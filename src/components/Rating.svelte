<script>
    import Ratings from './Ratings.svelte';
  
    export let product = {
      id: '',
      title: '',
      image: '',
      price: 0,
      rating: 0,
      category: ''
    };
  </script>
  
  <div class="product-card">
    <img src={product.image} alt={product.title} class="product-image"/>
    <h2 class="product-title">{product.title}</h2>
    <p class="product-price">${product.price}</p>
    <Ratings rate={product.rating} count={0} />
  </div>
  
  <style>
    .product-card {
      /* Add card styles */
    }
    .product-image {
      /* Add image styles */
    }
    .product-title {
      /* Add title styles */
    }
    .product-price {
      /* Add price styles */
    }
  </style>
  