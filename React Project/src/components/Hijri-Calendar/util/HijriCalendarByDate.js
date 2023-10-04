import { currentDate } from "./HijriCalendarHeaderSection";

function parseDateParam(date) {
    if (!date.match(/^\d{2}-\d{2}-\d{4}$/)) {
        return currentDate;
    } else {
        const day = date.split('-')[0];
        const month = date.split('-')[1];
        const year = date.split('-')[2];
        if (day < 1 || day > 30 || month < 1 || month > 12 || year < 1) {
            return currentDate;
        }
        return ({
            day: parseInt(day),
            month: parseInt(month),
            year: parseInt(year)
        });
    }
}

export { parseDateParam }