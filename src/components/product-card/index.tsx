import { TProducts } from '../../types/types';
import Button from '../../shared/button';
import { useAppDispatch } from '../../types/store';
import { productsSlice } from '../../store/slice/products';

type TProductProps = {
  item: TProducts;
};
function ProductCard({ item }: TProductProps) {
  const dispatch = useAppDispatch();
  const addBasket = (product: TProducts) => {
    dispatch(productsSlice.actions.addBasket(product));
  };
  return (
    <>

        <div className='product__data'>
          <div className='product__data-top'>
            <a href={item.link} target='_blank'>
              <img src={item.img} loading='lazy' alt='photo product' width={221} height={238}/>
            </a>
          </div>
          <div className='product__content'>
            <div className='product__content-info'>
              <p className='product__content-title'>{item.title}</p>
              <div className='product__content-prices'>
                <p className='current__price'>{item.currentPrice} ₽</p>
                {item.previosPrice && (
                  <p className='previos__price'>{item.previosPrice} ₽</p>
                )}
              </div>
            </div>
            <div className='product__content-order'>
              <p className='product__content-rate'>
                <svg
                  width='25'
                  height='23'
                  viewBox='0 0 25 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z'
                    fill='#FFCE7F'
                  />
                </svg>
                {item.rate}
              </p>
            </div>
          </div>
        </div>

      <div className='product__button'>
        <Button text='Купить' onClick={() => addBasket(item)} />
      </div>
    </>
  );
}

export default ProductCard;
