const currentYear = new Date().getFullYear();
export const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number)
}))

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthOptions = monthNames.map((name) => ({
    value: name,
    label: name
}))