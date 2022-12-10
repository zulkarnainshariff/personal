import { useState } from "react"

// constants
import { pic } from "../../utils/constants"

// custom components
import { AboutMe, Musician, SoftwareDeveloper } from "../Screens"
import Projects from "../Projects"
import Header from "../Header"
import Menu from "../Menu"

const Mobile = () => {
	const [showProjects, setShowProjects] = useState(false)
	const [activePage, setActivePage] = useState(1)

	const contents = [<AboutMe />, <SoftwareDeveloper />, <Musician />]

	const activePageChange = (newPage: number) => setActivePage(newPage)

	return (
		<div className="App">
			<Projects open={showProjects} close={() => setShowProjects(false)} />
			<div className="mainContainer">
				<Header size={30} top={20} blurpSize={20} activePage={activePage} onPageChange={activePageChange} />

				<div className="mobileContainerBody">
					<div className="column" style={{ justifyContent: "flex-start" }}>
						<div className="imageOuterContainer">
							<div className="imageInnerContainer">
								<img src={pic} alt="profile" className="image" />
							</div>
						</div>
						<div className="center" style={{ marginTop: "20px" }}>
							<Menu onShowProjects={() => setShowProjects(true)} />
						</div>
					</div>

					<div className="glass content">{contents[activePage]}</div>
				</div>
			</div>
		</div>
	)
}

export default Mobile
