import { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { ReactComponent as CartLg } from './assets/images/cart-lg.svg';
import { ReactComponent as CartMd } from './assets/images/cart-md.svg';
import { ReactComponent as CartSm } from './assets/images/cart-sm.svg';

interface Props extends AriaButtonProps<'button'> {
	size?: 'small' | 'medium' | 'large';
	style?: 'primary' | 'outlined' | 'error';
	leadingIcon?: boolean;
	trailingIcon?: boolean;
}

const Button = ({
	size = 'medium',
	style = 'primary',
	leadingIcon,
	trailingIcon,
	children,
	...rest
}: Props) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton({ ...rest, children }, buttonRef);

	if (style === 'primary') {
		if (size === 'small') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-1.5 rounded-md bg-webridge-dark-gray py-1.5 px-2.5 text-xs text-webridge-light-gray outline-none hover:border-b hover:border-b-black hover:bg-webridge-dark-gray/[.85] focus:border focus:border-b-2 focus:border-webridge-green active:border active:border-b-2 active:border-webridge-green disabled:bg-webridge-dark-gray/[.35] disabled:hover:border-none disabled:active:border-none"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && <CartSm className="inline fill-webridge-light-gray" />}
					<span>{children}</span>
					{trailingIcon && <CartSm className="inline fill-webridge-light-gray" />}
				</button>
			);
		}

		if (size === 'medium') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-lg bg-webridge-dark-gray pt-2.5 pb-2.5 pr-4 pl-4 text-sm text-webridge-light-gray outline-none hover:border-b-3 hover:border-b-black hover:bg-webridge-dark-gray/[.85] focus:border focus:border-b-3 focus:border-webridge-green active:border active:border-b-3 active:border-webridge-green disabled:bg-webridge-dark-gray/[.35] disabled:hover:border-none disabled:active:border-none"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && <CartMd className="inline fill-webridge-light-gray" />}
					<span>{children}</span>
					{trailingIcon && <CartMd className="inline fill-webridge-light-gray" />}
				</button>
			);
		}

		if (size === 'large') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-xl bg-webridge-dark-gray pt-4 pb-4 pr-5 pl-5 text-lg text-webridge-light-gray outline-none hover:border-b-4 hover:border-b-black hover:bg-webridge-dark-gray/[.85] focus:border focus:border-b-4 focus:border-webridge-green active:border-b-4 active:border-webridge-green disabled:bg-webridge-dark-gray/[.35] disabled:hover:border-none disabled:active:border-none"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && <CartLg className="inline fill-webridge-light-gray" />}
					<span>{children}</span>
					{trailingIcon && <CartLg className="inline fill-webridge-light-gray" />}
				</button>
			);
		}

		return <></>;
	}

	if (style === 'outlined') {
		if (size === 'small') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-md border border-webridge-dark-gray py-1.5 px-2.5 text-xs text-webridge-dark-gray outline-none hover:border hover:border-b-webridge-dark-gray hover:bg-webridge-dark-gray/[.85] hover:text-webridge-light-gray focus:border focus:border-b-2 focus:border-webridge-green focus:bg-webridge-dark-gray/[.85] focus:text-webridge-light-gray active:border active:border-b-2 active:border-webridge-green active:bg-webridge-dark-gray/[.85] active:text-webridge-light-gray disabled:opacity-35 disabled:hover:border disabled:hover:bg-transparent disabled:hover:text-webridge-dark-gray disabled:focus:border-b disabled:focus:border-webridge-dark-gray disabled:focus:bg-transparent disabled:focus:text-webridge-dark-gray disabled:active:border disabled:active:border-b disabled:active:border-webridge-dark-gray disabled:active:bg-transparent disabled:active:text-webridge-dark-gray"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && (
						<CartSm className="inline fill-webridge-dark-gray group-hover:fill-webridge-light-gray group-focus:fill-webridge-light-gray group-active:fill-webridge-light-gray group-disabled:fill-webridge-dark-gray" />
					)}
					<span>{children}</span>
					{trailingIcon && (
						<CartSm className="inline fill-webridge-dark-gray group-hover:fill-webridge-light-gray group-focus:fill-webridge-light-gray group-active:fill-webridge-light-gray group-disabled:fill-webridge-dark-gray" />
					)}
				</button>
			);
		}

		if (size === 'medium') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-lg border border-webridge-dark-gray px-4 py-2.5 text-sm text-webridge-dark-gray outline-none hover:border hover:border-b-webridge-dark-gray hover:bg-webridge-dark-gray/[.85] hover:text-webridge-light-gray focus:border focus:border-b-3 focus:border-webridge-green focus:bg-webridge-dark-gray/[.85] focus:text-webridge-light-gray active:border active:border-b-3 active:border-webridge-green active:bg-webridge-dark-gray/[.85] active:text-webridge-light-gray disabled:opacity-35 disabled:hover:border disabled:hover:bg-transparent disabled:hover:text-webridge-dark-gray disabled:focus:border-b disabled:focus:border-webridge-dark-gray disabled:focus:bg-transparent disabled:focus:text-webridge-dark-gray disabled:active:border disabled:active:border-b disabled:active:border-webridge-dark-gray disabled:active:bg-transparent disabled:active:text-webridge-dark-gray"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && (
						<CartMd className="inline fill-webridge-dark-gray group-hover:fill-webridge-light-gray group-focus:fill-webridge-light-gray group-active:fill-webridge-light-gray group-disabled:fill-webridge-dark-gray" />
					)}
					<span>{children}</span>
					{trailingIcon && (
						<CartMd className="inline fill-webridge-dark-gray group-hover:fill-webridge-light-gray group-focus:fill-webridge-light-gray group-active:fill-webridge-light-gray group-disabled:fill-webridge-dark-gray" />
					)}
				</button>
			);
		}

		if (size === 'large') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-xl border border-webridge-dark-gray py-4 px-5 text-lg text-webridge-dark-gray outline-none hover:border-2 hover:bg-webridge-dark-gray/[.85] hover:text-webridge-light-gray focus:border focus:border-b-4 focus:border-webridge-green focus:bg-webridge-dark-gray/[.85] focus:text-webridge-light-gray active:border active:border-b-4 active:border-webridge-green active:bg-webridge-dark-gray/[.85] active:text-webridge-light-gray disabled:opacity-35 disabled:hover:border disabled:hover:bg-transparent disabled:hover:text-webridge-dark-gray disabled:focus:border-b disabled:focus:border-webridge-dark-gray disabled:focus:bg-transparent disabled:focus:text-webridge-dark-gray disabled:active:border disabled:active:border-b disabled:active:border-webridge-dark-gray disabled:active:bg-transparent disabled:active:text-webridge-dark-gray"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && (
						<CartLg className="inline fill-webridge-dark-gray group-hover:fill-webridge-light-gray group-focus:fill-webridge-light-gray group-active:fill-webridge-light-gray group-disabled:fill-webridge-dark-gray" />
					)}
					<span>{children}</span>
					{trailingIcon && (
						<CartLg className="inline fill-webridge-dark-gray group-hover:fill-webridge-light-gray group-focus:fill-webridge-light-gray group-active:fill-webridge-light-gray group-disabled:fill-webridge-dark-gray" />
					)}
				</button>
			);
		}

		return <></>;
	}

	if (style === 'error') {
		if (size === 'small') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-1.5 rounded-md bg-webridge-error py-1.5 px-2.5 text-xs text-webridge-light-gray outline-none hover:border-b-2 hover:border-b-webridge-error-border hover:bg-webridge-error/75 focus:border focus:border-b-2 focus:border-webridge-dark-gray focus:bg-webridge-error/75 active:border active:border-b-2 active:border-webridge-dark-gray active:bg-webridge-error/75 disabled:opacity-35 disabled:hover:border-none disabled:hover:bg-webridge-error disabled:focus:border-none disabled:focus:bg-webridge-error disabled:active:border-none disabled:active:bg-webridge-error"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && <CartSm className="inline fill-webridge-light-gray" />}
					<span>{children}</span>
					{trailingIcon && <CartSm className="inline fill-webridge-light-gray" />}
				</button>
			);
		}

		if (size === 'medium') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-lg bg-webridge-error px-4 py-2.5 text-sm text-webridge-light-gray outline-none hover:border-b-3 hover:border-b-webridge-error-border hover:bg-webridge-error/75 focus:border focus:border-b-3 focus:border-webridge-dark-gray focus:bg-webridge-error/75 active:border active:border-b-3 active:border-webridge-dark-gray active:bg-webridge-error/75 disabled:opacity-35 disabled:hover:border-none disabled:hover:bg-webridge-error disabled:focus:border-none disabled:focus:bg-webridge-error disabled:active:border-none disabled:active:bg-webridge-error"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && <CartMd className="inline fill-webridge-light-gray" />}
					<span>{children}</span>
					{trailingIcon && <CartMd className="inline fill-webridge-light-gray" />}
				</button>
			);
		}

		if (size === 'large') {
			return (
				<button
					className="group grid grid-flow-col items-center gap-2.5 rounded-xl bg-webridge-error py-4 px-5 text-lg text-webridge-light-gray outline-none hover:border-b-4 hover:border-webridge-error-border hover:bg-webridge-error/75 focus:border focus:border-b-4 focus:border-webridge-dark-gray focus:bg-webridge-error/75 active:border active:border-b-4 active:border-webridge-dark-gray active:bg-webridge-error/75 disabled:opacity-35 disabled:hover:border-none disabled:hover:bg-webridge-error disabled:focus:border-none disabled:focus:bg-webridge-error disabled:active:border-none disabled:active:bg-webridge-error"
					{...buttonProps}
					ref={buttonRef}
				>
					{leadingIcon && <CartLg className="inline fill-webridge-light-gray" />}
					<span>{children}</span>
					{trailingIcon && <CartLg className="inline fill-webridge-light-gray" />}
				</button>
			);
		}

		return <></>;
	}

	return <></>;
};

export default Button;
