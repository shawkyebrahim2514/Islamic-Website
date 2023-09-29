import { memo } from 'react'
import AdhkarCard from './AdhkarCard'
import { Box, Container, Grid } from '@mui/material'

function AdhkarCards({ data, chosenAdhkar, setChosenAdhkar }) {
    return (
        <Box component="main" sx={{ flexGrow: 1, pb: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {data.map((item) => {
                        console.log(item)
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item} >
                                <AdhkarCard
                                    key={item}
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