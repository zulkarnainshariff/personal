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
