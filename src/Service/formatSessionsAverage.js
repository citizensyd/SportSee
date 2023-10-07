class FormatSessionsAverage {
    constructor(data, newData) {
      this.data = data;
      this.newData = newData;
    }
  
    extendSessionsAverage() {
      const extendedData = this.#getExtendedSessions();
      this.newData.sessionsAverage = this.#mapToAbbreviatedDays(extendedData);
    }
  
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
  
    #getNewFirstSessionLength() {
      return this.data[2].sessions[0].sessionLength - this.data[2].sessions[1].sessionLength + this.data[2].sessions[0].sessionLength;
    }
  
    #getNewLastSessionLength() {
      const last = this.data[2].sessions.length - 1;
      const secondLast = last - 1;
      return this.data[2].sessions[last].sessionLength - this.data[2].sessions[secondLast].sessionLength + this.data[2].sessions[last].sessionLength;
    }
  
    #mapToAbbreviatedDays(sessions) {
      return sessions.map(item => {
        return {
          day: this.#numericToAbbreviation(item.day),
          sessionLength: item.sessionLength
        };
      });
    }
  
    #numericToAbbreviation(numericDay) {
      const abbreviations = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
      return abbreviations[numericDay - 1] || '';
    }
  }
  
  export default FormatSessionsAverage;
