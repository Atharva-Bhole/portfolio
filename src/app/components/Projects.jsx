import { useState } from "react";
import React from "react";
import Image from "next/image";

const projects = [
	{
		title: "SepShield: Real-time Sepsis Prediction and Report Generation",
		image: "/images/sepshield.jpeg",
		description:
			"A real-time sepsis prediction system using machine learning, LLM for report generation and partial diagnosis and IoT real-time data.",
		details: `SepShield: Real-Time Sepsis Detection Hospital System (Jan 2025 – April 2025)<br>
Developed an end-to-end AI-powered hospital support system to predict septic shock up to 6 hours in advance with 87% accuracy.<br>
Engineered a time-series deep learning model using vital signs and lab data, achieving accurate early detection and clinical explainability.<br>
Integrated a fine-tuned Flan-T5 LLM to auto-generate structured patient reports, including AI justifications and treatment suggestions.<br>
Built a microservices-based backend with Python Flask and TypeScript (Express), isolating the AI model pipeline for better modularity and security.<br>
Implemented Docker for containerized deployment, Redis for caching, and Firebase Auth for secure clinician login.<br>
Used PostgreSQL and MongoDB for hybrid data storage supporting real-time prediction, ICU batch monitoring, and emergency alerting.<br>
Designed for hospital integration, reducing response times and enabling AI-driven ICU patient triaging.
`,
		tech: ["Typescript", "Node.js", "React.js", "PostgreSQL", "Python", "Flask"],
		features: [
			"Time-series deep learning model trained on real patient vitals and lab results",
			"Predicts septic shock 6 hours in advance with 87% accuracy.",
			"Generates structured patient reports with AI justifications and treatment suggestions",
			"Microservices architecture with Python Flask and TypeScript (Express)",
			"Role-based access control (doctors, nurses, admins).",
			"Scalable and secure data storage with PostgreSQL",
			"Sends automatic emergency alerts for high-risk patients.",
			"Supports real-time monitoring and batch processing for ICU patients.",
			"Supports integration with hospital notification or paging systems.",
			"Designed for easy integration with hospital systems and workflows.",
			"Can process data from medical devices or hospital databases.",
			"Reduces ICU decision-making time and enhances patient care."
		],
		demo: "https://shepshield.vercel.app/",
	},
	{
		title: "E-commerce Platform",
		image: "/images/ecom.jpeg",
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
		github: "https://github.com/Atharva-Bhole/ecom",
	},
	{
		title: "Huntington’s Disease Prediction (Machine Learning Engineer)",
		image: "/images/huntington.jpeg",
		description:
			"Developed a hybrid 3D CNN model in TensorFlow to detect Huntington’s Disease from raw 3D MRI scans and clinical text features, aiming for accurate early-stage diagnosis.",
		details: `A hybrid 3D CNN model was developed in TensorFlow to detect Huntington’s Disease from raw 3D MRI scans and clinical text features. The model was trained on a large dataset of annotated MRI scans and clinical reports, achieving high accuracy in early-stage diagnosis. The project involved extensive data preprocessing, model architecture design, and performance evaluation.`,
		tech: ["TensorFlow", "Python", "3D CNN"],
		features: [
			"Hybrid 3D CNN model",
			"Raw 3D MRI scan analysis",
			"Clinical text feature extraction",
			"Early-stage Huntington’s Disease detection",
			"High accuracy and performance evaluation",
			"Extensive data preprocessing",
			"Model architecture design",
			"Performance evaluation and optimization",
		],
	},
	{
		title: "Event Management Using QR Code",
		image: "/images/event_management.jpeg",
		description: "A web application for managing events with QR code check-in, ticketing, and attendee management.",
		details: `A web application for managing events with QR code check-in, ticketing, and attendee management. Built using React for the frontend and Node.js/Express for the backend, with MongoDB as the database. The application allows event organizers to create events, generate QR codes for tickets, and manage attendee check-ins. It also provides real-time analytics on ticket sales and attendance.`,
		tech: ["Python", "Flask", "qrcode", "HTML", "Bootstrap", "JavaScript(Client-Side)"],
		features: [
			"QR code generation and check-in",
			"Event management and ticketing",
			"Attendee management and analytics",
			"Real-time ticket sales and attendance tracking",
			"User-friendly interface for event organizers and attendees",
			"Secure and scalable architecture",
			"Customizable event templates",
			"Email notifications for attendees",
			"Admin dashboard for event management",
			"Responsive design for mobile and desktop",
			"Integration with payment gateways for ticket sales",
			"Support for multiple event types (conferences, workshops, etc.)",
		]
	},
	{
		title: "Chatty: Real-time Chat WebApp",
		description: "Built a real-time chat application with image support using Socket.io and Cloudinary, deployed with a cloud-hosted backend and MongoDB Atlas for scalable storage.",
		images: "/images/chatty.png",
		details: `Chatty: Real-time Chat WebApp (Jan 2024 – March 2024)<br>Built a real-time chat application with image support using Socket.io and Cloudinary, deployed with a cloud-hosted backend and MongoDB Atlas for scalable storage.`,
		tech: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary"],
		features: [
			"Real-time messaging",
			"Image upload and display",
			"User authentication and profiles",
			"Responsive design for mobile and desktop",
			"Cloud storage for media files",
			"Scalable architecture with microservices",
		],
		github: "https://github.com/Atharva-Bhole/Chat-App",
	},
	{
		title: "Twitter Backend Clone (Optimized Node.js + MongoDB)",
		description: "Developed a backend clone of Twitter using Node.js and MongoDB, focusing on optimizing performance and scalability.",
		image: "/images/twitter_clone.jpeg",
		details: "Developed a backend clone of Twitter using Node.js and MongoDB, focusing on optimizing performance and scalability. Implemented features like user authentication, tweet posting, and real-time notifications. Used Redis for caching and optimized database queries for high throughput.",
		tech: ["Node.js", "MongoDB", "node-cache"],
		features: [
			"User authentication and authorization",
			"Tweet posting and retrieval",
			"Real-time notifications",
			"Optimized database queries",
			"Scalable architecture with microservices",
			"node-cache for performance",
			"Rate limiting to prevent abuse",
			"Search functionality for tweets and users",
			"Follow/unfollow functionality",
			"Responsive API design",
		],
	},
	{
		title: "Restaurant Recommendation System using Machine Learning",
		description: "Developed a restaurant recommendation system using machine learning algorithms to predict user preferences based on their past behavior.",
		image: "/images/restaurant_recommendation.png",
		details: "The system analyzes user data, such as past orders and ratings, to provide personalized restaurant recommendations. It uses collaborative filtering and content-based filtering techniques to improve accuracy.",
		tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn"],
		features: [
			"Collaborative filtering",
			"Content-based filtering",
			"Personalized recommendations",
			"Data preprocessing",
			"Model evaluation",
			"Scalable architecture",
			"Real-time updates",
			"User feedback integration",
			"Responsive UI",
			"Integration with restaurant APIs",
			"Support for multiple cuisines",
		],
	},
	{
		title: "Key-Value Store with Advanced Features in C++",
		description: "Designed and implemented a custom in-memory key-value store in C++ with features like data persistence, TTL, multi-user support, and cache eviction policies.",
		details: "This project involves building a high-performance key-value data store from scratch using C++, similar in spirit to Redis. The system supports basic CRUD operations (put, get, delete), along with advanced capabilities such as Time-To-Live (TTL) expiration, persistence to disk, multi-user support, and cache eviction strategies like LRU. It is thread-safe and optimized for concurrent operations using mutex locks. This key-value store demonstrates core principles of data structures, file I/O, caching, and concurrent programming in C++.",
		images: "/images/key_value_store.jpg",
		tech: ["C++", "Data Structures", "File I/O", "Concurrency"],
		features: [
			"Basic Key-Value Operations: Supports put, get, delete, and update operations.",
			"In-Memory Store: Uses STL containers (e.g., unordered_map) for efficient data access.",
			"TTL (Time-To-Live): Keys can have optional expiration timers after which they auto-delete.",
			"Data Persistence: Writes data to disk periodically or during shutdown, and reloads on restart.",
			 "Multi-User Support: Can be extended to support user-based namespacing or authentication.",
			 "Eviction Policies: Implements LRU (Least Recently Used) cache eviction when memory limits are hit.",
			"Concurrency: Uses mutex locks to ensure thread safety for concurrent access.",
			"Modular Architecture: Clean separation of logic into components: cache, persistence, TTL handler",
			"Logging and Debugging: Optional logging mechanism to trace key activity and debug storage issues."
		]
	},
	{
		title: "CrackOffCampus – Placement Preparation & Hiring Portal",
		image: "/images/crackoffcampus.png",
		description: "A comprehensive platform for placement preparation and hiring, featuring mock tests, company profiles, and job listings.",
		details: "CrackOffCampus is a web-based portal built to help students prepare for off-campus placements and connect with job opportunities. The platform includes curated preparation materials, interview experiences, and real-time job listings, with both student and admin roles. The project emphasizes performance optimization, featuring fast API response times, lazy loading, compressed assets, and indexed database queries. The backend is highly modular, secure, and scalable, while the frontend is optimized for responsiveness and loading speed.",
		tech: ["React", "Node.js", "Typescript","Express", "PostgreSQL", "Tailwind CSS", "Redux", "Deployment", "Hostinger VPS"],
		features: [
			"Curated Preparation Content: Coding questions, interview experiences, company-wise materials.",
			"Role-Based Access: Separate portals and features for users and admins (CRUD operations on job data).",
			"Modular Code Structure: Separated routes, controllers, models, and middleware for maintainability.",
			"Optimized PostgreSQL Queries: Used indexes and lean queries for faster response times on job retrieval.",
			"Secure Authentication: JWT-based login system with hashed passwords using bcrypt.",
			"Efficient API Design: Reduced API response times with optimized database operations and request handlers.",
			"Lazy Loading: Images and resources load as users scroll to improve time to interaction.",
			"Asset Compression: Compressed static assets and used CDN hosting for performance boost.",
			"Responsive Design: Mobile-first layout using Bootstrap or Tailwind for an accessible UX.",
			"Lighthouse Optimized: Achieved high scores in performance, accessibility, and best practices.",
		],
	}
];

export default function ProjectsSection() {
	const [openIdx, setOpenIdx] = useState(null);
	const detailsRef = React.useRef(null);

	React.useEffect(() => {
		if (openIdx !== null && detailsRef.current) {
			detailsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	}, [openIdx]);

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
													className={`bg-[#222] rounded-2xl shadow-lg overflow-hidden flex flex-col group mb-15 transition-transform duration-300 ${
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
														{(project.image || project.images) && (
															<Image
																src={project.image || project.images}
																alt={project.title + " screenshot"}
																fill
																className="object-cover group-hover:brightness-90 transition"
																sizes="(max-width: 768px) 100vw, 33vw"
															/>
														)}
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
															{project.github && (
																<a
																	href={project.github}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline"
																>
																	GitHub
																</a>
															)}
															{project.demo && (
																<a
																	href={project.demo}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline"
																>
																	Live Demo
																</a>
															)}
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
														{(project.image || project.images) && (
															<Image
																src={project.image || project.images}
																alt={project.title + " screenshot"}
																fill
																className="object-cover group-hover:brightness-90 transition"
																sizes="100vw"
															/>
														)}
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
															{project.github && (
																<a
																	href={project.github}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	GitHub
																</a>
															)}
															{project.demo && (
																<a
																	href={project.demo}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	Live Demo
																</a>
															)}
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
														{(project.image || project.images) && (
															<Image
																src={project.image || project.images}
																alt={project.title + " screenshot"}
																fill
																className="object-cover group-hover:brightness-90 transition"
																sizes="100vw"
															/>
														)}
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
															{project.github && (
																<a
																	href={project.github}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	GitHub
																</a>
															)}
															{project.demo && (
																<a
																	href={project.demo}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="text-[#64ffda] hover:text-white transition underline text-lg"
																>
																	Live Demo
																</a>
															)}
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
						<div className="w-full flex justify-center" ref={detailsRef}>
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
									{(project.image || project.images) && (
										<Image
											src={project.image || project.images}
											alt={project.title + " screenshot"}
											fill
											className="object-cover group-hover:brightness-90 transition"
											sizes="100vw"
										/>
									)}
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
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#64ffda] hover:text-white transition underline text-lg"
											>
												GitHub
											</a>
										)}
										{project.demo && (
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#64ffda] hover:text-white transition underline text-lg"
											>
												Live Demo
											</a>
										)}
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
