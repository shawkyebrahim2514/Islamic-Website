import homeSections from '../../../data/homeSections'
import HomeBodySection from './HomeBodySection'

export default function HomeBodySections() {
    return (
        <>
            {homeSections.map((data, index) =>
            (<HomeBodySection
                key={data.imageSrc}
                index={index}
                data={data} />))}
        </>
    )
}
