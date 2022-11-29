import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from './components/shares/Products';
import { add, remove } from './redux/actions';

const App = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://fakestoreapi.com/products');
      let pds = await response.json();
      dispatch(add(pds));
    }
    fetchData();
  });

  return (
    <div className='container'>
      <div className='row'>
        {products.map((pd) => (
          <Products key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default App;
