import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY:'Scroll', border:'1px light green', height:'500px'}}>
			{props.children}

		</div>
		);
};




export default Scroll;