import { Grid } from '@mui/material'
import DateCard from './DateCard'
import { v4 as uuid } from 'uuid'
import { memo } from 'react'

function DateCards({ data }) {
    return (
        <Grid
            container
            sx={{
                mt: '0.5rem',
                textAlign: 'center',
            }}
            rowSpacing={5}
            columnSpacing={2}>
            {data?.map((date) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={uuid()}>
                    <DateCard
                        key={uuid()}
                        date={date} />
                </Grid>
            ))}
        </Grid>
    )
}

export default memo(DateCards)

