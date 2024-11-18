import { useState } from "react"
import "./App.css"

function App() {
	const [theme, setTheme] = useState("t1")
	const [actual, setActual] = useState("")
	const [previous, setPrevious] = useState("")
	const [operation, setOperation] = useState("")

	const calculate = (mode) => {
		if ((operation === "/" && actual === "0") || actual === "") return
		if (mode === "equal") {
			switch (operation) {
				case "+":
					setActual(String(+previous + +actual))
					setPrevious("")
					setOperation("")
					break
				case "-":
					setActual(String(+previous - +actual))
					setPrevious("")
					setOperation("")
					break
				case "/":
					setActual(String(+previous / +actual))
					setPrevious("")
					setOperation("")
					break
				case "*":
					setActual(String(+previous * +actual))
					setPrevious("")
					setOperation("")
					break
			}
		} else {
			switch (operation) {
				case "+":
					setPrevious(String(+previous + +actual))
					setActual("")
					break
				case "-":
					setPrevious(String(+previous - +actual))
					setActual("")
					break
				case "/":
					setPrevious(String(+previous / +actual))
					setActual("")
					break
				case "*":
					setPrevious(String(+previous * +actual))
					setActual("")
					break
			}
		}
	}

	return (
		<div className={`App ${theme}`}>
			<header>
				<h1>Calculator</h1>
				<div className="theme">
					<span>THEME</span>
					<div className="toggle">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<div
							className="slider"
							onClick={() => {
								setTheme(theme === "t1" ? "t2" : theme === "t2" ? "t3" : "t1")
							}}
						>
							<div className={`circle ${theme}`} />
						</div>
					</div>
				</div>
			</header>
			<section className="visor">
				<p>
					{previous} {operation}
				</p>
				<p>{actual || "0"}</p>
			</section>
			<main>
				<button
					onClick={() => {
						setActual((prev) => prev + "7")
					}}
					className="number"
				>
					7
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "8")
					}}
					className="number"
				>
					8
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "9")
					}}
					className="number"
				>
					9
				</button>
				<button
					onClick={() => {
						setActual((prev) => {
							if (actual.length === 1) {
								return ""
							}
							return prev.slice(0, -1)
						})
					}}
					className="operation special"
				>
					DEL
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "4")
					}}
					className="number"
				>
					4
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "5")
					}}
					className="number"
				>
					5
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "6")
					}}
					className="number"
				>
					6
				</button>
				<button
					onClick={() => {
						if (previous && actual) {
							calculate("operation")
						} else if (actual) {
							setOperation("+")
							setActual("")
							setPrevious(actual)
						} else {
							setOperation("+")
						}
					}}
					className="operation"
				>
					+
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "1")
					}}
					className="number"
				>
					1
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "2")
					}}
					className="number"
				>
					2
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "3")
					}}
					className="number"
				>
					3
				</button>
				<button
					onClick={() => {
						if (previous && actual) {
							calculate("operation")
						} else if (actual) {
							setOperation("-")
							setActual("")
							setPrevious(actual)
						} else {
							setOperation("-")
						}
					}}
					className="operation"
				>
					-
				</button>
				<button
					onClick={() => {
						if (!actual.includes(".")) {
							setActual((prev) => prev + ".")
						}
					}}
					className="number"
				>
					.
				</button>
				<button
					onClick={() => {
						setActual((prev) => prev + "0")
					}}
					className="number"
				>
					0
				</button>
				<button
					onClick={() => {
						if (previous && actual) {
							calculate("operation")
						} else if (actual) {
							setOperation("/")
							setActual("")
							setPrevious(actual)
						} else {
							setOperation("/")
						}
					}}
					className="operation"
				>
					/
				</button>
				<button
					onClick={() => {
						if (previous && actual) {
							calculate("operation")
						} else if (actual) {
							setOperation("*")
							setActual("")
							setPrevious(actual)
						} else {
							setOperation("*")
						}
					}}
					className="operation"
				>
					*
				</button>
				<button
					onClick={() => {
						setActual("")
						setPrevious("")
						setOperation("")
					}}
					className="operation special"
				>
					RESET
				</button>
				<button onClick={() => calculate("equal")} className="operation">
					=
				</button>
			</main>
		</div>
	)
}

export default App
