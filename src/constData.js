import collageScore from "./Images/collageScore.png"
import iraqiStudent from "./Images/iraqiStudent.png"
import weather from "./Images/weather.png"
import find_yours from "./Images/find.png"

const CardData = [
	{
		img: find_yours,
		title: "Find Yours",
		descrption:
			"With its unique idea, Find Yours is a web app that helps people find their lost items.",
		tools: ["CSS", "HTML", "JavaScrip", "React", "React-Bootstrap"],
		link: "https://findyours.netlify.app/",
		repo: "https://github.com/murtaja1/find_yours",
		delay: 500
	},
	{
		img: iraqiStudent,
		title: "The Iraqi Student",
		descrption:
			"A web app that contains the info about univeristies that every Iraqi student may need to know before applying.",
		tools: ["CSS", "HTML", "JavaScrip", "vue", "Vue-Bootstrap", "python", "django"],
		link: "https://iraqistudent.netlify.app/",
		repo: "https://github.com/murtaja1/iraqi-student-frontend",
		delay: 800
	},
	{
		img: weather,
		title: "Weather",
		descrption:
			"User-friendly web app that tells you the weather status only by typing your location.",
		tools: ["CSS", "HTML", "JavaScrip", "React", "React-Bootstrap"],
		link: "https://weatherapp-cpp-team.netlify.app/",
		repo: "https://github.com/murtaja1/weather_app_js",
		delay: 1000
	},
	{
		img: collageScore,
		title: "The Score",
		descrption:
			"A simple site developed to let student find the score of a collage or institute very easily by type the name only.",
		tools: ["CSS", "HTML", "JavaScrip", "VUE", "Vue-Bootstrap"],
		link: "https://murtaja1.github.io/collage_score/",
		repo: "https://github.com/murtaja1/collage_score",
		delay: 1200
	}
]

export default CardData
