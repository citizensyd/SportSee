/**
 * Class responsible for formatting and structuring sessions data based on date, kilograms, and calories.
 */
class FormatSessionsDateKgCal {
    /**
     * Create a sessions formatter based on date, kilograms, and calories.
     * 
     * @param {Array} data - The raw data to be formatted.
     * @param {Array} newData - The resulting data after formatting.
     */
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }

    /**
     * Update the formatted data array with sessions data based on date, kilograms, and calories.
     */
    updateSessionsDateKgCal() {
        const sessions = this.data[1].sessions;
        this.newData.sessionsDateKgCal = this.#createSessionsDateKgCal(sessions);
    }

    /**
     * Format a list of sessions based on date, kilograms, and calories.
     * 
     * @param {Array} sessions - The raw sessions data.
     * @returns {Array} The formatted sessions data array.
     */
    #createSessionsDateKgCal(sessions) {
        return sessions.map(value => {
            const date = new Date(value.day);
            return {
                day: date.getDate(),
                kilogram: value.kilogram,
                calories: value.calories
            }
        })
    }
}

export default FormatSessionsDateKgCal;
