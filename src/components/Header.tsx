// material ui
import { Fade } from "@mui/material"

// react icons
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"

// constants
import { MAINCOLOR_LIGHT } from "../utils/constants"

const activeSelectionColor = (page: number, activePage: number) => ({ color: activePage === page ? MAINCOLOR_LIGHT : "white" })

interface LinkProps {
	label: string
	index: number
	activePage: number
	testid: string
	onPageChange: (page: number) => void
}

interface HeaderProps {
	activePage: number
	onPageChange?: (page: number) => void
}

interface BlurpProps {
	label: string
	index: number
	testid: string
}

const Link = ({ label, index, activePage, onPageChange, testid }: LinkProps) => {
	const style = {
		item: {
			...activeSelectionColor(index, activePage),
		},
	}
	return (
		<div className="link">
			<div className="item" style={style.item} onClick={() => onPageChange(index)} data-testid={testid}>
				<Fade in={activePage === index}>
					<div className="rightArrow">
						<BiRightArrow size={5} />
					</div>
				</Fade>
				{label}
				<Fade in={activePage === index}>
					<div className="leftArrow">
						<BiLeftArrow size={5} />
					</div>
				</Fade>
			</div>
		</div>
	)
}

const Header = ({ activePage, onPageChange }: HeaderProps) => {
	const style = {
		firstname: {
			...activeSelectionColor(0, activePage),
		},
	}

	const Blurp = ({ label, index, testid }: BlurpProps) => (
		<Link label={label} index={index} activePage={activePage} onPageChange={() => onPageChange && onPageChange(index)} testid={testid} />
	)

	return (
		<div className="header">
			<div className="names" onClick={() => onPageChange && onPageChange(0)}>
				<div className="firstname" style={style.firstname}>
					ZULKARNAIN
				</div>
				<div className="lastname">SHARIFF</div>
			</div>

			<div>
				<Blurp label="Software Developer" index={1} testid="softwaredeveloper" />
				<Blurp label="Musician" index={2} testid="musician" />
			</div>
		</div>
	)
}

export default Header
