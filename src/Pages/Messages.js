import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

import Conversations from "./Converstions";
import Chats from "./Chats";

function Messages(props) {
	return (
		<div>
			This is the  Messages Page
			<div>
				<Conversations />

				<Routes>
					<Route path=":id" element={<Chats />} />
				</Routes>
			</div>
		</div>
	);
}

export default Messages;