import Layout from '@/components/Layout';
import styles from '@/styles/AuthForm.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
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
							type='text'
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
