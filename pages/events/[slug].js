import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventPage({ evt }) {
	console.log(evt);
	return (
		<Layout>
			<h3>{evt.name}</h3>
			<p>test</p>
		</Layout>
	);
}

export async function getStaticPaths(){
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    const path = events.map(evt =>({
        params: {slug: evt.slug}
    }) )

    return {
        path,
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/api/events/${slug}`);
	const events = await res.json();

	return {
		props: { evt: events[0] },
        revalidate:1
	};
}

// export async function getServerSideProps({ query: { slug } }) {
// 	console.log(slug);

// 	const res = await fetch(`${API_URL}/api/events/${slug}`);
// 	const events = await res.json();

// 	return {
// 		props: { evt: events[0] },
// 	};
// }
