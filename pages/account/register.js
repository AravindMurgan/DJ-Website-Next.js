import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';
import styles from '@/styles/AuthForm.module.css';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmpassword] = useState('');

	const { register, error } = useContext(AuthContext);

	//toast error//
	useEffect(() => error && toast.error(error), []);

	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error('Password doesnt match');
			return;
		}

		register({ username, email, password });
	};

	return (
		<Layout title='Register user'>
			<ToastContainer />
			<div className={styles.auth}>
				<h1>
					<FaUser /> Register
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							id='firstname'
						/>
					</div>

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
					<div>
						<label htmlFor='confirmPassword'>Confirm password</label>
						<input
							type='password'
							value={confirmPassword}
							onChange={(e) => setConfirmpassword(e.target.value)}
							id='confirmPassword'
						/>
					</div>

					<input type='submit' value='Register' className='btn' />
				</form>
				<p>
					Already have an account ? <Link href='/account/login'>Log In</Link>
				</p>
			</div>
		</Layout>
	);
}
