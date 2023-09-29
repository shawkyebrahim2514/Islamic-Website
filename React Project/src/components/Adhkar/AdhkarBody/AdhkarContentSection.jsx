import { Box, Typography } from '@mui/material'
import AdhkarContentSectionCounter from './AdhkarContentSectionCounter'

export default function AdhkarContentSection({ data }) {
    return (
        <>
            <Box sx={{
                display: 'grid',
                gap: '1rem',
                mb: 2,
            }}>
                <Typography variant="h5" component="h3" sx={{
                    textAlign: 'center',
                    lineHeight: '1.6',
                }}>
                    {data.content.replace(/\\|n|'|,/g, "")}
                </Typography>

                {data.description && (
                    <Typography variant="body1" component="p" sx={{
                        textAlign: 'center',
                        lineHeight: '1.6',
                    }}>
                        {data.description}
                    </Typography>
                )}
            </Box>

            <AdhkarContentSectionCounter initialCounter={+data.count} />
        </>
    )
}
