import ImageUpload from '@/components/ImageUpload';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditEventpage({ evt }) {
	const [values, setValue] = useState({
		name: evt.name,
		performers: evt.performers,
		venue: evt.venue,
		address: evt.address,
		date: evt.data,
		time: evt.time,
		description: evt.description,
	});

	const [imagePreview, setImagepreview] = useState(
		evt.image ? evt.image.formats.thumbnail.url : null
	);

	const [showModal, setShowModal] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const hasEmptyFields = Object.values(values).some(
			(element) => element === ''
		);

		if (hasEmptyFields) {
			toast.error('Please fill all Fields');
		}

		const res = await fetch(`${API_URL}/events/${evt.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});
		console.log(res);
		if (!res.ok) {
			toast.error('Something went wrong');
		} else {
			const evt = await res.json();
			router.push(`/events/${evt.slug}`);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValue({
			...values,
			[name]: value,
		});
	};

	const imageUploaded = async (e) => {
		const res = await fetch(`${API_URL}/events/${evt.id}`);
		const data = await res.json();
		setImagepreview(data.image.formats.thumbnail.url);
		setShowModal(false);
	};

	return (
		<Layout title='Edit Event'>
			<Link href='/events'>Go Back</Link>
			<h1>Add Events</h1>
			<ToastContainer />
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.grid}>
					<div>
						<label htmlFor='name'>Event Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={values.name}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label htmlFor='performers'>Performers</label>
						<input
							type='text'
							name='performers'
							id='performers'
							value={values.performers}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='venue'>Venue</label>
						<input
							type='text'
							name='venue'
							id='venue'
							value={values.venue}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							name='address'
							id='address'
							value={values.address}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='date'>Date</label>
						<input
							type='date'
							name='date'
							id='date'
							value={moment(values.date).format('yyyy-MM-DD')}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='time'>Time</label>
						<input
							type='text'
							name='time'
							id='time'
							value={values.time}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div>
					<label htmlFor='description'>Event Description</label>
					<textarea
						name='description'
						id='description'
						value={values.description}
						onChange={handleInputChange}
					></textarea>
				</div>

				<input type='submit' value='Update Event' className='btn' />
			</form>

			{imagePreview ? (
				<div>
					<h2>Event Image</h2>
					<Image src={imagePreview} width={170} height={100} />
				</div>
			) : (
				<div>
					<p>Image not uploaded</p>
				</div>
			)}
			<div>
				<button
					onClick={() => setShowModal(true)}
					className='btn btn-secondary'
				>
					Update Image{' '}
				</button>
			</div>

			<Modal show={showModal} onClose={() => setShowModal(false)}>
				<ImageUpload evtId={evt.id} imageUploaded={imageUploaded} />
			</Modal>
		</Layout>
	);
}

export async function getServerSideProps({ params: { id } }) {
	const res = await fetch(`${API_URL}/events/${id}`);
	const evt = await res.json();

	return {
		props: {
			evt,
		},
	};
}
