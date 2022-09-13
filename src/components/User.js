const User = (props) => {
	const data = "Divyanshu";
	return (
		<div>
			<h2>User Name : </h2>
			<input type="text" />
			<button onClick={() => props.alert(data)}>Click Me</button>
		</div>
	);
};

export default User;
