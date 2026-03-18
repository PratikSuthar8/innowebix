/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function Contact() {
	return (
		<div className="pt-32 pb-20 bg-black">
			<div className="max-w-5xl mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold">Get in Touch</h1>
					<p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
						Ready to build something extraordinary? Let’s talk.
					</p>
				</div>

				<div className="grid md:grid-cols-5 gap-12">
					{/* Left column - Contact info */}
					<div className="md:col-span-2 space-y-10">
						<div>
							<h3 className="text-xl font-semibold mb-3">
								Email
							</h3>
							<p className="text-orange-400 text-2xl">
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

					{/* Right column - Form */}
					<motion.form
						className="md:col-span-3 space-y-8"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div>
							<label className="block text-sm font-medium text-zinc-300 mb-2">
								Your Name
							</label>
							<input
								type="text"
								className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl text-white"
								placeholder="John Doe"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-zinc-300 mb-2">
								Email Address
							</label>
							<input
								type="email"
								className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl text-white"
								placeholder="john@example.com"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-zinc-300 mb-2">
								Your Message
							</label>
							<textarea
								rows="6"
								className="w-full px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-2xl text-white resize-none"
								placeholder="Tell us about your project..."
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-black py-6 rounded-2xl text-xl font-semibold hover:scale-105 transition"
						>
							Send Message →
						</button>
					</motion.form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
