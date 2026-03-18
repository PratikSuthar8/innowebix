/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Process() {
	const steps = [
		{
			num: "01",
			title: "Discovery & Strategy",
			desc: "Deep dive into your goals, audience, and competitors",
		},
		{
			num: "02",
			title: "Wireframing & Design",
			desc: "User flows, wireframes, and high-fidelity mockups",
		},
		{
			num: "03",
			title: "Development",
			desc: "Clean, performant code using latest technologies",
		},
		{
			num: "04",
			title: "Testing & QA",
			desc: "Rigorous cross-device and performance testing",
		},
		{
			num: "05",
			title: "Launch",
			desc: "Smooth deployment and go-live support",
		},
		{
			num: "06",
			title: "Growth & Support",
			desc: "Post-launch analytics, SEO, and ongoing improvements",
		},
	];

	return (
		<div className="pt-32 pb-20 bg-black">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold">Our Process</h1>
					<p className="mt-4 text-xl text-zinc-400">
						6 steps. Proven results.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{steps.map((step, i) => (
						<motion.div
							key={i}
							className="relative bg-zinc-900 p-10 rounded-3xl border border-white/10 hover:border-orange-500/50 transition"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
						>
							<div className="text-7xl font-black text-orange-500/20 absolute -top-6 -left-4">
								{step.num}
							</div>
							<h3 className="text-3xl font-bold mb-6">
								{step.title}
							</h3>
							<p className="text-zinc-400 text-lg">{step.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Process;
