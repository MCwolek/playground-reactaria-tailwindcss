import Button from './Button';

const App = () => {
	return (
		<div className="p-4">
			<h1 className="mb-5 text-4xl">Playground: React Aria + Tailwindcss</h1>
			<div className="uppercase">primary</div>
			<div className="flex space-x-2.5">
				<div>
					<Button size="small">Lorem Ipsum</Button>
				</div>
				<div>
					<Button size="small" isDisabled>
						Disabled
					</Button>
				</div>
				<div>
					<Button>Lorem Ipsum</Button>
				</div>
				<div>
					<Button isDisabled>Disabled</Button>
				</div>
				<div>
					<Button size="large">Lorem Ipsum</Button>
				</div>
				<div>
					<Button size="large" isDisabled>
						Disabled
					</Button>
				</div>
			</div>

			<div className="uppercase">outlined</div>
			<div className="flex space-x-2.5">
				<div>
					<Button size="small" style="outlined">
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="small" style="outlined" isDisabled>
						Disabled
					</Button>
				</div>
				<div>
					<Button style="outlined">Lorem Ipsum</Button>
				</div>
				<div>
					<Button style="outlined" isDisabled>
						Disabled
					</Button>
				</div>
				<div>
					<Button size="large" style="outlined">
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="large" style="outlined" isDisabled>
						Disabled
					</Button>
				</div>
			</div>

			<div className="uppercase">error</div>
			<div className="flex space-x-2.5">
				<div>
					<Button size="small" style="error">
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="small" style="error" isDisabled>
						Disabled
					</Button>
				</div>
				<div>
					<Button
						style="error"
						onPress={(e) => console.log('button clicked', e.target.textContent)}
					>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button style="error" isDisabled>
						Disabled
					</Button>
				</div>
				<div>
					<Button size="large" style="error">
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="large" style="error" isDisabled>
						Disabled
					</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
