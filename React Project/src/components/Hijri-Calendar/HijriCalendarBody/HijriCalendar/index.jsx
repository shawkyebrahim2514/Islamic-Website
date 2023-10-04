import DateCards from './DateCards'
import MonthDate from './MonthDate'
import { Box, Container } from '@mui/material'
import { getHijriMonthDays } from '../../../../apis'
import {useFetch, isError, isLoading, isSuccess } from '../../../../custom-hooks'
import SpinnerLoading from '../../../SpinnerLoading'
import ErrorAlert from '../../../ErrorAlert'

export default function HijriCalendar({ date }) {
    const { data, status } = useFetch({ url: getHijriMonthDays({ month: date.month, year: date.year }) }, [date]);

    return (
        <Box component='main'>
            <Container maxWidth="lg">
                {isLoading(status) && <SpinnerLoading />}
                {isError(status) && <ErrorAlert />}
                {isSuccess(status) && (
                    <>
                        <MonthDate date={date} />
                        <DateCards data={data?.data} />
                    </>
                )}
            </Container>
        </Box>
    )
}
