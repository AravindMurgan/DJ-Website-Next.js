import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
import {useRouter} from 'next/router';
import Showcase from './Showcase';

export default function Layout({ title, descriptiton, keyword, children }) {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={descriptiton} />
				<meta name='keyword' content={keyword} />
			</Head>

			<Header />
			{router.pathname === '/' && <Showcase/>  }
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'DJ Events || Hottest parties in town',
	descriptiton: 'Best DJ events in the town,catch up soon',
};
