import { Box, Container } from "@mui/material";
import Phrase from "./Phrase";
import SocialNetworks from "./SocialNetworks";

export default function CommonFooter() {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Phrase />
                <SocialNetworks />
            </Container>
        </Box>
    )
}
