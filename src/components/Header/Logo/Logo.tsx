import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Logo.module.css';
import { useSearchInputContext } from '@/context/SearchInput/SearchInputProvider';

const Logo = () => {
  const router = useRouter();
  const { clearSearchInput } = useSearchInputContext();

  const handleRedirect = () => {
    clearSearchInput();
    router.push('/');
  };

  return (
    <div className={styles.logo}>
      <Image
        src='/assets/meli-logo.svg'
        alt='Mercado Libre Logo'
        width={48}
        height={48}
        onClick={handleRedirect}
        priority
      />
    </div>
  );
};

export default Logo;
