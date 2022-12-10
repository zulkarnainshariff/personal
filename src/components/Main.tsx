import { FC, useEffect, useRef, useState, KeyboardEvent } from "react"

// material ui
import { Fade } from "@mui/material"

// constants
import { pic } from "../utils/constants"

// custom components
import { AboutMe, Musician, SoftwareDeveloper } from "./Screens"
import Header from "./Header"
import Menu from "./Menu"
import Projects from "./Projects"

const Main: FC = () => {
	const [showProjects, setShowProjects] = useState(false)
	const [activePage, setActivePage] = useState(-1)
	const [showSplash, setShowSplash] = useState(true)

	const mainRef = useRef<HTMLDivElement>(null)

	const handleArrowKeys = (e: KeyboardEvent) => {
		switch (e.key) {
			case "ArrowUp":
				setActivePage(activePage === 0 ? 2 : activePage - 1)
				break
			case "ArrowDown":
				setActivePage(activePage === 2 ? 0 : activePage + 1)
				break
			default:
				break
		}
	}

	const contents = [<AboutMe />, <SoftwareDeveloper />, <Musician />]

	useEffect(() => {
		showSplash &&
			setTimeout(() => {
				setShowSplash(false)
				setActivePage(1)
				mainRef.current && mainRef.current.focus()
			}, 2000)
	}, [showSplash])

	const Splash = () => {
		return (
			<Fade in={showSplash}>
				<div className="splash">
					<div>Software Developer</div>
					<div>Musician</div>
				</div>
			</Fade>
		)
	}

	const activePageChange = (newPage: number) => setActivePage(newPage)

	return (
		<div className="App" onKeyDown={handleArrowKeys} tabIndex={-1} ref={mainRef}>
			<Projects open={showProjects} close={() => setShowProjects(false)} />
			<Splash />
			<Fade in={!showSplash}>
				<div className="backdrop">
					<Header activePage={activePage} onPageChange={activePageChange} />

					<div className="innerBody">
						<div className="innerContainer">
							<div className="contentPanel">
								<div className="content">{contents[activePage]}</div>
							</div>
							<div className="imagePanel">
								<img src={pic} alt="profile" className="image" />
							</div>
						</div>
						<div className="menuContainer">
							<Menu onShowProjects={() => setShowProjects(true)} />
						</div>
					</div>
				</div>
			</Fade>
		</div>
	)
}

export default Main
