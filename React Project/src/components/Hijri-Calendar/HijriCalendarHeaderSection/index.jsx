import { Box, Container } from '@mui/material';
import FullDate from './FullDate';
import PrayerTimesTable from './PrayerTimesTable';
import { useFetch, isError, isLoading, isSuccess } from '../../../custom-hooks';
import { useEffect, useMemo, useState } from 'react';
import { getDatesAndTimes } from '../../../apis';
import SpinnerLoading from '../../SpinnerLoading';
import ErrorAlert from '../../ErrorAlert';
import {
    parsePrayerTimes,
    parseGregorianDate,
    parseHijriDate,
    currentDate
} from '../util';

export default function HijriCalendarHeaderSection({ pageDate = currentDate }) {
    const [datesAndTimesURL, setDatesAndTimesURL] = useState(null);
    const { data, status } = useFetch({ url: datesAndTimesURL }, [datesAndTimesURL]);

    const hijriDate = useMemo(() => {
        if (!data) return null;
        return parseHijriDate(data.data.date.hijri);
    }, [data]);

    const gregorianDate = useMemo(() => {
        if (!data) return null;
        return parseGregorianDate(data.data.date.gregorian);
    }, [data]);

    const prayerTimes = useMemo(() => {
        if (!data) return null;
        return parsePrayerTimes(data.data.timings)
    }, [data]);

    useEffect(() => {
        getDatesAndTimes(pageDate).then((res) => {
            setDatesAndTimesURL(res);
        });
    }, [pageDate]);

    return (
        <Box component="header">
            <Container maxWidth="lg" sx={{
                py: 4,
            }}>
                {isLoading(status) && <SpinnerLoading />}
                {isError(status) && datesAndTimesURL && <ErrorAlert />}
                {isSuccess(status) && (
                    <>
                        <FullDate
                            hijriDate={hijriDate}
                            gregorianDate={gregorianDate} />
                        <PrayerTimesTable
                            timezone={data.data.meta.timezone}
                            prayerTimes={prayerTimes} />
                    </>
                )}
            </Container>
        </Box>
    )
}
