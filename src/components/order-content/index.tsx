import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../types/store';
import { TProductsBasket } from '../../types/types';
import { Link, useNavigate } from 'react-router-dom';
import { productsSlice } from '../../store/slice/products';

function OrderContent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const orderData = useAppSelector((state) => state.products.basket);
  const [order, setOrder] = useState<TProductsBasket[]>([]);

  useEffect(() => {
    if (orderData) {
      setOrder(orderData);
    }
  }, [orderData]);

  const [result, setResult] = useState(0);
  useEffect(() => {
    const totalSum = orderData.reduce(
      (sum, item) => sum + item.count * item.currentPrice,
      0
    );
    setResult(totalSum);
  }, [orderData]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(productsSlice.actions.order());
    navigate('/');
  };
  return (
    <section className='order container'>
      {order.length === 0 ? (
        <div>
          Заказ еще не сформирован.
          <Link to='/'>Вернитесь на главную страницу</Link>
        </div>
      ) : (
        <>
          <h2> Ваш заказ </h2>
          <form method='POST' className='order__inner' onSubmit={handleSubmit}>
            <label htmlFor='clientid'>Фамилия Имя: </label>
            <input
              className='order__info'
              type='text'
              name='clientid'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              id='clientid'
            />

            <label htmlFor='client_phone'> Телефон: </label>
            <input
              className='order__info'
              type='text'
              name='client_phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id='client_phone'
            />

            <label htmlFor='client_email'> Электронный адрес:</label>
            <input
              className='order__info'
              type='text'
              name='client_email'
              placeholder='test@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='client_email'
            />

            <label> Стоимость заказа: {result} ₽</label>

            <button type='submit' className='button button--black'>
              Оплатить
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default OrderContent;
