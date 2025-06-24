import { useState } from "react";
import React from "react";
import Image from "next/image";

const projects = [
	{
		title: "Portfolio Website",
		image: "https://picsum.photos/800/600?random=2",
		description:
			"A modern, responsive portfolio built with Next.js and Tailwind CSS, featuring smooth animations and a clean design.",
		details: `This portfolio website is a showcase of my skills, experience, and projects. Built with Next.js and Tailwind CSS, it features a modern, responsive design, smooth animations, and a focus on accessibility. The site includes a dynamic experience timeline, animated project cards, and a contact form. I used Framer Motion for subtle UI animations and optimized images for fast loading. The codebase is modular and easy to extend for future updates.`,
		tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
		features: [
			"Animated hero and experience timeline",
			"Responsive design for all devices",
			"Contact form with validation",
			"Optimized images and fast load times",
		],
		github: "https://github.com/your-github/portfolio",
		demo: "https://your-portfolio.vercel.app/",
	},
	{
		title: "E-commerce Platform",
		image: "https://picsum.photos/800/600?random=2",
		description:
			"A scalable e-commerce platform with product search, cart, and payment integration.",
		details: `A scalable e-commerce platform with product search, shopping cart, and secure payment integration. Built using React for the frontend and Node.js/Express for the backend, with MongoDB as the database. The platform supports user authentication, order management, and admin dashboards. I implemented responsive UI, RESTful APIs, and integrated Stripe for payments.`,
		tech: ["React", "Node.js", "MongoDB"],
		features: [
			"Full-featured shopping cart",
			"Product search and filtering",
			"User authentication and admin dashboard",
			"Stripe payment integration",
		],
		github: "https://github.com/your-github/ecommerce",
		demo: "https://ecommerce-demo.com/",
	},
	{
		title: "Blog CMS",
		image: "https://picsum.photos/800/600?random=2",
		description:
			"A content management system for blogs with markdown support and user authentication.",
		details: `A content management system for blogs with markdown support, user authentication, and role-based access. Built with Next.js, Prisma, and PostgreSQL. Features include a rich text editor, image uploads, SEO optimization, and analytics dashboard. The CMS is designed for easy content creation and management, with a clean and intuitive UI.`,
		tech: ["Next.js", "Prisma", "PostgreSQL"],
		features: [
			"Markdown editor with image upload",
			"Role-based access control",
			"SEO optimization and analytics dashboard",
			"User authentication and management",
		],
		github: "https://github.com/your-github/blog-cms",
		demo: "https://blog-cms-demo.com/",
	},
];

export default function ProjectsSection() {
	const [openIdx, setOpenIdx] = useState(null);

	// Helper to chunk projects into rows of 3 (for lg:grid-cols-3)
	const chunked = [];
	for (let i = 0; i < projects.length; i += 3) {
		chunked.push(projects.slice(i, i + 3));
	}

	return (
		<section className="py-12 bg-[#181818]">
			<h2 className="text-3xl font-bold mb-6 text-center text-[#64ffda]">
				Projects
			</h2>
			<div className="max-w-6xl mx-auto px-4">
				{chunked.map((row, rowIdx) => {
					// Check if any card in this row is open
					const openInRow = row.find(
						(_, idx) => openIdx === rowIdx * 3 + idx
					);
					return (
						<div
							key={rowIdx}
							className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
								openInRow ? "hidden" : "mb-0"
							} relative`}
						>
							{row.map((project, idx) => {
								const globalIdx = rowIdx * 3 + idx;
								const isOpen = openIdx === globalIdx;
								return (
									<React.Fragment key={globalIdx}>
										{/* If this card is open, render a placeholder and the expanded card below the row */}
										<div className="contents">
											<div className="h-full">
												<div
													className={`bg-[#222] rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 ${
														isOpen
															? "opacity-0 pointer-events-none"
															: "hover:scale-105 hover:shadow-2xl"
													}`}
													style={{
														visibility: isOpen
															? "hidden"
															: "visible",
														minHeight: "340px",
													}}
												>
													<button
														className="relative w-full h-56 focus:outline-none"
														onClick={() =>
															setOpenIdx(
																isOpen ? null : globalIdx
															)
														}
														aria-expanded={isOpen}
														aria-controls={`project-details-${globalIdx}`}
														tabIndex={0}
													>
														<Image
															src={project.image}
															alt={project.title + " screenshot"}
															fill
															className="object-cover group-hover:brightness-90 transition"
															sizes="(max-width: 768px) 100vw, 33vw"
														/>
														<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
															<span className="text-[#64ffda] text-lg font-bold">
																View Details
															</span>
														</div>
													</button>
													<div className="p-6 flex-1 flex flex-col">
														<h3 className="text-xl font-bold text-white mb-2">
															{project.title}
														</h3>
														<p className="text-[#ADB7BE] mb-4 flex-1">
															{project.description}
														</p>
														<div className="flex flex-wrap gap-2 mb-4">
															{project.tech.map((tech, i) => (
																<span
																	key={i}
																	className="bg-[#181818] text-[#64ffda] px-2 py-1 rounded text-xs font-semibold border border-[#64ffda]/30"
																>
																	{tech}
																</span>
															))}
														</div>
														<div className="flex gap-4 mt-auto">
															<a
																href={project.github}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#64ffda] hover:text-white transition underline"
															>
																GitHub
															</a>
															<a
																href={project.demo}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#64ffda] hover:text-white transition underline"
															>
																Live Demo
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/* Expanded card after the row if open */}
										{(isOpen &&
											(idx === row.length - 1 || row.length === 1)) && (
											<div className="col-span-full w-full flex justify-center">
												<div
													className="bg-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 max-w-4xl w-full z-20 mt-2 mb-6 animate-fade-in-expand"
													style={{ minHeight: "380px" }}
												>
													<button
														className="relative w-full h-72 focus:outline-none"
														onClick={() => setOpenIdx(null)}
														aria-expanded={isOpen}
														aria-controls={`project-details-${globalIdx}`}
														tabIndex={0}
													>
														<Image
															src={project.image}
															alt={project.title + " screenshot"}
															fill
															className="object-cover group-hover:brightness-90 transition"
															sizes="100vw"
														/>
														<div className="absolute inset-0 bg-black/40 opacity-100 transition flex items-center justify-center">
															<span className="text-[#64ffda] text-lg font-bold">
																Close
															</span>
														</div>
													</button>
													<div className="p-8 flex-1 flex flex-col">
														<h3 className="text-2xl font-bold text-white mb-4">
															{project.title}
														</h3>
														<p className="text-[#ADB7BE] mb-6 text-base whitespace-pre-line">
															{project.details}
														</p>
														{project.features && (
															<ul className="list-disc list-inside text-[#64ffda] mb-6 space-y-1">
																{project.features.map((feature, i) => (
																	<li key={i}>{feature}</li>
																))}
															</ul>
														)}
														<div className="flex flex-wrap gap-2 mb-6">
															{project.tech.map((tech, i) => (
																<span
																	key={i}
																	className="bg-[#181818] text-[#64ffda] px-3 py-1 rounded text-sm font-semibold border border-[#64ffda]/30"
																>
																	{tech}
																</span>
															))}
														</div>
														<div className="flex gap-6 mt-auto">
															<a
																href={project.github}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#64ffda] hover:text-white transition underline text-lg"
															>
																GitHub
															</a>
															<a
																href={project.demo}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#64ffda] hover:text-white transition underline text-lg"
															>
																Live Demo
															</a>
														</div>
													</div>
												</div>
											</div>
										)}
										{/* If open and not last in row, render expanded after this card */}
										{isOpen && idx !== row.length - 1 && row.length > 1 && (
											<div className="col-span-full w-full flex justify-center">
												<div
													className="bg-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 max-w-4xl w-full z-20 mt-2 mb-6 animate-fade-in-expand"
													style={{ minHeight: "380px" }}
												>
													<button
														className="relative w-full h-72 focus:outline-none"
														onClick={() => setOpenIdx(null)}
														aria-expanded={isOpen}
														aria-controls={`project-details-${globalIdx}`}
														tabIndex={0}
													>
														<Image
															src={project.image}
															alt={project.title + " screenshot"}
															fill
															className="object-cover group-hover:brightness-90 transition"
															sizes="100vw"
														/>
														<div className="absolute inset-0 bg-black/40 opacity-100 transition flex items-center justify-center">
															<span className="text-[#64ffda] text-lg font-bold">
																Close
															</span>
														</div>
													</button>
													<div className="p-8 flex-1 flex flex-col">
														<h3 className="text-2xl font-bold text-white mb-4">
															{project.title}
														</h3>
														<p className="text-[#ADB7BE] mb-6 text-base whitespace-pre-line">
															{project.details}
														</p>
														{project.features && (
															<ul className="list-disc list-inside text-[#64ffda] mb-6 space-y-1">
																{project.features.map((feature, i) => (
																	<li key={i}>{feature}</li>
																))}
															</ul>
														)}
														<div className="flex flex-wrap gap-2 mb-6">
															{project.tech.map((tech, i) => (
																<span
																	key={i}
																	className="bg-[#181818] text-[#64ffda] px-3 py-1 rounded text-sm font-semibold border border-[#64ffda]/30"
																>
																	{tech}
																</span>
															))}
														</div>
														<div className="flex gap-6 mt-auto">
															<a
																href={project.github}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#64ffda] hover:text-white transition underline text-lg"
															>
																GitHub
															</a>
															<a
																href={project.demo}
																target="_blank"
																rel="noopener noreferrer"
																className="text-[#64ffda] hover:text-white transition underline text-lg"
															>
																Live Demo
															</a>
														</div>
													</div>
												</div>
											</div>
										)}
									</React.Fragment>
								);
							})}
						</div>
					);
				})}
				{/* Render expanded card in a separate row, not inside the grid */}
				{openIdx !== null && (() => {
					const project = projects[openIdx];
					return (
						<div className="w-full flex justify-center">
							<div
								className="bg-[#222] rounded-2xl shadow-2xl overflow-hidden flex flex-col group transition-all duration-500 max-w-4xl w-full z-20 mt-2 mb-6 animate-fade-in-expand"
								style={{ minHeight: "380px" }}
							>
								<button
									className="relative w-full h-72 focus:outline-none"
									onClick={() => setOpenIdx(null)}
									aria-expanded={true}
									aria-controls={`project-details-${openIdx}`}
									tabIndex={0}
								>
									<Image
										src={project.image}
										alt={project.title + " screenshot"}
										fill
										className="object-cover group-hover:brightness-90 transition"
										sizes="100vw"
									/>
									<div className="absolute inset-0 bg-black/40 opacity-100 transition flex items-center justify-center">
										<span className="text-[#64ffda] text-lg font-bold">
											Close
										</span>
									</div>
								</button>
								<div className="p-8 flex-1 flex flex-col">
									<h3 className="text-2xl font-bold text-white mb-4">
										{project.title}
									</h3>
									<p className="text-[#ADB7BE] mb-6 text-base whitespace-pre-line">
										{project.details}
									</p>
									{project.features && (
										<ul className="list-disc list-inside text-[#64ffda] mb-6 space-y-1">
											{project.features.map((feature, i) => (
												<li key={i}>{feature}</li>
											))}
										</ul>
									)}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className="bg-[#181818] text-[#64ffda] px-3 py-1 rounded text-sm font-semibold border border-[#64ffda]/30"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-6 mt-auto">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#64ffda] hover:text-white transition underline text-lg"
										>
											GitHub
										</a>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#64ffda] hover:text-white transition underline text-lg"
										>
											Live Demo
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})()}
			</div>
			{/* Add keyframes for fade-in-expand in your global CSS */}
		</section>
	);
}

/* Add this to your global CSS (e.g., globals.css):
@keyframes fade-in-expand {
  from {
    opacity: 0;
    transform: scaleX(0.95);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
*/
