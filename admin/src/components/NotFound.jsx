import { Link, useNavigate } from "react-router-dom";

import { IoInformationOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";

const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<section className="bg-white dark:bg-blue-600 z-[1000] fixed top-0 left-0 w-full h-screen">
			<div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
				<div className="flex flex-col items-center max-w-sm mx-auto text-center">
					<p className="p-2 text-3xl font-medium text-blue-600 rounded-full bg-blue-600/5 dark:bg-blue-600">
						<IoInformationOutline />
					</p>
					<h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
						Page not found
					</h1>
					<p className="mt-4 text-gray-500 dark:text-gray-400">
						The page you are looking for doesn&apos;t exist. Here are some
						helpful links:
					</p>
					<div className="flex md:items-center flex-col md:flex-row w-full mt-6 gap-x-3 shrink-0 gap-2.5">
						<button
							onClick={() => navigate(-1)}
							className="flex items-center justify-center md:w-1/2 px-6 py-3.5 text-sm text-blue-600 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600/5 dark:hover:bg-blue-600/5 w-full"
						>
							<BsArrowLeft className="text-lg" />
							<span>Go back</span>
						</button>

						<Link
							to={"/"}
							className="w-full md:w-1/2 px-6 py-3.5 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-600 rounded-lg shrink-0 sm:w-auto hover:bg-blue-500"
						>
							Take me home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageNotFound;
