'use client';

import Logo from '@/components/Header/Logo/Logo';
import styles from './Header.module.css';
import SearchBox from './SearchBox/SearchBox';
import { HeaderProps } from './interfaces/HeaderProps';

const Header = ({ searchPlaceholder }: HeaderProps) => (
  <header className={styles.header}>
    <Logo />
    <SearchBox placeholder={searchPlaceholder} />
  </header>
);

export default Header;
