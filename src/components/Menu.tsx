// react icons
import { VscGithubAlt } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"
import { HiOutlineBriefcase } from "react-icons/hi"
import { MdOutlineMailOutline } from "react-icons/md"

// constants
import { EMAIL, GITHUB, LINKEDIN } from "../utils/constants"

// custom function
import { openLink } from "../utils/helpers"

// custom component
import Icon from "./Icon"

interface MenuProps {
	onShowProjects: () => void
}

const Menu = ({ onShowProjects }: MenuProps) => {
	return (
		<div className="menu glass">
			<Icon image={<VscGithubAlt />} label="Github" onClick={() => openLink(GITHUB)} />
			<Icon image={<AiOutlineLinkedin />} label="LinkedIn" onClick={() => openLink(LINKEDIN)} />
			<Icon image={<HiOutlineBriefcase />} label="Projects" onClick={onShowProjects} />
			<Icon image={<MdOutlineMailOutline />} label="Email" onClick={() => openLink(EMAIL)} />
		</div>
	)
}

export default Menu
