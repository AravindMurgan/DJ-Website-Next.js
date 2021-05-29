import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';
import styles from '@/styles/AuthForm.module.css';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login, error } = useContext(AuthContext);

	useEffect(() => error && toast.error(error));
	const handleSubmit = (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<Layout title='User Login'>
			<ToastContainer />
			<div className={styles.auth}>
				<h1>
					<FaUser /> Log In
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='email'>Email Address</label>
						<input
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							id='email'
						/>
					</div>

					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id='password'
						/>
					</div>

					<input type='submit' value='Login' className='btn' />
				</form>
				<p>
					Don't have an account ? <Link href='/account/register'>Register</Link>
				</p>
			</div>
		</Layout>
	);
}
