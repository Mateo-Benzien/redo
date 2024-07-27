import App from './App.svelte';

const app = new App({
  target: document.getElementById('root')  // Ensure 'root' matches the id in index.html
});

export default app;
