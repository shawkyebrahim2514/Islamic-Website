import homeSections from '../../../data/homeSections'
import HomeBodySection from './HomeBodySection'

export default function HomeBodySections() {
    return (
        <>
            {homeSections.map((data) => <HomeBodySection key={data.imageSrc} data={data} />)}
        </>
    )
}
