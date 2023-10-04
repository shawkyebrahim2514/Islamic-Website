import { memo } from 'react'
import AdhkarCard from './AdhkarCard'
import { Box, Container, Grid } from '@mui/material'
import { v4 as uuid } from 'uuid'

function AdhkarCards({ data, chosenAdhkar, setChosenAdhkar }) {
    return (
        <Box component="main" sx={{ flexGrow: 1, pb: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {data.map((item) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={uuid()} >
                                <AdhkarCard
                                    cardData={item}
                                    isChosen={item === chosenAdhkar}
                                    setChosenAdhkar={setChosenAdhkar} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default memo(AdhkarCards)