import React, { useEffect } from 'react'
import { Container } from './Main.style'

export default function Main() {

	useEffect(() => {
		document.title = 'Auth Route'
	}, [])

	return (
		<Container>
			bobo en el centro
		</Container>
	)
}
