import { Route, Routes } from 'react-router';
import MainPage from './pages/main-page';
import NotFoundPage from './pages/not-found-page';
import BasketPage from './pages/basket-page';
import OrderPage from './pages/order-page';
import { AppRoute } from './routes/routes';

function Router() {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Basket} element={<BasketPage />} />
      <Route path={AppRoute.Order} element={<OrderPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
