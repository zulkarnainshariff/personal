import { useCallback, useEffect, useState } from "react"

export const useResponsiveMedia = () => {
	const [media, setMedia] = useState({
		width: 0,
		height: 0,
		type: "mobile",
		orientation: "portrait",
	})

	const handleWindowResize = useCallback(() => {
		const width = window.innerWidth
		const height = window.innerHeight

		const orientation = width > height ? "landscape" : "portrait"
		const smallerDim = width < height ? width : height
	
		const type = smallerDim <= 480 ? "mobile" : "desktop"

		setMedia({
			width,
			height,
			type,
			orientation,
		})
	}, [])

	useEffect(() => {
		handleWindowResize()
		window.addEventListener("resize", handleWindowResize)
		return () => window.removeEventListener("resize", handleWindowResize)
	}, [handleWindowResize])

	return media
}

export const openLink = (url: string) => window.open(url, "_blank", "noopener,noreferrer")
