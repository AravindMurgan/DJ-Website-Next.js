import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';


export default function EventPage({ evt }) {
	const router = useRouter();

	return (
		<Layout>
			<div className={styles.event}>
				<span>
					{new Date(evt.date).toLocaleDateString('en-IN')} at {evt.time}
				</span>

				<h1>{evt.name} </h1>
				{evt.image && (
					<div className={styles.image}>
						<Image src={evt.image.formats.large.url} width={960} height={600} />
					</div>
				)}

				<h3>Performers: </h3>
				<p>{evt.performers}</p>
				<h3>Description:</h3>
				<p>{evt.description}</p>
				<h3>Venue: {evt.venue} </h3>
				<p>{evt.address} </p>


				<Link href='/events'>
					<a className={styles.back}>{'<'} Go Back </a>
				</Link>
			</div>
		</Layout>
	);
}

// export async function getStaticPaths() {
// 	const res = await fetch(`${API_URL}/events`);
// 	const events = await res.json();

// 	const paths = events.map((evt) => ({
// 		params: { slug: evt.slug },
// 	}));

// 	return {
// 		paths,
// 		fallback: true,
// 	};
// }

// export async function getStaticProps({ params: { slug } }) {
// 	const res = await fetch(`${API_URL}/events?slug=${slug}`);
// 	const events = await res.json();

// 	return {
// 		props: { evt: events[0] },
// 		revalidate: 1,
// 	};
// }

export async function getServerSideProps({ query: { slug } }) {
	console.log(slug);

	const res = await fetch(`${API_URL}/events?slug=${slug}`);
	const events = await res.json();

	return {
		props: { evt: events[0] },
	};
}
