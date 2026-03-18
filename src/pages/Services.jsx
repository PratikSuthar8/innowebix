/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services() {
	const services = [
		{
			icon: "💻",
			title: "Web Development",
			desc: "Custom React, Next.js & Node.js applications with clean architecture.",
		},
		{
			icon: "🎨",
			title: "UI/UX Design",
			desc: "Modern, user-centered designs that convert and delight.",
		},
		{
			icon: "📱",
			title: "Responsive Design",
			desc: "Pixel-perfect experiences on every device and screen size.",
		},
		{
			icon: "⚡",
			title: "Performance Optimization",
			desc: "Blazing-fast websites with 95+ Lighthouse scores.",
		},
		{
			icon: "🔍",
			title: "SEO & Analytics",
			desc: "Get found on Google and grow with data-driven insights.",
		},
		{
			icon: "🚀",
			title: "Launch & Support",
			desc: "Smooth deployment and ongoing maintenance.",
		},
	];

	return (
		<div className="pt-32 pb-20 bg-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold">Our Services</h1>
					<p className="mt-4 text-xl text-zinc-400">
						Everything you need to succeed online
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, i) => (
						<motion.div
							key={i}
							className="bg-zinc-950 border border-white/10 p-10 rounded-3xl hover:border-orange-500/50 transition group"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
						>
							<div className="text-6xl mb-6">{service.icon}</div>
							<h3 className="text-3xl font-bold mb-4 text-orange-400">
								{service.title}
							</h3>
							<p className="text-zinc-400 text-lg">
								{service.desc}
							</p>
						</motion.div>
					))}
				</div>

				<div className="text-center mt-16">
					<Link
						to="/contact"
						className="inline-block bg-orange-500 text-black px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-orange-400 transition"
					>
						Start Your Project →
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Services;
