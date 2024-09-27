import { Link } from 'react-router-dom';
import ntf from 'public/images/404.png';

function NotFound() {
  return (
    <section className='notfound container'>
      <div className='notfound__inner'>
        <p>Ooooops,page not found</p>
        <Link to='/' className='notfound__link'>
          Go to back
        </Link>
        <img src={ntf} alt='photo not found' width={600} loading='lazy' />
      </div>
    </section>
  );
}

export default NotFound;
