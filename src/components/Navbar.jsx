import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
				<div className="flex items-center gap-1 text-3xl font-black tracking-tighter">
					<span className="ml-1 text-2xl">
						<span className="text-blue-600">Inno</span>
						<span className="text-orange-500">Web</span>
						<span className="text-blue-600">iX</span>
					</span>
				</div>

				<div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-sm uppercase tracking-wider">
					<Link to="/" className="hover:text-orange-400 transition">
						Home
					</Link>
					<Link
						to="/services"
						className="hover:text-orange-400 transition"
					>
						Services
					</Link>
					<Link
						to="/work"
						className="hover:text-orange-400 transition"
					>
						Work
					</Link>
					<Link
						to="/process"
						className="hover:text-orange-400 transition"
					>
						Process
					</Link>
					<Link
						to="/contact"
						className="hover:text-orange-400 transition"
					>
						Contact
					</Link>
				</div>

				<button
					className="md:hidden text-white p-2"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? (
						<XMarkIcon className="w-7 h-7" />
					) : (
						<Bars3Icon className="w-7 h-7" />
					)}
				</button>
			</div>

			{mobileMenuOpen && (
				<div className="md:hidden bg-black/95 border-b border-white/10 px-4 py-6 space-y-5 text-base">
					<Link
						to="/"
						onClick={() => setMobileMenuOpen(false)}
						className="block hover:text-orange-400"
					>
						Home
					</Link>
					<Link
						to="/services"
						onClick={() => setMobileMenuOpen(false)}
						className="block hover:text-orange-400"
					>
						Services
					</Link>
					<Link
						to="/work"
						onClick={() => setMobileMenuOpen(false)}
						className="block hover:text-orange-400"
					>
						Work
					</Link>
					<Link
						to="/process"
						onClick={() => setMobileMenuOpen(false)}
						className="block hover:text-orange-400"
					>
						Process
					</Link>
					<Link
						to="/contact"
						onClick={() => setMobileMenuOpen(false)}
						className="block hover:text-orange-400"
					>
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
