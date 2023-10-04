import AdhkarHeader from '../components/Adhkar/AdhkarHeader'
import AdhkarBody from '../components/Adhkar/AdhkarBody'
import { Helmet } from 'react-helmet'
export default function AdhkarPage() {
    return (
        <>
            <Helmet>
                <title>Adhkar</title>
            </Helmet>
            <AdhkarHeader />
            <AdhkarBody />
        </>
    )
}
