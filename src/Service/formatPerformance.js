/**
 * Class responsible for formatting and structuring performance data.
 */
class FormatPerformance {
    #translations = {
        "1": "Cardio",
        "2": "Energie",
        "3": "Endurance",
        "4": "Force",
        "5": "Vitesse",
        "6": "Intensité"
    };

    /**
     * Create a performance formatter.
     * 
     * @param {Array} data - The raw data to be formatted.
     * @param {Array} newData - The resulting data after formatting.
     */
    constructor(data, newData) {
        this.data = data;
        this.tempData = [];
        this.newData = newData;
    }

    /**
     * Update the performance data in the formatted data array.
     */
    updatePerformance() {
        const value = this.data[3].data;
        this.newData.performance = this.#createPerformance(value);
    }

    /**
     * Create a structured array of performance data.
     * 
     * @param {Object} value - The raw performance data.
     * @returns {Array} The structured performance data array.
     */
    #createPerformance(value) {
        for (const key in value) {
            let newObject = this.#createObject(this.#translations[parseInt(key) + 1], value[key].value, 200);
            this.tempData.push(newObject);
        }
        return this.tempData.reverse();
    }

    /**
     * Create a structured object for an individual performance metric.
     * 
     * @param {string} subject - The name of the performance metric.
     * @param {number} user - The user's value for the metric.
     * @param {number} fullMark - The maximum value for the metric.
     * @returns {Object} The structured performance object.
     */
    #createObject(subject, user, fullMark) {
        return {
            subject: subject,
            user: user,
            fullMark: fullMark
        }
    }
}

export default FormatPerformance;
