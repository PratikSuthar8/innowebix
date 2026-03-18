/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Work() {
	const projects = [
		{
			title: "E-Commerce Platform",
			client: "ShopSphere",
			desc: "Modern Shopify + React store with 98% conversion rate",
		},
		{
			title: "SaaS Dashboard",
			client: "FlowMetrics",
			desc: "Real-time analytics platform used by 12k+ users",
		},
		{
			title: "Fintech Mobile App",
			client: "PayVista",
			desc: "Secure banking app with 4.9★ rating",
		},
		{
			title: "Creative Agency Site",
			client: "DesignHub",
			desc: "3D portfolio with Framer Motion & Three.js",
		},
		{
			title: "AI Productivity Tool",
			client: "NexusAI",
			desc: "Smart assistant used by 8 enterprise clients",
		},
		{
			title: "Portfolio Platform",
			client: "Creators.co",
			desc: "Showcase platform for 500+ designers",
		},
	];

	return (
		<div className="pt-32 pb-20 bg-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold">Selected Work</h1>
					<p className="mt-4 text-xl text-zinc-400">
						Projects that define our craft
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-10">
					{projects.map((p, i) => (
						<motion.div
							key={i}
							className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition group"
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
						>
							<div className="h-80 bg-gradient-to-br from-orange-500/20 to-blue-600/20 flex items-center justify-center">
								<div className="text-8xl opacity-10">
									{p.title[0]}
								</div>
							</div>
							<div className="p-8">
								<h3 className="text-3xl font-bold mb-2">
									{p.title}
								</h3>
								<p className="text-orange-400 mb-3">
									Client: {p.client}
								</p>
								<p className="text-zinc-400">{p.desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Work;
