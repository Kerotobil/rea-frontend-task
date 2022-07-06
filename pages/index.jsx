import { useEffect, useState } from 'react';
import { CardProduct } from '../components/cardProduct';
import { Navigation } from '../components/navbar';
import { getBooks } from '../helpers/axios-api-client';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    setFirstRender(true);
  }, []);
  useEffect(() => {
    if (firstRender) {
      const fetchData = async () => {
        const product = await getBooks();
        setProducts(product);
      };
      fetchData();
    }
  }, [firstRender]);

  return (
    <div className="container-xl">
      <Navigation />
      <div className="row px-4 mx-auto justify-content-center justify-md-center ">
        {products.map((item, index) => (
          <div key={index} className="col col-md-3 m-4">
            <CardProduct id={item.id} name={item.name} author={item.author} image={item.image} price={item.price} />
          </div>
        ))}
      </div>
    </div>
  );
}
