import Layout from '@/components/Layout';
import styles from '@/styles/Form.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AddEventpage() {
	const [values, setValue] = useState({
		name: '',
		performers: '',
		venue: '',
		address: '',
		date: '',
		time: '',
		description: '',
	});
	const router = useRouter();

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('form-submit');
    }

    const handleInputChange=(e)=>{
        const {name,value } = e.target
        setValue({
            ...values,
            [name]:value
        })
    }
	return (
		<Layout title='Add New Event'>
			<Link href='/events'>Go Back</Link>
			<h1>Add Events</h1>
            

			<form onSubmit={handleSubmit}>
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
				</div>
			</form>
		</Layout>
	);
}
