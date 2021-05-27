import EventsItem from '@/components/EventsItem';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

export default function EventsPage({ events }) {
	const router = useRouter()
	return (
		<Layout>
			<h1> Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map((evt) => (
				<EventsItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export async function getServerSideProps({query:{page=1}}) {
	
	const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
	console.log(res);
	const events = await res.json();

	return {
		props: { events },
	};
}
