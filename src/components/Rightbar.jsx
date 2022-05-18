import React from 'react'
import { Box } from '@mui/material'

export const RightBar = () => {
    return (
        <Box
            bgcolor="lightblue"
            flex={2}
            p={2}
            sx={{display: {xs: 'none', sm: 'block'}}}
            >
            RightBar
        </Box>
    )
}
