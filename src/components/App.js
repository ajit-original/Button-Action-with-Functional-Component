import React, {useState} from "react";
import "./../styles/App.css";
function App() {
	const [showPara, setShowPara] = useState(false);
	const handleClick = () => {
		setShowPara(true);
	}
 	return (
 		<div id="main">
			{
			showPara ?
			 <p id="para">
			 	Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
			 </p>
			 : null
			}
 			<button onClick={handleClick} id="click"></button>
 		</div>
 	);
}
 
export default App;
