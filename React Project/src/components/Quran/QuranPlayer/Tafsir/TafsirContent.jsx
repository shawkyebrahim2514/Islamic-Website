import { Box, Typography } from "@mui/material";

export default function TafsirContent({ text }) {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
        }}>
            <Typography sx={{
                fontSize: '1.3rem',
                lineHeight: '2rem',
            }}>
                {text}
            </Typography>
        </Box>
    )
}
