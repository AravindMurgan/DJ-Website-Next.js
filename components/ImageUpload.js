import styles from '@/styles/Form.module.css';
import { useState } from 'react';

export default function ImageUpload() {
	const [image, setImage] = useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleFileChange=()=>{
        
    }

	return (
		<div className>
			<h1>Image Upload Component</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.file}>
					<input type='file' onChange={handleFileChange} />
				</div>
				<input type='submit' className='btn' value='Upload' />
			</form>
		</div>
	);
}
