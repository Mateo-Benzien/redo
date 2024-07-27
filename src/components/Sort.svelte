<script>
    import { onDestroy } from 'svelte'; 
    import { sorting, setSorting } from '../Store/productStore'; 
    
    let currentSorting = 'default';
    
    // Subscribe to the sorting store to get the current sorting value
    const unsubscribe = sorting.subscribe(value => {
      currentSorting = value;
    });
    
    // Cleanup subscription on component destroy
    onDestroy(() => {
      unsubscribe();
    });
    
    // Handler for sort change
    function handleSort(event) {
      setSorting(event.target.value);
    }
  </script>
  
  <div class="flex sm:w-[95%] max-w-[21rem] md:w-full">
    <label for="sort" class="w-20 my-auto font-semibold">
      Sort by: 
    </label>
    <select
      on:change={handleSort}
      bind:value={currentSorting}
      id="sort"
      class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="default">Default</option>
      <option value="low">Price: Low to High</option>
      <option value="high">Price: High to Low</option>
    </select>
  </div>
  
  <style>
    /* Add any additional styles here */
  </style>
  