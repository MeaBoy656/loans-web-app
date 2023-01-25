import './Finish.css';
import axios from 'axios';
import fileDownload from 'js-file-download';
const Finish = (props) => {
	async function downloadPDF() {
		axios
			.get(
				'http://localhost:8000/api?' +
					new URLSearchParams({
						id: props.id,
					}),
				{
					responseType: 'blob',
				}
			)
			.then((res) => {
				fileDownload(res.data, 'filename.pdf');
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	const backToForm = () => {
		props.setRequest(false);
	};

	return (
		<div className='finish-container'>
			<h2 className='page-title-finish'>פרופיל הלקוח מוכן!</h2>
			<div id='success-img'></div>
			<div className='btns'>
				<button className='button' onClick={downloadPDF}>
					הורדת קובץ הניתוח <span className='donnload'></span>
				</button>
				<button className='button-secondary' onClick={backToForm}>
					חזרה לטופס{' '}
				</button>
			</div>
		</div>
	);
};

export default Finish;
