export default function Copyright() {
	return (
		<>
			<p>&copy; 2020-{new Date().getFullYear()}</p>
			<style jsx>
				{`
					p {
						font-size: 0.75rem;
						text-align: center;
					}
				`}
			</style>
		</>
	);
}
