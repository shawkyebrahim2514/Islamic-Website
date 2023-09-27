import DateSelection from './DateSelection'
import MonthDate from './MonthDate'
import DateCards from './DateCards'

export default function HijriCalendarBody() {
    return (
        <main>
            <DateSelection />
            <MonthDate />
            <DateCards />
        </main>
    )
}
