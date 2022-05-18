import { Box, Stack } from '@mui/material'
import React from 'react'
import { Feed } from './components/Feed'
import { Navbar } from './components/Navbar'
import { RightBar } from './components/Rightbar'
import { Sidebar } from './components/Sidebar'

const App = () => {
	return (
		<Box>
			<Navbar />
			<Stack direction={'row'} spacing={2} justifyContent={"space-between"}>
				<Sidebar/>
				<Feed />
				<RightBar />
			</Stack>
		</Box>
	)
}

export default App