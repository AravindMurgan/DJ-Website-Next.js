import { PER_PAGE } from '@/config/index';
import Link from 'next/link';
import EventsItem from '@/components/EventsItem';

export default function Pagination({ events, page, total }) {
    const lastpage = Math.ceil(total / PER_PAGE);
    return (
        <div>
            <h1> Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map((evt) => (
				<EventsItem key={evt.id} evt={evt} />
			))}

			{page > 1 && (
				<Link href={`/events?page=${page - 1}`}>
					<a className='btn-secondary'>Prev</a>
				</Link>
			)}

			{page < lastpage && (
				<Link href={`/events?page=${page + 1}`}>
					<a className='btn-secondary'>Next</a>
				</Link>
			)}
        </div>
    )
}
