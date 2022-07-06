import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UpdateModal } from '../../components/book/updateModal';
import { Navigation } from '../../components/navbar';
import { deleteBook, getBook } from '../../helpers/axios-api-client';

export default function Product() {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [moreText, setMoreText] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const deleteProduct = async (id) => {
    await deleteBook(id).then(() => router.push('/'));
  };

  useEffect(() => {
    const fetcData = async () => {
      const product = await getBook(`${router.query.id}`);
      setProduct(product);
      setButtonDisabled(product.delete);
    };
    if (router.query.id != null) {
      fetcData();
    }
  }, [router]);
  return (
    <div>
      <Navigation />

      {product && (
        <div className="container">
          <div className="row justify-center">
            <div className="col-md">
              <div className="product-image border">
                <Image src={product.image} layout="fill" objectFit="contain" alt={product.name} />
              </div>
            </div>
            <div className="col-md w-100">
              <div className="card w-100 border-0" style={{ width: '18rem', height: '100%' }}>
                <div className="card-body">
                  <h5 className="card-title">{`${product.name}`}</h5>
                  <p className={`card-text ${moreText ? null : 'product-card-text-line'} `}>{product.author}</p>
                  <div className="d-flex justify-content-around">
                    <button
                      onClick={() => {
                        deleteProduct(product.id);
                      }}
                      disabled={buttonDisabled}
                      className={`btn bg-primary text-white border-0 px-4 ${buttonDisabled ? 'disabled' : null}`}
                    >
                      Sil
                    </button>
                    <div className="card-product-info text-center rounded-lg mx-auto mb-2">{product.price + ' ₺'}</div>
                  </div>
                </div>
                <button
                  style={{ width: '8rem' }}
                  onClick={() => {
                    setShowEditModal(true);
                  }}
                  disabled={buttonDisabled}
                  className={`btn bg-primary text-white border-0 px-4 ${buttonDisabled ? 'disabled' : null}`}
                >
                  Düzenle
                </button>
              </div>
            </div>
          </div>
          <UpdateModal
            id={product.id}
            name={product.name}
            price={product.price}
            author={product.author}
            show={showEditModal}
            onHide={() => {
              setShowEditModal(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
