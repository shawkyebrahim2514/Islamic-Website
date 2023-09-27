import AdhkarContentSectionCounter from './AdhkarContentSectionCounter'

export default function AdhkarContentSection({ data }) {
    return (
        <section>
            <h3>{data.content.replace(/\\|n|'|,/g, "")}</h3>
            {data.description && <p>{data.description}</p>}
            <AdhkarContentSectionCounter initialCounter={+data.count} />
        </section>
    )
}
