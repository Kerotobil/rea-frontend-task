import Image from 'next/image';
import Link from 'next/link';

export const CardProduct = (props) => {
  return (
    <div>
      <Link href={`/book/${props.id}`} passHref>
        <div className="card-product rounded shadow">
          <div className="card-product-image">
            <Image
              src={props.image}
              priority
              layout="fill"
              objectFit="contain"
              className="bg-secondary py-1"
              alt={props.name}
            />
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text card-product-description">{props.author}</p>
            </div>
            <div className="card-product-info text-center rounded-lg mx-auto mb-2">{props.price + ' ₺'}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
