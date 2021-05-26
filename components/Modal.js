import { body, header, modal, overlay } from '@/styles/Modal.module.css';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ReactDOM from 'react-dom'

export default function Modal({ show, onClose, children, title }) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

    const handleClose =(e)=>{
        e.preventDefault()
        onClose()
    }

	const modelContent = show ? (
		<div className={overlay}>
			<div className={modal}>
				<div className={header}>
					<a href='#' onClick={handleClose}>
						<FaTimes />
					</a>
				</div>
				{title && <div>{title}</div>}
				<div className={body}>{children}</div>
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modelContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
}
