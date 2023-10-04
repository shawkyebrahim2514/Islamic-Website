import { Box, Container } from "@mui/material";

export default function NotFound() {
    return (
        <Box sx={{
            pt: 10,
            pb: 4
        }}>
            <Container maxWidth="xl" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "80vh",
            }}>
                <Box
                    component='img'
                    src="svg/404.svg"
                    alt="404"
                    sx={{ width: '100%', maxWidth: "850px" }} />
            </Container>
        </Box>
    )
}
