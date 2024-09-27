import { useEffect, useState } from 'react';
import Button from '../../shared/button';
import BasketCard from '../basket-card';
import { useAppSelector } from '../../types/store';
import { TProductsBasket } from '../../types/types';
import { Link } from 'react-router-dom';

function BasketContent() {
  const basketData = useAppSelector((state) => state.products.basket);
  const [basket, setBasket] = useState<TProductsBasket[]>([]);
  useEffect(() => {
    if (basketData) {
      setBasket(basketData);
    }
  }, [basketData]);

  const [result, setResult] = useState(0);
  useEffect(() => {
    const totalSum = basket.reduce(
      (sum, item) => sum + item.count * item.currentPrice,
      0
    );
    setResult(totalSum);
  }, [basket]);

  return (
    <section className='basket container'>
      <h1 className='basket__lead'>Корзина</h1>

      {!basket.length ? (
        <div>
          <p>Ваша корзина еще пуста</p>
          <Link to='/'>Вернуться на главную</Link>
        </div>
      ) : (
        <>
          <div className='basket__inner'>
            <ul className='basket__list'>
              {basket.map((item) => {
                return (
                  <li key={item.id} className='basket__item products__item'>
                    <BasketCard item={item} />
                  </li>
                );
              })}
            </ul>
            <aside className='basket__order'>
              <div className='basket__order-price'>
                <p>Итого</p>
                <p>₽ {result}</p>
              </div>
              <Link to='/order'>
                <Button text='Перейти к оформлению' cls='button--black' />
              </Link>
            </aside>
          </div>
        </>
      )}
    </section>
  );
}

export default BasketContent;
