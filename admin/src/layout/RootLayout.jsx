import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RootLayout = ({ children }) => {
	return (
		<div className="pl-[17rem] 2xl:pl-72">
			<Sidebar />
			<div className="p-3 flex flex-col gap-3">
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default RootLayout;
