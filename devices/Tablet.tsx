import React, { useState, ReactNode, FC } from "react"

// custom components
import { AboutMe, Musician, SoftwareDeveloper } from "../Screens"
import Projects from "../Projects"
import Header from "../Header"
import Menu from "../Menu"

interface ScreenProps {
	component: ReactNode
}

const Screen: FC<ScreenProps> = (props: ScreenProps) => {
	return <div className="glass screen">{props.component}</div>
}

const Tablet = () => {
	const [showProjects, setShowProjects] = useState(false)
	const [activePage, setActivePage] = useState(1) // TODO REMOVE THIS FOR TABLET
	const [collapsed, setCollapsed] = useState(false)

	return (
		<div className="App" onClick={() => setCollapsed(!collapsed)}>
			<Projects open={showProjects} close={() => setShowProjects(false)} />
			<div className="mainContainer">
				<Header size={60} top={20} blurpSize={25} activePage={activePage} />

				<div className="containerBody row">
					<div className="leftPanel">
						<Screen component={<AboutMe />} />
						<Screen component={<SoftwareDeveloper />} />
						<Screen component={<Musician />} />
					</div>

					<div className="rightPanel">
						<Menu onShowProjects={() => setShowProjects(true)} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tablet
