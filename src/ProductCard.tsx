import { useState } from "react";
import productImg from "./assets/image.png";
import productGif from "./assets/product-gif.gif";
import rotateIcon from "./assets/360 icon.svg";
import closeIcon from "./assets/close icon.svg";
import "./ProductCard.sass";

function ProductCard() {
	const [gif, setGif] = useState(false);

	return (
		<div className="product-card">
			<div
				className="animated-img"
				style={{
					backgroundImage: `url(${gif ? productGif : productImg})`,
					backgroundSize: "contain",
				}}
			>
				<img
					src={gif ? closeIcon : rotateIcon}
					alt="360 icon"
					className="rotate-icon"
					onClick={() => setGif(!gif)}
				/>
			</div>
			<div className="product-info">
				<p className="code">CÓDIGO: 42404</p>
				<h1 className="name">Sofá Margot II - Rosé</h1>
				<p className="price">R$ 4.000</p>
				<button className="btn">aDICIONAR À CESTA</button>
			</div>
		</div>
	);
}

export default ProductCard;
