import { useEffect, useState } from 'react';
import { CardProduct } from '../components/cardProduct';
import { getBooks } from '../helpers/axios-api-client';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const product = await getBooks();
      setProducts(product);
    };
    fetchData();
  }, []);

  return (
    <div className="container-xl">
      {products.length > 0 && (
        <div className="row px-4 mx-auto justify-content-center justify-md-center ">
          {products.map((item, index) => (
            <div key={index} className="col col-md-3 m-4">
              <CardProduct
                key={index}
                id={item.id}
                name={item.name}
                author={item.author}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
