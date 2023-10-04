import HijriCalendarHeaderSection from '../components/Hijri-Calendar/HijriCalendarHeaderSection'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import HijriCalendarByDateBody from '../components/Hijri-Calendar/HijriCalendarByDateBody';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { parseDateParam } from '../components/Hijri-Calendar/util';

export default function HijriCalendarByDatePage() {
    const { date } = useParams();
    const [dateObject, setDateObject] = useState(null);

    useEffect(() => {
        setDateObject(parseDateParam(date));
    }, []);

    return (
        <>
            <Helmet>
                <title>Hijri Calendar by Day</title>
            </Helmet>
            {dateObject && (
                <>
                    <Box sx={{
                        pt: 6,
                    }}>
                        <HijriCalendarHeaderSection pageDate={dateObject} />
                        <HijriCalendarByDateBody setDateObject={setDateObject} />
                    </Box>
                </>
            )}
        </>
    )
}
