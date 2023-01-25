import React, { useState } from 'react';
import { Slider } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './personalInfo.scss';

function PersonalInformation(props) {
	const values = props.getValues();
	const [selected, setSelected] = useState((props.getValues()['companyType'] ??= 'male'));

	function valuetext(value) {
		console.log(value);
		return value;
	}

	return (
		<div className="grid-information--container">
			<form className='form'>
				<h2 className='page-title'>פרטים אישיים של הלקוח</h2>
				<h5 className='sub-title'>
					לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ
					כלרשט מיחוצים.
				</h5>
				<div className='form-group'>
					<label htmlFor='first' className='inpt'>
						שם פרטי{' '}
					</label>
					<input
						value={values['firstname'] || ''}
						onChange={(event) => {
							props.resetField('firstname');
							props.register('firstname', { value: event.target.value });
						}}
						required={true}
						type='text'
						className='form-control-option'
						placeholder=''
						name='first'
						id='first'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='last' className='inpt'>
						שם משפחה
					</label>
					<input
						value={values['lastname'] || ''}
						onChange={(event) => {
							props.resetField('lastname');
							props.register('lastname', { value: event.target.value });
						}}
						required={true}
						type='text'
						className='form-control-option'
						placeholder=''
						name='last'
						id='last'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='id' className='inpt'>
						תעודת זהות
					</label>
					<input
						value={values['id'] || ''}
						onChange={(event) => {
							props.resetField('id');
							props.register('id', { value: event.target.value });
						}}
						required={true}
						type='text'
						className='form-control-option'
						placeholder=''
						name='id'
						id='id'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='dob' className='inpt'>
						תאריך לידה
					</label>
					<input
						lang='iw-IL'
						value={values['bdate'] || ''}
						onChange={(event) => {
							props.resetField('bdate');
							props.register('bdate', { value: event.target.value });
						}}
						required={true}
						type='date'
						className='form-control-option'
						name='dob'
						id='dob'
						placeholder=''
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='phone' className='inpt'>
						טלפון <strong>נייד</strong>
					</label>
					<input
						value={values['phone'] || ''}
						onChange={(event) => {
							props.resetField('phone');
							props.register('phone', { value: event.target.value });
						}}
						required={true}
						type='tel'
						className='form-control-option'
						id='phone'
						name='phone'
						placeholder='phone'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='last' className='inpt'>
						אימייל
					</label>
					<input
						value={values['email'] || ''}
						onChange={(event) => {
							props.resetField('email');
							props.register('email', { value: event.target.value });
						}}
						required={true}
						type='email'
						className='form-control-option'
						placeholder='youremail@exsample.com'
						name='email'
						id='email'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='landline' className='inpt'>
						טלפון <strong>נייח</strong> <em>(אופציונלי)</em>
					</label>
					<input
						value={values['landline'] || ''}
						onChange={(event) => {
							props.resetField('landline');
							props.register('landline', { value: event.target.value });
						}}
						type='tel'
						className='form-control-option'
						placeholder=''
						name='landline'
						id='landline'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='fax' className='inpt'>
						מספר פקס <em>(אופציונלי)</em>
					</label>
					<input
						value={values['fax'] || ''}
						onChange={(event) => {
							props.resetField('fax');
							props.register('fax', { value: event.target.value });
						}}
						type='tel'
						className='form-control-option'
						placeholder=''
						name='fax'
						id='fax'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='city' className='inpt'>
						עיר מגורים
					</label>
					<input
						value={values['city'] || ''}
						onChange={(event) => {
							props.resetField('city');
							props.register('city', { value: event.target.value });
						}}
						required={true}
						type='text'
						className='form-control-option'
						placeholder=''
						name='city'
						id='city'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='street' className='inpt'>
						רחוב
					</label>
					<input
						value={values['street'] || ''}
						onChange={(event) => {
							props.resetField('street');
							props.register('street', { value: event.target.value });
						}}
						required={true}
						type='address'
						className='form-control-option'
						name='street'
						id='street'
						placeholder=''
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='houseNumber' className='inpt'>
						מספר בית
					</label>
					<input
						value={values['houseNumber'] || ''}
						onChange={(event) => {
							props.resetField('houseNumber');
							props.register('houseNumber', { value: event.target.value });
						}}
						required={true}
						type='number'
						className='form-control-option'
						name='houseNumber'
						id='houseNumber'
						placeholder=''
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='Status' className='inpt'>
						סטטוס משפחתי
					</label>
					<select
						className='form-select'
						required={true}
						onChange={(event) => {
							props.resetField('status');
							props.resetField('lastnamePartner');
							props.resetField('firstnamePartner');
							props.resetField('idPartner');
							props.resetField('idPartner');
							props.resetField('emailPartner');
							props.register('status', { value: event.target.value });
						}}
						id='Status'
						value={values['status'] || ''}
						name='Status'>
						<option value='רווק'>רווק</option>
						<option value='נשוי'>נשוי</option>
						<option value='ידוע בציבור'>ידוע בציבור</option>
						<option value='גרוש'>גרוש</option>
						<option value='אלמן'>אלמן</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='children' className='inpt'>
						מספר ילדים
					</label>
					<Slider
						aria-label='children'
						defaultValue={0}
						valueLabelDisplay='auto'
						value={values['children'] || ''}
						getAriaValueText={(value) => value}
						onChange={(event) => {
							props.resetField('children');
							props.register('children', { value: event.target.value });
						}}
						// step={14}
						name='children'
						id='children'
						marks
						min={0}
						max={15}
					/>
				</div>
				<div className='form-group radioBtns'>
					<label className='inpt'>מין</label>
					<div className='type-container'>
						<div className='type'>
							<input
								onChange={(event) => {
									setSelected('male');
									props.resetField('gender');
									props.register('gender', { value: 'male' });
								}}
								checked={props.getValues()['gender'] ? props.getValues()['gender'] === 'male' : selected == 'male'}
								className='form-check-input'
								type='radio'
								name='male'
								id='male'
							/>
							<label className='form-check-label' htmlFor='male'>
								זכר
							</label>
						</div>
						<div className='type'>
							<input
								className='form-check-input type'
								type='radio'
								name='female'
								id='female'
								onChange={(event) => {
									setSelected('female');
									props.resetField('gender');
									props.register('gender', { value: 'female' });
								}}
								checked={props.getValues()['gender'] ? props.getValues()['gender'] === 'female' : selected == 'female'}
							/>
							<label className='form-check-label type' htmlFor='female'>
								נקבה
							</label>{' '}
						</div>
					</div>
				</div>

				{props.getValues()['status'] == 'נשוי' && (
					<>
						<div className='form-group'>
							<label htmlFor='first' className='inpt'>
								שם פרטי של בן/ בת הזוג
							</label>
							<input
								value={values['firstnamePartner'] || ''}
								onChange={(event) => {
									console.log('shalev' + event.target.value);
									props.resetField('firstnamePartner');
									props.register('firstnamePartner', {
										value: event.target.value,
									});
								}}
								required={true}
								type='text'
								className='form-control-option'
								placeholder=''
								name='first'
								id='first'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='lastPartner' className='inpt'>
								שם משפחה של בן או בת הזוג
							</label>
							<input
								value={values['lastnamePartner'] || ''}
								onChange={(event) => {
									props.resetField('lastnamePartner');
									props.register('lastnamePartner', {
										value: event.target.value,
									});
								}}
								required={true}
								type='text'
								className='form-control-option'
								placeholder=''
								name='lastPartner'
								id='lastPartner'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='idPartner' className='inpt'>
								תעודת זהות של בן או בת הזוג
							</label>
							<input
								value={values['idPartner'] || ''}
								onChange={(event) => {
									props.resetField('idPartner');
									props.register('idPartner', { value: event.target.value });
								}}
								required={true}
								type='text'
								className='form-control-option'
								placeholder=''
								name='idPartner'
								id='idPartner'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='emailPartner' className='inpt'>
								אימייל בן/ בת זוג
							</label>
							<input
								value={values['emailPartner'] || ''}
								onChange={(event) => {
									props.resetField('emailPartner');
									props.register('emailPartner', { value: event.target.value });
								}}
								required={true}
								type='email'
								className='form-control-option'
								placeholder='youremail@exsample.com'
								name='emailPartner'
								id='emailPartner'
							/>
						</div>
					</>
				)}
			</form>
		</div>
	);
}

export default PersonalInformation;
