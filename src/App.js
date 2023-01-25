import React, { useState } from 'react';
import Finish from './components/Finish';
import Progressbar from './components/progressBar';
function App() {
	const [request, setRequest] = useState(false);
	const [serverRes, setServerRes] = useState('');
	const [id, setID] = useState(0);
	return (
		<div>
			{request && <Finish setRequest={setRequest} id={id} />}
			<Progressbar setRequest={setRequest} setServerRes={setServerRes} setID={setID} />
		</div>
	);
}

export default App;
