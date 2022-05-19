import { Box, Stack } from '@mui/material'
import React from 'react'
import { Add } from './components/Add'
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
			<Add />
		</Box>
	)
}

export default App