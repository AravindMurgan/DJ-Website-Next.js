import DashboardEvent from '@/components/DashboardEvent';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import styles from '@/styles/DashboardEvent.module.css';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardPage({ events, token }) {
	const router = useRouter();

	const deleteEvent = async (id) => {
		if (confirm('Are you sure?')) {
			const res = await fetch(`${API_URL}/events/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = res.json();

			if (!res.ok) {
				toast.error(data.message);
			} else {
				router.reload();
			}
		}
	};

	return (
		<Layout title='Dashboard'>
			<div className={styles.dash}>
				<h1>Dashboard Page</h1>
				<h3>My Events</h3>

				{events.map((evt) => (
					<DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
				))}
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);

	const res = await fetch(`${API_URL}/events/me`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const events = await res.json();

	return {
		props: {
			events,
			token,
		},
	};
}
