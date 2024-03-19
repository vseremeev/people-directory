import styles from './Header.module.css';

const Header = ({ title }: { title: string }) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.h1}>{title}</h1>
		</header>
	);
};

export default Header;
