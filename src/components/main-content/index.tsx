import { headPhones } from '../../mock/mock';
import ProductCard from '../product-card';

function MainContent() {
  return (
    <main className='products  container'>
      <h1 className='products__lead'>Наушники</h1>
      <div className='products__inner'>
        <ul className='products__list'>
          {headPhones.map((item) => {
            return (
              <li key={item.id} className='products__item product'>
                <ProductCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
