/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowRightIcon,
	CodeBracketIcon,
	PaintBrushIcon,
	DevicePhoneMobileIcon,
	ChartBarIcon,
	RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
	const [hoveredProject, setHoveredProject] = useState(null);

	const { scrollY } = useScroll();
	const heroY = useTransform(scrollY, [0, 1200], [0, -50]);
	const servicesY = useTransform(scrollY, [300, 1400], [0, -30]);
	const projectsY = useTransform(scrollY, [800, 2000], [0, -40]);
	const processY = useTransform(scrollY, [1400, 2600], [0, -35]);
	const ctaY = useTransform(scrollY, [2200, 3200], [0, -50]);

	const heroTitleRef = useRef(null);
	const heroDescRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				heroTitleRef.current.querySelectorAll("span"),
				{ opacity: 0, y: 40, scale: 0.92, filter: "blur(8px)" },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					filter: "blur(0px)",
					duration: 1.4,
					stagger: 0.06,
					ease: "power3.out",
					scrollTrigger: {
						trigger: heroTitleRef.current,
						start: "top 85%",
					},
				},
			);
			gsap.from(heroDescRef.current, {
				opacity: 0,
				y: 60,
				duration: 1.2,
				ease: "power3.out",
				delay: 0.4,
				scrollTrigger: {
					trigger: heroDescRef.current,
					start: "top 85%",
				},
			});
		});
		return () => ctx.revert();
	}, []);

	const services = [
		{
			icon: CodeBracketIcon,
			title: "Web Development",
			desc: "Custom React • Next.js • Node.js solutions with clean, scalable code.",
		},
		{
			icon: PaintBrushIcon,
			title: "UI/UX Design",
			desc: "Modern, user-centered interfaces that convert and delight.",
		},
		{
			icon: DevicePhoneMobileIcon,
			title: "Responsive Design",
			desc: "Pixel-perfect experiences across every device and screen size.",
		},
		{
			icon: ChartBarIcon,
			title: "Performance Optimization",
			desc: "Blazing-fast sites — 95+ Lighthouse scores guaranteed.",
		},
		{
			icon: RocketLaunchIcon,
			title: "Launch & Growth",
			desc: "SEO, analytics setup, A/B testing & continuous improvements.",
		},
	];

	const fakeProjects = [
		{
			title: "E-Commerce Platform",
			category: "Shopify • React",
			color: "from-orange-500 to-amber-600",
		},
		{
			title: "SaaS Dashboard",
			category: "Next.js • Tailwind",
			color: "from-blue-600 to-cyan-500",
		},
		{
			title: "Fintech Mobile App",
			category: "React Native • UI/UX",
			color: "from-orange-500 to-red-500",
		},
		{
			title: "Agency Portfolio",
			category: "Framer Motion",
			color: "from-amber-500 to-orange-600",
		},
	];

	const processSteps = [
		{
			number: "01",
			title: "Discovery & Strategy",
			desc: "We dive deep into your business goals, audience, competitors, and brand identity to create a clear digital strategy.",
		},
		{
			number: "02",
			title: "Wireframing & UI/UX Design",
			desc: "Creating user flows, wireframes, and high-fidelity designs with modern aesthetics and conversion-focused UX.",
		},
		{
			number: "03",
			title: "Development & Build",
			desc: "Clean, performant code using React, Next.js, Tailwind, Framer Motion, and modern best practices.",
		},
		{
			number: "04",
			title: "Testing & Optimization",
			desc: "Rigorous testing across devices, performance tuning (95+ Lighthouse), SEO setup, and accessibility checks.",
		},
		{
			number: "05",
			title: "Launch & Growth",
			desc: "Smooth deployment, post-launch analytics, A/B testing, and ongoing improvements based on real user data.",
		},
	];

	return (
		<>
			{/* Hero - Original UI with glowing orb */}
			<section className="min-h-screen flex items-center pt-20 sm:pt-24 md:pt-20 pb-12 sm:pb-16 bg-black relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
					<motion.div style={{ y: heroY }} className="relative">
						<h1
							ref={heroTitleRef}
							className="text-5xl md:text-7xl font-bold leading-tight"
						>
							We Build
							<br />
							<span className="bg-gradient-to-r from-blue-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
								Digital Experiences
							</span>
						</h1>
						<p
							ref={heroDescRef}
							className="mt-6 text-xl text-zinc-400 max-w-xl"
						>
							Award-worthy web design & development studio
							crafting high-performance websites that help
							ambitious brands win in 2026.
						</p>

						<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
							<Link
								to="/work"
								className="group bg-orange-500 text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-orange-400 transition hover:scale-105 text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
							>
								View Projects
								<ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								to="/contact"
								className="border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-white/5 transition text-base sm:text-lg min-h-[48px] sm:min-h-[56px]"
							>
								Book a Call
							</Link>
						</div>
					</motion.div>

					{/* Glowing orb */}
					<div className="relative hidden md:block aspect-square flex items-center justify-center">
						<motion.div
							className="relative w-96 h-96 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-blue-600 shadow-[0_0_120px_80px] shadow-orange-500/70"
							animate={{
								scale: [1, 1.08, 1],
								boxShadow: [
									"0 0 80px 40px rgba(249,115,22,0.5)",
									"0 0 140px 90px rgba(249,115,22,0.8)",
									"0 0 80px 40px rgba(249,115,22,0.5)",
								],
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute w-[280px] h-[280px] rounded-full border border-orange-400/30"
							animate={{ scale: [0.95, 1.05, 0.95] }}
							transition={{ duration: 4, repeat: Infinity }}
						/>
					</div>
				</div>
			</section>

			{/* Services */}
			<motion.section
				id="services"
				className="py-16 sm:py-20 md:py-24 lg:py-32"
				style={{ y: servicesY }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="text-center mb-12 sm:mb-16 md:mb-20">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							What We Do Best
						</h2>
						<p className="mt-4 sm:mt-5 text-zinc-400 text-base sm:text-lg">
							Core services built for modern digital success
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{services.map((service, i) => {
							const Icon = service.icon;
							return (
								<motion.div
									key={i}
									className="group p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
								>
									<Icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />
									<h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
										{service.title}
									</h3>
									<p className="text-zinc-400 text-sm sm:text-base">
										{service.desc}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</motion.section>

			{/* Projects */}
			<motion.section
				id="work"
				className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black/40"
				style={{ y: projectsY }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="text-center mb-12 sm:mb-16 md:mb-20">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
							Selected Work
						</h2>
						<p className="mt-4 sm:mt-5 text-zinc-400 text-base sm:text-lg">
							Projects that define our craft
						</p>
					</div>
					<div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
						{fakeProjects.map((project, i) => (
							<motion.div
								key={i}
								className="group relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer perspective-1000 will-change-transform"
								onHoverStart={() => setHoveredProject(i)}
								onHoverEnd={() => setHoveredProject(null)}
								initial={{ opacity: 0, y: 60 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									delay: i * 0.12,
									duration: 0.9,
									ease: "easeOut",
								}}
								whileHover={{
									scale: 1.04,
									rotateX: 5,
									rotateY: 8,
								}}
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-70 transition-opacity duration-300 ease-out`}
								/>

								<div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-10 z-10">
									<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">
										{project.title}
									</h3>
									<p className="text-sm sm:text-base md:text-lg text-white/80 mt-1 drop-shadow-sm">
										{project.category}
									</p>
								</div>

								{hoveredProject === i && (
									<motion.div
										className="absolute inset-0 flex items-center justify-center bg-black/65 backdrop-blur-sm z-20"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.25 }}
									>
										<motion.button
											className="bg-white text-black px-7 sm:px-9 md:px-11 py-3.5 sm:py-4.5 md:py-5 rounded-full font-semibold flex items-center gap-2 sm:gap-3 hover:bg-orange-400 transition hover:scale-105 shadow-lg text-sm sm:text-base md:text-lg"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.98 }}
										>
											View Case Study
											<ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
										</motion.button>
									</motion.div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			{/* Process */}
			<motion.section
				id="process"
				className="py-20 sm:py-24 md:py-28 lg:py-32 bg-black/30"
				style={{ y: processY }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="text-center mb-16 md:mb-20">
						<h2 className="text-4xl sm:text-5xl font-bold">
							Our Process
						</h2>
						<p className="mt-5 text-zinc-400 text-lg max-w-3xl mx-auto">
							A structured, collaborative approach that turns bold
							ideas into high-performing digital experiences.
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
						{processSteps.map((step, index) => (
							<motion.div
								key={index}
								className="relative p-8 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-sm hover:border-orange-500/40 transition-all group"
							>
								<div className="text-5xl font-black text-orange-500/30 absolute -top-6 -left-4 group-hover:text-orange-400/50 transition-colors">
									{step.number}
								</div>
								<h3 className="text-2xl font-semibold mb-4">
									{step.title}
								</h3>
								<p className="text-zinc-400">{step.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			{/* Contact */}
			<section
				id="contact"
				className="py-20 sm:py-24 md:py-28 lg:py-32 bg-zinc-950"
			>
				<div className="max-w-5xl mx-auto px-4 sm:px-6">
					<div className="text-center mb-16 md:mb-20">
						<h2 className="text-4xl sm:text-5xl font-bold">
							Get in Touch
						</h2>
						<p className="mt-5 text-zinc-400 text-lg max-w-3xl mx-auto">
							Ready to start your next project? Drop us a message
							and let's create something extraordinary together.
						</p>
					</div>
					<div className="grid md:grid-cols-5 gap-10 md:gap-12">
						<div className="md:col-span-2 space-y-8">
							<div>
								<h3 className="text-xl font-semibold mb-3">
									Email
								</h3>
								<p className="text-orange-400">
									hello@innowebix.com
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-3">
									Location
								</h3>
								<p className="text-zinc-300">
									Ahmedabad, Gujarat, India
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-3">
									Working Hours
								</h3>
								<p className="text-zinc-300">
									Monday – Friday: 10:00 AM – 7:00 PM IST
								</p>
							</div>
						</div>

						<motion.form
							className="md:col-span-3 space-y-6"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-zinc-300 mb-2"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									required
									className="w-full px-5 py-3 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-orange-500 transition text-white"
									placeholder="John Doe"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-zinc-300 mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									required
									className="w-full px-5 py-3 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-orange-500 transition text-white"
									placeholder="john@example.com"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-zinc-300 mb-2"
								>
									Your Message
								</label>
								<textarea
									id="message"
									required
									rows={5}
									className="w-full px-5 py-3 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-orange-500 transition resize-none text-white"
									placeholder="Tell us about your project..."
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition shadow-xl shadow-orange-500/20"
							>
								Send Message →
							</button>
						</motion.form>
					</div>
				</div>
			</section>

			{/* CTA */}
			<motion.section
				className="py-16 sm:py-20 md:py-24 lg:py-32 text-center"
				style={{ y: ctaY }}
			>
				<div className="max-w-4xl mx-auto px-4 sm:px-6">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
						Ready to create something
						<br className="hidden sm:block" /> extraordinary
						together?
					</h2>
					<p className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-zinc-300">
						Let's build a website your competitors wish they had.
					</p>
					<Link
						to="/contact"
						className="mt-8 sm:mt-10 md:mt-12 inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl text-base sm:text-lg md:text-xl font-semibold hover:scale-105 transition shadow-2xl shadow-orange-500/20"
					>
						Start Your Project →
					</Link>
				</div>
			</motion.section>

			{/* Footer */}
			<footer className="border-t border-white/5 py-10 sm:py-12 md:py-16 text-center text-zinc-500 text-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					© {new Date().getFullYear()} InnoWebiX — Crafting tomorrow's
					web today.
				</div>
			</footer>
		</>
	);
}

export default Home;
