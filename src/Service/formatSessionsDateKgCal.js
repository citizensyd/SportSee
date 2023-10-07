class FormatSessionsDateKgCal {
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }

    updateSessionsDateKgCal() {
        const sessions = this.data[1].sessions;
        this.newData.sessionsDateKgCal = this.#createSessionsDateKgCal(sessions);

    }

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
