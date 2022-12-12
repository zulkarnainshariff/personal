// images
import profile from "../assets/images/profile.png"
export const pic = profile

export const MAINCOLOR = "#47448A"
export const MAINCOLOR_LIGHT = "#afaed7"

interface Media {
	width: number
	height: number
	type: string
	orientation: string
}

export const MEDIA = {
	MOBILE: "mobile",
	TABLET: "tablet",
	DESKTOP: "desktop",
}

export const ORIENTATION = {
	PORTRAIT: "portrait",
	LANDSCAPE: "landscape",
}

export const desktop = (media: Media) => media.type === MEDIA.DESKTOP
export const mobile = (media: Media) => media.type === MEDIA.MOBILE
export const tablet = (media: Media) => media.type === MEDIA.TABLET
export const portrait = (media: Media) => media.orientation === ORIENTATION.PORTRAIT
export const landscape = (media: Media) => media.orientation === ORIENTATION.LANDSCAPE
export const mobilePortrait = (media: Media) => media.type === MEDIA.MOBILE && media.orientation === ORIENTATION.PORTRAIT
export const mobileLandscape = (media: Media) => media.type === MEDIA.MOBILE && media.orientation === ORIENTATION.LANDSCAPE
export const tabletPortrait = (media: Media) => media.type === MEDIA.TABLET && media.orientation === ORIENTATION.PORTRAIT
export const tabletLandscape = (media: Media) => media.type === MEDIA.TABLET && media.orientation === ORIENTATION.LANDSCAPE

export const GITHUB = "https://github.com/orgs/medicalanalytics-au/repositories"
export const LINKEDIN = "https://www.linkedin.com/in/zulkarnain-shariff-196706a1"
export const EMAIL = "mailto:szulkarnain@msn.com"

export const MEDICALANALYTICS = "https://www.medicalanalytics.org/demo"

export const screenData = {
	aboutme: {
		msg1: "I spent 21 years flying as a Cabin Crew for Singapore Airlines, with the last 11 years as a Leading Steward",
		msg2: "I had been programming for more than 30 years, and among the early members of Singapore Linux Users Group back in 1993 when I was working as a Computer Programmer, working on SCO Unix machines",
	},

	softwaredeveloper: {
		history: [
			{
				period: "1989 - 1994",
				systems: "Apple Lisa, Zilog Z-80, Intel x86, Xenix, Windows, OS/2",
				languages: "C/C++, Lisa Pascal, Assembly Language (MASM/TASM), Turbo Pascal, Assembly Language, C/C++, COBOL",
			},
			{
				period: "1994 - 1998",
				systems: "SCO Unix, Linux (yggdrasil, Slackware)",
				languages: "C++, Assembly Language , Progress 4GL RDBML, Delphi, Visual Studio",
			},
			{
				period: "1998 - Present",
				systems: "Multiple flavors of Linux, Windows, MacOS, iOS, Android",
				languages: "Delphi/Kylix, Java, JavaScript, Typescript, C++/C#/Objective C, Swift, PHP, Ruby on Rails",
			},
		],
		msg1: "Over 30 years of programming experience",
		msg2: "The latest project that I worked on, was for a medical teleconsultation app, which allows individual clinics to embed telehealth capabilities to their own websites.",
		msg3: "It comes with a scheduling system, and an internal, secured, non intrusive messaging system",
		msg4: "Click on the Projects link to find out more!",
	},

	musician: {
		msg1: "I am a Ska drummer and had been in the underground scene in Singapore for many years",
		msg2: "I was a core member of the Cabin Crew Music Society with Singapore Airlines",
		msg3: "I am open to most genres, from Ska & Reggae, to Rock and Metal, from Less Than Jake to Metallica! ",
		msg4: "So if you are in Tassie and wanting to jam, hit me up!",
	},
}
