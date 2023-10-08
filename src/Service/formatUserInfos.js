/**
 * Class responsible for formatting and structuring the user's information data.
 */
class FormatUserInfos {
    /**
     * Create a user info formatter.
     * 
     * @param {Array} data - The raw data to be formatted.
     * @param {Array} newData - The resulting data after formatting.
     */
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }

    /**
     * Update the formatted data array with the user's information.
     */
    updateUserInfos() {
        const userInfos = this.data[0].userInfos;
        this.newData.userInfos = this.#createUser(userInfos);
    }

    /**
     * Format the user's information.
     * 
     * @param {Object} firstName - The raw user's first name information.
     * @returns {Object} The formatted user's first name.
     */
    #createUser(firstName) {
        return {
            firstName: firstName.firstName,
        }
    }
}

export default FormatUserInfos;
