import QuranPlayer from '../components/Quran/QuranPlayer'
import QuranPageHeader from '../components/Quran/QuranPageHeader'
import { Helmet } from 'react-helmet'

export default function QuranPage() {
    return (
        <>
            <Helmet>
                <title>Quran Player</title>
            </Helmet>
            <QuranPageHeader />
            <QuranPlayer />
        </>
    )
}
