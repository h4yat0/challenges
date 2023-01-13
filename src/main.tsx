import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductCard from "./components/ProductCard/ProductCard";
import "./index.sass";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ProductCard />
	</React.StrictMode>
);
