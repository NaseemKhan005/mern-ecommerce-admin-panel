import { useLocation } from "react-router-dom";

const NewProduct = () => {
	const { pathname } = useLocation();

	return (
		<section className="py-5 w-full flex flex-col gap-4 bg-white shadow-lg shadow-slate-400/5 bg-orange-500/10 rounded-lg">
			<div className="px-5">
				<h2 className="font-semibold text-lg">
					{pathname.includes("new") ? "Add New Product" : "Edit Product"}
				</h2>
			</div>
		</section>
	);
};

export default NewProduct;
