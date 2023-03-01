import { PressEvent } from '@react-types/shared';
import Button from './Button';

const handlePress = (e: PressEvent) => console.log('button pressed', e.target.textContent);

const App = () => {
	return (
		<div className="p-4">
			<h1 className="mb-5 text-4xl">Playground: React Aria + Tailwindcss</h1>
			<div className="uppercase">primary</div>
			<div className="flex space-x-2.5">
				<div>
					<Button size="small" leadingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="small" trailingIcon isDisabled onPress={handlePress}>
						Disabled
					</Button>
				</div>
				<div>
					<Button leadingIcon trailingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button isDisabled onPress={handlePress}>
						Disabled
					</Button>
				</div>
				<div>
					<Button size="large" trailingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="large" isDisabled onPress={handlePress}>
						Disabled
					</Button>
				</div>
			</div>

			<div className="uppercase">outlined</div>
			<div className="flex space-x-2.5">
				<div>
					<Button size="small" style="outlined" leadingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button
						size="small"
						style="outlined"
						isDisabled
						leadingIcon
						trailingIcon
						onPress={handlePress}
					>
						Disabled
					</Button>
				</div>
				<div>
					<Button style="outlined" leadingIcon trailingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button style="outlined" isDisabled onPress={handlePress}>
						Disabled
					</Button>
				</div>
				<div>
					<Button size="large" style="outlined" leadingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="large" style="outlined" isDisabled onPress={handlePress}>
						Disabled
					</Button>
				</div>
			</div>

			<div className="uppercase">error</div>
			<div className="flex space-x-2.5">
				<div>
					<Button size="small" style="error" trailingIcon onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="small" style="error" isDisabled leadingIcon onPress={handlePress}>
						Disabled
					</Button>
				</div>
				<div>
					<Button style="error" onPress={handlePress}>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button style="error" isDisabled leadingIcon trailingIcon onPress={handlePress}>
						Disabled
					</Button>
				</div>
				<div>
					<Button size="large" style="error" onPress={handlePress} leadingIcon trailingIcon>
						Lorem Ipsum
					</Button>
				</div>
				<div>
					<Button size="large" style="error" isDisabled onPress={handlePress}>
						Disabled
					</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
