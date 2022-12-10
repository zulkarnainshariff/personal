import { FC } from "react"

// react icons
import { BsCodeSlash } from "react-icons/bs"
import { IoIosMusicalNotes } from "react-icons/io"
import { TbUserCircle } from "react-icons/tb"

export const AboutMe: FC = () => {
	const msg1 = "I spent 21 years flying as a Cabin Crew for Singapore Airlines, with the last 11 years as a Leading Steward"
	const msg2 =
		"I had been programming for more than 30 years, and among the early members of Singapore Linux Users Group back in 1993 when I was working as a Computer Programmer, working on SCO Unix machines"

	return (
		<div className="screens">
			<div className="title">
				<TbUserCircle style={{ marginRight: "10px" }} />
				<div>About Me</div>
			</div>
			<div>{msg1}</div>
			<br />
			<div>{msg2}</div>
		</div>
	)
}

export const SoftwareDeveloper: FC = () => {
	const msg1 = "Over 30 years of programming experience"
	const msg2 =
		"The latest project that I worked on, was for a medical teleconsultation app, which allows individual clinics to embed telehealth capabilities to their own websites."
	const msg3 = "It comes with a scheduling system, and an internal, secured, non intrusive messaging system"
	const msg4 = "Click on the Projects link to find out more!"
	return (
		<div className="screens">
			<div className="title">
				<BsCodeSlash style={{ marginRight: "10px" }} />
				<div>Software Developer</div>
			</div>
			<div>{msg1}</div>
			<br />
			<div>{msg2}</div>
			<br />
			<div>{msg3}</div>
			<p />
			<div style={{ marginBottom: "20px", fontWeight: "bold" }}>{msg4}</div>
		</div>
	)
}

export const Musician: FC = () => {
	const msg1 = "I am a Ska drummer and had been in the underground scene in Singapore for many years"
	const msg2 = "I was a core member of the Cabin Crew Music Society with Singapore Airlines"
	const msg3 = "I am open to most genres, from Ska & Reggae, to Rock and Metal, from Less Than Jake to Metallica! "
	const msg4 = "So if you are in Tassie and wanting to jam, hit me up!"

	return (
		<div className="screens">
			<div className="title">
				<IoIosMusicalNotes style={{ marginRight: "10px" }} />
				<div>Musician</div>
			</div>
			<div>{msg1}</div>
			<br />
			<div>{msg2}</div>
			<br />
			<div>{msg3}</div>
			<br />
			<div>{msg4}</div>
		</div>
	)
}
