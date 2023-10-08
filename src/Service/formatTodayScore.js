/**
 * Class responsible for formatting and structuring the today's score data.
 */
class FormatTodayScore {
    /**
     * Create a today's score formatter.
     * 
     * @param {Array} data - The raw data to be formatted.
     * @param {Array} newData - The resulting data after formatting.
     */
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }

    /**
     * Update the formatted data array with the today's score data.
     */
    updateTodayScore() {
        const todayScore = this.data[0].score || this.data[0].todayScore;
        this.newData.todayScore = this.#createTodayScore(todayScore);
    }

    /**
     * Format the today's score data.
     * 
     * @param {number} todayScore - The raw today's score value.
     * @returns {Array} The formatted today's score data array.
     */
    #createTodayScore(todayScore) {
        const scoreOne = todayScore * 100;
        const scoreTwo = 100 - scoreOne;
        return [{ name: "scoreDay", value: scoreOne }, { name: "scoreDayOpposite", value: scoreTwo }];
    }
}

export default FormatTodayScore;
