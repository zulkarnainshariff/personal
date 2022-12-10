import { useState } from "react"

// material ui
import { Tooltip } from "@mui/material"

// react icons
import { IconContext } from "react-icons"

// constants / custom functions
import { MAINCOLOR, MAINCOLOR_LIGHT, mobile } from "../utils/constants"
import { useResponsiveMedia } from "../utils/helpers"

interface IconProps {
	image: JSX.Element
	label: string
	onClick: () => void
	size?: number
}

const Icon = ({ image, label, onClick, size }: IconProps) => {
	const [hover, setHover] = useState(false)
	const media = useResponsiveMedia()

	const _size = size ? size : mobile(media) ? 20 : 35

	const style = {
		icon: {
			height: _size,
			width: _size,
		},
		image: {
			color: hover ? MAINCOLOR_LIGHT : MAINCOLOR,
			size: hover ? (_size - 2).toString() : (_size - 5).toString(),
		},
	}

	return (
		<div className="icon" style={style.icon} onClick={onClick}>
			<Tooltip title={label}>
				<div className="container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
					<IconContext.Provider value={style.image}>{image}</IconContext.Provider>
					<div className="label">{label}</div>
				</div>
			</Tooltip>
		</div>
	)
}

export default Icon
