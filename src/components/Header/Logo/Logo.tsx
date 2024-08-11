import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Logo.module.css';

const Logo = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <div className={styles.logo}>
      <Image
        src='/meli-logo.svg'
        alt='Mercado Libre Logo'
        width={48}
        height={48}
        onClick={() => handleRedirect()}
      />
    </div>
  );
};
export default Logo;
