import Image from "next/image";

const projects = [
	{
		name: "portfolio-website",
		title: "Portfolio Website",
		image: "https://picsum.photos/600/400?random=1",
		description: `This portfolio website is a showcase of my skills, experience, and projects. Built with Next.js and Tailwind CSS, it features a modern, responsive design, smooth animations, and a focus on accessibility. The site includes a dynamic experience timeline, animated project cards, and a contact form. I used Framer Motion for subtle UI animations and optimized images for fast loading. The codebase is modular and easy to extend for future updates.`,
		tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
		github: "https://github.com/your-github/portfolio",
		demo: "https://your-portfolio.vercel.app/",
	},
	{
		name: "ecommerce-platform",
		title: "E-commerce Platform",
		image: "https://picsum.photos/600/400?random=2",
		description: `A scalable e-commerce platform with product search, shopping cart, and secure payment integration. Built using React for the frontend and Node.js/Express for the backend, with MongoDB as the database. The platform supports user authentication, order management, and admin dashboards. I implemented responsive UI, RESTful APIs, and integrated Stripe for payments.`,
		tech: ["React", "Node.js", "MongoDB", "Stripe"],
		github: "https://github.com/your-github/ecommerce",
		demo: "https://ecommerce-demo.com/",
	},
	{
		name: "blog-cms",
		title: "Blog CMS",
		image: "/images/innovatex.png",
		description: `A content management system for blogs with markdown support, user authentication, and role-based access. Built with Next.js, Prisma, and PostgreSQL. Features include a rich text editor, image uploads, SEO optimization, and analytics dashboard. The CMS is designed for easy content creation and management, with a clean and intuitive UI.`,
		tech: ["Next.js", "Prisma", "PostgreSQL"],
		github: "https://github.com/your-github/blog-cms",
		demo: "https://blog-cms-demo.com/",
	},
];

export default function ProjectPage({ params }) {
	const { name } = params;
	const project = projects.find((p) => p.name === name);

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center text-white">
				<h1 className="text-2xl">Project not found.</h1>
			</div>
		);
	}

	return (
		<section className="py-12 max-w-3xl mx-auto px-4">
			<button
				onClick={() => (window.location.href = "/")}
				className="mb-8 flex items-center gap-2 text-[#64ffda] hover:text-white transition underline text-base"
				aria-label="Back to home"
			>
				<span className="text-xl">←</span> Back to Home
			</button>
			<h1 className="text-4xl font-bold mb-6 text-[#64ffda]">
				{project.title}
			</h1>
			<div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-lg">
				<Image
					src={project.image}
					alt={project.title + " screenshot"}
					fill
					className="object-cover"
					sizes="100vw"
				/>
			</div>
			<p className="text-lg text-[#ADB7BE] mb-6 whitespace-pre-line">
				{project.description}
			</p>
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
			<div className="flex gap-6">
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
		</section>
	);
}

export async function generateStaticParams() {
	return projects.map((project) => ({ name: project.name }));
}
