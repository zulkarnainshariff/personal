import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"
import Header from "./components/Header"

test("renders app link", () => {
	render(<App />)
	const softwareDeveloperElement = screen.getAllByText(/Software Developer/i)
	const musicianElement = screen.getAllByText(/Musician/i)
	expect(softwareDeveloperElement[0]).toBeInTheDocument()
	expect(musicianElement[0]).toBeInTheDocument()
})

test("renders software developer content", () => {
	render(<Header activePage={1} />)
	const link = screen.getByTestId("softwaredeveloper")
	userEvent.click(link)
})

