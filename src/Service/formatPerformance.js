class FormatPerformance {
    #translations = {
        "1": "Cardio",
        "2": "Energie",
        "3": "Endurance",
        "4": "Force",
        "5": "Vitesse",
        "6": "Intensité"
    };
    constructor(data, newData) {
        this.data = data;
        this.tempData = [];
        this.newData = newData;
    }

    updatePerformance() {
        const value = this.data[3].data;
        this.newData.performance = this.#createPerformance(value);

    }

    #createPerformance(value) {
        for (const key in value) {
            let newObject = this.#createObject(this.#translations[parseInt(key) + 1], value[key].value, 200);
            this.tempData.push(newObject);
        }
        return this.tempData.reverse();
    }

    #createObject(subject, user, fullMark) {
        return {
            subject: subject,
            user: user,
            fullMark: fullMark
        }
    }
}

export default FormatPerformance;
