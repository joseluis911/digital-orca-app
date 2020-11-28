import classes from './App.module.css';
import Product from './components/Product/Product'

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Header}>
        <h1>Menu</h1>
      </div>
      <div className={classes.Content}>
      <Product name="Caldo de gallo"/>
      <Product name="Caldo de perro"/>
      <Product name="Caldo de mijares"/>

      </div>
    </div>
  );
}

export default App;
