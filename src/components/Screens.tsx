import { FC, Fragment } from "react"

// react icons
import { BsCodeSlash } from "react-icons/bs"
import { IoIosMusicalNotes } from "react-icons/io"
import { TbUserCircle } from "react-icons/tb"

import { screenData } from "../utils/constants"

export const AboutMe: FC = () => {
	const { msg1, msg2 } = screenData.aboutme

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
	const { history, msg1, msg2, msg3, msg4 } = screenData.softwaredeveloper

	return (
		<div className="screens">
			<div className="title">
				<BsCodeSlash style={{ marginRight: "10px" }} />
				<div>Software Developer</div>
			</div>
			<div>{msg1}</div>
			<div className="history glass">
				{history.map((i, index) => {
					return (
						<Fragment key={i.period}>
							<div style={{ width: "100%" }}>{i.period}</div>
							<div style={{ width: "100%" }}>
								<div>
									<div style={{ fontWeight: "bold" }}>Systems</div>
									<div>{i.systems}</div>
								</div>

								<div style={{ marginTop: "10px", marginBottom: index === history.length - 1 ? 0 : "10px" }}>
									<div style={{ fontWeight: "bold" }}>Languages</div>
									<div>{i.languages}</div>
								</div>
							</div>
						</Fragment>
					)
				})}
			</div>
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
	const { msg1, msg2, msg3, msg4 } = screenData.musician

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
