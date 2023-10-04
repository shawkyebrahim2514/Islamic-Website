import { Box, Container, Typography } from '@mui/material';
import AdhkarContentSection from './AdhkarContentSection'
import { v4 as uuid } from 'uuid';
import { memo } from 'react';

function AdhkarContent({ content }) {
    return (
        <Box sx={{
            py: 2
        }}>
            {content ? content.map((item, index) => {
                return (
                    <Box component='section' key={uuid()} sx={{
                        backgroundColor: index % 2 === 0 ? 'primary.light' : 'primary.contrastText',
                        py: 4,
                    }}>
                        <Container maxWidth="lg" sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}>
                            <AdhkarContentSection data={item} />
                        </Container>
                    </Box>
                )
            }) : (
                <Typography variant="h6" component="h3" sx={{
                    textAlign: 'center',
                    lineHeight: '1.6',
                }}>
                    اختر ذكراً من القائمة
                </Typography>
            )}
        </Box >
    )
}

export default memo(AdhkarContent);
