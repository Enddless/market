import { useEffect, useState } from 'react';
import { productsSlice } from '../../store/slice/products';
import { useAppDispatch } from '../../types/store';
import { TProductsBasket } from '../../types/types';

type TProductProps = {
  item: TProductsBasket;
};

function BasketCard({ item }: TProductProps) {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = () => {
    dispatch(productsSlice.actions.deleteProduct({ id: item.id }));
  };
  const handleIncrement = () => {
    dispatch(productsSlice.actions.increment({ id: item.id }));
  };

  const handleDecrement = () => {
    dispatch(productsSlice.actions.decrement({ id: item.id }));
  };

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const result = item.count * item.currentPrice;
    setTotal(result);
  }, [item.count, item.currentPrice]);

  return (
    <div className='basket__data'>
      <div className='basket__data-icon' onClick={handleDeleteProduct}>
        <svg
          width='21'
          height='17'
          viewBox='0 0 21 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z'
            fill='#DF6464'
          />
        </svg>
      </div>
      <div className='basket__data-top'>
        <img src={item.img} loading='lazy' alt=' photo product' />
        <div className='basket__count'>
          <div
            className='basket__count-previos'
            data-count='-'
            onClick={handleDecrement}></div>
          <div className='basket__count-current'>{item.count}</div>
          <div
            className='basket__count-next'
            data-count='+'
            onClick={handleIncrement}></div>
        </div>
      </div>
      <div className='basket__content'>
        <p className='basket__content-title'>{item.title}</p>
        <p className='basket__content-price'>{item.currentPrice} ₽</p>
      </div>
      <div className='basket__total'>{total} ₽</div>
    </div>
  );
}

export default BasketCard;