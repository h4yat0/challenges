import clsx from "clsx";
import loading from "../assets/loading.svg";
import humburger from "../assets/humburger.svg";

interface ButtonProps {
	styleName: String;
	mode: String;
}

export function Button(props: ButtonProps) {
	const mode = props.mode;
	const styleName = props.styleName;

	function buttonIcon() {
		if (mode == "LOADING") {
			return <img src={loading} alt='loading icon' className='pt-1 pr-1.5' />;
		} else if (mode == "MOVABLE") {
			return (
				<img src={humburger} alt='hamburger icon' className='pt-1.5 pr-1.5' />
			);
		}
	}

	return (
		<button
			className={clsx(
				" w-full flex whitespace-nowrap text-white text-sm justify-center rounded-3xl px-6 py-3 disabled:opacity-70",
				{
					"border-2 border-white": mode == "FOCUS",
					"cursor-not-allowed": mode == "DISABLED",
					"cursor-wait": mode == "LOADING",
					"cursor-move": mode == "MOVABLE",

					"bg-violet-500": styleName == "PRIMARY",
					"bg-violet-400": styleName == "PRIMARY" && mode == "HOVER",

					"bg-zinc-700": styleName == "SECONDARY",
					"bg-zinc-500": styleName == "SECONDARY" && mode == "HOVER",

					"bg-background": styleName == "TERTIARY",
				}
			)}
			disabled={mode == "DISABLED" ? true : false}
		>
			{buttonIcon()}
			{`${mode} ${styleName}`}
		</button>
	);
}
