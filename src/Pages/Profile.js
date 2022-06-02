import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Profile() {
	let navigate = useNavigate();
	let {username} = useParams();
	return (
		<div>
			This is the theprofile page for  {username}!
			<button onClick={()=> {navigate("/about")}}>Change to about Page</button>
		</div>
	);
}

export default Profile;