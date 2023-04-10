import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	cerner,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	portfolio,
	bloggify,
	geofencing,
	sac,
	covid,
	geoApp,
	youtube,
	toll,
	amazon,
	netflix,
	discord,
	urlshortner,
	hulu,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Software Engineer 1",
		company_name: "Oracle Cerner",
		icon: cerner,
		iconBg: "#fff",
		date: "September 2021 - Present",
		points: [
			"Developing and maintaining web applications using React.js, Java, Ruby on Rails and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "GlobalCert",
		icon: tesla,
		iconBg: "#fff",
		date: "Oct 2020 - Dec 2020",
		points: [
			"Developing and maintaining web applications using Django and ReactJS.",
			"Implemented responsive product and ensuring cross-browser compatibility.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Hulu Clone",
		description:
			"This is a clone of Hulu Website. It is created using NextJS. We can check the latest movies according to their types.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
		],
		image: hulu,
		source_code_link:
			"https://github.com/abhinavanand500/Hulu-Clone-NextJs",
		live_link: "https://hulu-clone-eta.vercel.app/",
	},
	{
		name: "My Portfolio",
		description:
			"This is a Portfolio Website in which all details like project, resume, etc are present. This is created in college",
		title: "My Portfolio",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link:
			"https://github.com/abhinavanand500/React-Udemy/tree/master/website",
		live_link: "https://aarohan.vercel.app/",
	},
	{
		name: "Netflix Clone",
		description:
			"This is a clone of Netflix Website. It is created using React. We can also watch trailer for some videos by clicking on them.",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: netflix,
		source_code_link: "https://github.com/abhinavanand500/Netflix-Clone",
		live_link: "https://netflix-one.vercel.app/",
	},
	{
		name: "Discord Clone",
		description:
			"This is a clone of Discord. Anyone can login using Google and create or participate in any conversations.",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient",
			},
			{
				name: "firebase authentication",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: discord,
		source_code_link: "https://github.com/abhinavanand500/Discord-Clone",
		live_link: "https://discord-rho.vercel.app/",
	},
	{
		name: "Covid Tracker",
		description:
			"It will show the details of COVID cases in whole world and each country. It is a web-App designed by using React",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: covid,
		source_code_link:
			"https://github.com/abhinavanand500/react-covidTracker",
		live_link: "https://abhinavanand500.github.io/react-covidTracker/",
	},
	{
		name: "URL Shortner",
		description:
			"In this project I have developed a website which will convert your long URL into small URL.",
		tags: [
			{
				name: "Django",
				color: "blue-text-gradient",
			},
			{
				name: "SQLITE",
				color: "pink-text-gradient",
			},
			{
				name: "HTML CSS",
				color: "green-text-gradient",
			},
		],
		image: urlshortner,
		source_code_link: "https://github.com/abhinavanand500/kaleyra",
		live_link: "http://kaleyra.pythonanywhere.com/",
	},
	{
		name: "GeoFencing Attendance",
		description:
			"Employees can mark themselves present by mobile phone. Their attendance will only be marked when they are present in Office.",
		tags: [
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "restapi",
				color: "blue-text-gradient",
			},
			{
				name: "HTML, CSS",
				color: "pink-text-gradient",
			},
		],
		image: geofencing,
		source_code_link: "https://github.com/abhinavanand500/GeoFence-Django",
		live_link: "http://abhinavanand500.pythonanywhere.com/",
	},
	{
		name: "Sacate",
		description:
			"Platform which will help the people to donate and ensure them their donation will reach to the people who actually need it.",
		tags: [
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "restapi",
				color: "blue-text-gradient",
			},
			{
				name: "HTML, css",
				color: "pink-text-gradient",
			},
		],
		image: sac,
		source_code_link: "https://github.com/abhinavanand500/Sacate",
		live_link: "http://sac.pythonanywhere.com/",
	},
	{
		name: "Bloggify",
		description:
			"Blog created using HTML,CSS,JS, Django, SQLite. Only authorised people are allowed to comment or write blog.",
		tags: [
			{
				name: "Django",
				color: "green-text-gradient",
			},
			{
				name: "SQLITE",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: bloggify,
		source_code_link: "https://github.com/abhinavanand500/Bloggify",
		live_link: "http://bloggify.pythonanywhere.com/",
	},
	{
		name: "Geofencing App",
		description:
			"This is a Mobile App which can be used to mark employees attendance and attendance will only be marked if they are near to office.",
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: geoApp,
		source_code_link: "https://github.com/abhinavanand500/myAppGeofence",
		live_link:
			"https://drive.google.com/drive/folders/1p0KiUbJoFwhjd-jwhc07bPnjGpNwD29p?usp=sharing",
	},
	{
		name: "Amazon Clone",
		description:
			"Amazon clone created using ReactJS. Fully functioning react web app. You can add or remove products.",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient",
			},
			{
				name: "Redux",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: amazon,
		source_code_link: "https://github.com/abhinavanand500/amazon",
		live_link: "https://amazon-alpha.vercel.app/",
	},
	{
		name: "Youtube Clone",
		description:
			"This is a website created using React and youtube API. It works exactly like youtube. You can watch anything.",
		tags: [
			{
				name: "React Js",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: youtube,
		source_code_link:
			"https://github.com/abhinavanand500/React-Udemy/tree/master/youtubeHooks",
		live_link: "https://youtube-hooks-gilt.vercel.app/",
	},
	{
		name: "Modern Toll System",
		description:
			"Designed a model which on implementation can ease the process of toll system and also reduce the accident in Highways.",
		tags: [
			{
				name: "C++",
				color: "blue-text-gradient",
			},
		],
		image: toll,
		source_code_link:
			"https://github.com/abhinavanand500/Modern_Toll_System",
		live_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };
