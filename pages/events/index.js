import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { API_URL, PER_PAGE } from '@/config/index';

export default function EventsPage({ events, page, total }) {
	return (
		<Layout>
			<Pagination events={events} page={page} total={total} />
		</Layout>
	);
}

export async function getServerSideProps({ query: { page = 1 } }) {
	//calculate start page//
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

	//total Events//
	const totalRes = await fetch(`${API_URL}/events/count`);
	const total = await totalRes.json();

	//Fetch Events
	const eventRes = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	);
	const events = await eventRes.json();

	return {
		props: { events, page: +page, total },
	};
}
