import { Button } from "./Button";
import CursorDefault from "../assets/Cursor.svg";
import cursorNotAllowed from "../assets/cursorNotAllowed.svg";
import cursorWait from "../assets/cursorWait.svg";
import cursorMove from "../assets/cursorMove.svg";

export function ButtonGrid() {
	const buttonStyles = ["PRIMARY", "SECONDARY", "TERTIARY"];

	const buttonModes = [
		"DEDFAULT",
		"HOVER",
		"FOCUS",
		"DISABLED",
		"LOADING",
		"MOVABLE",
	];

	function cursor(buttonMode: String) {
		let cursor = CursorDefault;
		if (buttonMode == "DISABLED") {
			cursor = cursorNotAllowed;
		} else if (buttonMode == "LOADING") {
			cursor = cursorWait;
		} else if (buttonMode == "MOVABLE") {
			cursor = cursorMove;
		}
		return <img src={cursor} alt='cursor default' className='px-6 py-3' />;
	}

	return (
		<div className='rounded-lg mt-16 pb-2 pr-1 bg-grid'>
			<table className='table-auto'>
				<thead>
					<tr>
						<th></th>
						<th className='font-roboto text-xs font-normal text-white px-4 p-5'>
							BOTÃO PRIMÁRIO
						</th>
						<th className='font-roboto text-xs font-normal text-white px-4 p-5'>
							BOTÃO SECUNDÁRIO
						</th>
						<th className='font-roboto text-xs font-normal text-white px-4 p-5'>
							BOTÃO TERCIÁRIO
						</th>
						<th className='font-roboto text-xs font-normal text-white px-4 p-5'>
							CURSOR
						</th>
					</tr>
				</thead>
				<tbody>
					{buttonModes.map((buttonMode) => {
						return (
							<tr key={buttonMode} className='text-center'>
								<td className='font-roboto text-xs font-normal text-white py-5 px-5'>
									{buttonMode}
								</td>
								{buttonStyles.map((buttonStyle) => {
									return (
										<td
											key={`${buttonMode}${buttonStyle}`}
											className='px-5 py-4 bg-background'
										>
											<Button styleName={buttonStyle} mode={buttonMode} />
										</td>
									);
								})}
								<td className='flex justify-center items-center px-5 py-5 bg-background'>
									{cursor(buttonMode)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
