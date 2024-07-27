<script>
    export let product;
  </script>
  
  <div class="product-card">
    <img src={product.image} alt={product.title} />
    <h2>{product.title}</h2>
    <p>${product.price}</p>
  </div>
  
  <style>
    .product-card {
      border: 1px solid #ddd;
      padding: 1rem;
      text-align: center;
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  
    h2 {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
  
    p {
      font-size: 1rem;
      color: #333;
    }
  </style>
  