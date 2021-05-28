import AuthContext from '@/context/AuthContext';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { FaSignInAlt ,FaSignOutAlt } from 'react-icons/fa';
import Search from './Search';

export default function Header() {
	const { user, logout } = useContext(AuthContext);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<a>DJ Events</a>
				</Link>
			</div>
			<Search />
			<nav>
				<ul>
					<li>
						<Link href='/events'>
							<a>Events</a>
						</Link>
					</li>
					{user ? (
                        //If Logged in
						<>
							<li>
								<Link href='/events/add'>
									<a>Add Event</a>
								</Link>
							</li>

                            <li>
								<Link href='/account/logout'>
									<a className='btn-secondary btn-icon' > <FaSignOutAlt/> Logout</a>
								</Link>
							</li>

						</>
					) : (
                        //If Logged out
						<>
							<li>
								<Link href='/account/login'>
									<a className='btn-secondary btn-icon'>
										{' '}
										<FaSignInAlt /> Login
									</a>
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}
