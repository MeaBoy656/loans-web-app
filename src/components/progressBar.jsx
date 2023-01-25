import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import gsap from 'gsap';

import 'react-step-progress/dist/index.css';
import BusinessInformation from './businessInformation';
import FinancialInformation from './financialInformation';
import LoanInformation from './loanInformation';
import PersonalInformation from './pesonalInformation';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';
import Sidenav from './ui/Sidenav';
import '../index.css';
import './ui/controlsContainer.scss';
import LoadingScreen from './ui/LoadingScreen';

function Progressbar(props) {
	const { register, getValues, unregister } = useForm();
	const [percent, setPrecent] = useState(1);
	const [step, setStep] = useState(1);
	const [isFetchActive, setFetchActive] = useState(false);
	const [hasWorkers, setHasWorkers] = useState(true);

	register('status', { value: 'רווק' });
	register('gender', { value: 'זכר' });
	register('loanType', { value: 'invest' });
	register('companyField', { value: 'נותני שירותים' });
	register('companySubField', { value: 'עריכת דין' });
	register('companyType', { value: 'ltd' });
	register('loanVolume', { value: false });
	register('reasons', { value: [{ reason: 'שיפוץ', volume: 0 }] });
	register('banks', { value: [{ bank: 'לאומי', LD0: '', BAL0: '', BS0: '' }] });

	function validation(step) {
		const values = getValues();

		switch (step) {
			case 1:
				if (
					!values['email'] ||
					!values['firstname'] ||
					!values['lastname'] ||
					!values['gender'] ||
					!values['id'] ||
					!values['city'] ||
					!values['street'] ||
					!values['houseNumber'] ||
					!values['phone'] ||
					!values['status'] ||
					!values['companyField'] ||
					!values['companySubField'] ||
					!values['companyType'] ||
					(values['status'] === 'נשוי' && !values['firstnamePartner']) ||
					(values['status'] === 'נשוי' && !values['lastnamePartner']) ||
					(values['status'] === 'נשוי' && !values['idPartner']) ||
					(values['status'] === 'נשוי' && !values['emailPartner'])
				) {
					swal('!אופס', 'נראה שחסרים כמה פרטים בשלב זה', 'error');
					return false;
				} else {
					return true;
				}
			case 2:
				if (
					(values['companyType'] == 'ltd' && !values['cyear']) ||
					(values['companyType'] == 'cld' && !values['cyear']) ||
					(values['companyType'] == 'cld' && values['companyName'] === '') ||
					(values['companyType'] == 'cld' && !values['companyAddress'] === '')
				) {
					swal('!אופס', 'נראה שחסרים כמה פרטים בשלב זה', 'error');
					return false;
				} else {
					return true;
				}
			case 4:
				if (
					(values['ID'] && !values['ID']) ||
					(values['DRAFT'] && !values['DRAFT']) ||
					(values['CIN'] && !values['CIN']) ||
					(values['PAL3'] && !values['PAL3']) ||
					(values['PAL2'] && !values['PAL2']) ||
					(values['PAL1'] && !values['PAL1']) ||
					(values['PAL'] && !values['PAL']) ||
					(values['ESNA1'] && !values['ESNA1']) ||
					(values['ESNA'] && !values['ESNA']) ||
					(values['MAZ'] && !values['MAZ']) ||
					(values['BTL1'] && !values['BTL1']) ||
					(values['BTL'] && !values['BTL']) ||
					(values['ADC'] && !values['ADC'])
				) {
					swal('!אופס', 'נראה שחסרים כמה פרטים בשלב זה', 'error');
					return false;
				} else {
					return true;
				}
			default:
				return true;
		}
	}

	async function onFormSubmit() {
		var banks = [];
		const data = getValues();
		var formdata = new FormData();
		for (const [key, value] of Object.entries(data)) {
			if (key == 'reasons') {
				formdata.append(key, JSON.stringify(value));
				continue;
			}
			if (key == 'banks') {
				var index = 0;
				value.forEach((element) => {
					banks.push(element['bank']);
					formdata.append(['BAL' + index.toString()], element['BAL' + index.toString()]);
					formdata.append(['BS' + index.toString()], element['BS' + index.toString()]);
					formdata.append(['LD' + index.toString()], element['LD' + index.toString()]);
					index += 1;
				});
				var bankIndex = 0;
				banks.forEach((bank) => {
					formdata.append('bank#' + bankIndex.toString(), bank);
					bankIndex += 1;
				});
				console.log(banks);
				formdata.forEach((element) => {
					console.log(element);
				});
			}
			formdata.append(key, value);
		}
		console.log(formdata);
		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow',
		};
		setFetchActive(true);
		fetch('http://localhost:8000/api/', requestOptions)
			.then((response) => response.status)
			.then((status) => {
				if (status === 200) {
					setFetchActive(false);
					props.setRequest(true);
					props.setID(getValues()['id']);
				} else {
					swal(
						'...משהו לא עובד',
						'נראה שיש אצלנו בעיה ולא ניתן לשלוח את הבקשה. נסו לשלוח שוב',
						'error'
					);
				}
			})
			.catch((error) => {
				// this should be at "on success code"
				setFetchActive(false);
				swal(
					'...משהו לא עובד',
					'נראה שיש אצלנו בעיה ולא ניתן לשלוח את הבקשה. נסו לשלוח שוב',
					'error'
				);
				//this should stay here
				console.log('error', error);
			});

		console.log('submit');
	}

	useEffect(() => {
		console.log(isFetchActive);
	}, [isFetchActive]);

	const animateFoward = (event) => {
		gsap.to(event.target, {
			duration: 0.333,
			backgroundPositionY: '350%',
		});
		gsap.set(event.target, {
			delay: 0.333,
			backgroundPositionY: '-200%',
		});
		gsap.to(event.target, {
			delay: 0.666,
			duration: 0.333,
			backgroundPositionY: '50%',
		});
	};

	const animateBackwards = (event) => {
		gsap.to(event.target, {
			duration: 0.333,
			backgroundPositionY: '-200%',
		});
		gsap.set(event.target, {
			delay: 0.333,
			duration: 0.333,
			backgroundPositionY: '350%',
		});
		gsap.to(event.target, {
			delay: 0.666,
			duration: 0.333,
			backgroundPositionY: '50%',
		});
	};

	return (
		<>
			{isFetchActive && <LoadingScreen />}
			<div className='page-grid'>
				{' '}
				{/* Ishai's code */}
				<Sidenav percent={percent} setPrecent={setPrecent} step={step} setStep={setStep} />
				<div className='page-content--container'>
					{step == 1 ? (
						<PersonalInformation
							register={register}
							resetField={unregister}
							getValues={getValues}
						/>
					) : (
						<React.Fragment />
					)}

					{step == 2 ? (
						<BusinessInformation
							hasWorkers={hasWorkers}
							setHasWorkers={setHasWorkers}
							register={register}
							resetField={unregister}
							getValues={getValues}
						/>
					) : (
						<React.Fragment />
					)}
					{step == 3 ? (
						<LoanInformation
							hasWorkers={hasWorkers}
							register={register}
							resetField={unregister}
							getValues={getValues}
						/>
					) : (
						<React.Fragment />
					)}
					{step == 4 ? (
						<FinancialInformation
							hasWorkers={hasWorkers}
							register={register}
							resetField={unregister}
							getValues={getValues}
						/>
					) : (
						<React.Fragment />
					)}

					<div className='controls-container'>
						{step !== 1 && (
							<button
								className='backBtn'
								onClick={(event) => {
									if (step > 1) {
										animateBackwards(event);
										setStep(step - 1);
										setPrecent(percent - 33);
									}
								}}></button>
						)}
						{step != 4 ? (
							<button
								className='nextBtn'
								onClick={(event) => {
									console.log(getValues());
									const valid = validation(step);
									//validation(step);
									if (valid && step < 4) {
										animateFoward(event);
										setPrecent(percent + 33);
										setStep(step + 1);
									}
								}}></button>
						) : (
							<button
								className='submitBtn'
								onClick={(event) => {
									animateFoward(event);
									onFormSubmit();
								}}></button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Progressbar;
