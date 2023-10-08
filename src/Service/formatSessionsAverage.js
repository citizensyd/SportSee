/**
 * Class responsible for formatting and structuring sessions average data.
 */
class FormatSessionsAverage {
  /**
   * Create a sessions average formatter.
   * 
   * @param {Array} data - The raw data to be formatted.
   * @param {Array} newData - The resulting data after formatting.
   */
  constructor(data, newData) {
    this.data = data;
    this.newData = newData;
  }

  /**
   * Extend the average sessions data in the formatted data array.
   */
  extendSessionsAverage() {
    const extendedData = this.#getExtendedSessions();
    this.newData.sessionsAverage = this.#mapToAbbreviatedDays(extendedData);
  }

  /**
   * Generate an extended list of sessions.
   * 
   * @returns {Array} The extended sessions data array.
   */
  #getExtendedSessions() {
    const firstSessionLength = this.#getNewFirstSessionLength();
    const lastSessionLength = this.#getNewLastSessionLength();
    const addEndDay = this.data[2].sessions.length + 1;

    return [
      { day: -1, sessionLength: firstSessionLength },
      ...this.data[2].sessions,
      { day: addEndDay, sessionLength: lastSessionLength },
    ];
  }

  /**
   * Calculate the session length for the first extended session.
   * 
   * @returns {number} The session length.
   */
  #getNewFirstSessionLength() {
    return this.data[2].sessions[0].sessionLength - this.data[2].sessions[1].sessionLength + this.data[2].sessions[0].sessionLength;
  }

  /**
   * Calculate the session length for the last extended session.
   * 
   * @returns {number} The session length.
   */
  #getNewLastSessionLength() {
    const last = this.data[2].sessions.length - 1;
    const secondLast = last - 1;
    return this.data[2].sessions[last].sessionLength - this.data[2].sessions[secondLast].sessionLength + this.data[2].sessions[last].sessionLength;
  }

  /**
   * Convert a numeric day to its abbreviated form and format the sessions data.
   * 
   * @param {Array} sessions - The sessions data.
   * @returns {Array} The formatted sessions data array.
   */
  #mapToAbbreviatedDays(sessions) {
    return sessions.map(item => {
      return {
        day: this.#numericToAbbreviation(item.day),
        sessionLength: item.sessionLength
      };
    });
  }

  /**
   * Convert a numeric day to its abbreviated form.
   * 
   * @param {number} numericDay - The numeric representation of a day.
   * @returns {string} The abbreviated form of the day.
   */
  #numericToAbbreviation(numericDay) {
    const abbreviations = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return abbreviations[numericDay - 1] || '';
  }
}

export default FormatSessionsAverage;
