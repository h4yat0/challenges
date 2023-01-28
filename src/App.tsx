import { ButtonGrid } from "./components/ButtonGrid";
import { ButtonTestSideBar } from "./components/ButtonTestSideBar";

function App() {
	return (
		<div className='w-full flex justify-between'>
			<div className='px-16 pt-14 mx-2 col-span-4'>
				<h1 className='font-inter font-bold text-2xl text-white leading-tight'>
					Tipos de botão
				</h1>
				<p className='font-roboto text-white leading-tight'>
					Dentro de um layout, botões servem para destacar ações importantes a
					serem tomadas. <br /> Acompanhe abaixo um exemplo de tipos e
					propriedades.
				</p>
				<ButtonGrid />
			</div>
			<ButtonTestSideBar />
		</div>
	);
}

export default App;
