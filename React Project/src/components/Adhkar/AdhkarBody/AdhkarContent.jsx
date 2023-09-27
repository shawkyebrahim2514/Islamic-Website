import AdhkarContentSection from './AdhkarContentSection'
import { v4 as uuid } from 'uuid';

export default function AdhkarContent({ content }) {
    return (
        <div>
            {content ? content.map((item) => {
                return (
                    <AdhkarContentSection key={uuid()} data={item} />
                )
            }) : <p>Choose any Adhkar</p>}
        </div>
    )
}
