import { Button } from "./Button";

export function ButtonTestSideBar() {
	const buttonModes = [
		"DEDFAULT",
		"HOVER",
		"FOCUS",
		"DISABLED",
		"LOADING",
		"MOVABLE",
	];

	function buttonMode() {
		return buttonModes[
			Math.floor(Math.random() * (buttonModes.length - 0) + 0)
		];
	}

	return (
		<div className='bg-testeBackground h-screen pt-16 px-10 max-w-sm col-span-1'>
			<h1 className='font-inter font-bold text-2xl text-white leading-tight'>
				Teste os botões
			</h1>
			<p className='font-roboto text-white leading-tight'>
				Interaja com os botões e observe a mudança de aparência e de cursores
			</p>
			<div className='flex flex-col items-center gap-3 mt-6'>
				<Button styleName={"PRIMARY"} mode={buttonMode()} />
				<Button styleName={"SECONDARY"} mode={buttonMode()} />
				<Button styleName={"TERTIARY"} mode={buttonMode()} />
			</div>
		</div>
	);
}
