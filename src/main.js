import App from './App.svelte';
import '../styles.css';

const app = new App({
  target: document.getElementById('root')  // Ensure 'root' matches the id in index.html
});

export default app;
