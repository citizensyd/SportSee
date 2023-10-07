class FormatTodayScore {
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }

    updateTodayScore() {
        const todayScore = this.data[0].score || this.data[0].todayScore;
        this.newData.todayScore = this.#createTodayScore(todayScore);
    }

    #createTodayScore(todayScore) {
        const scoreOne = todayScore * 100;
        const scoreTwo = 100 - scoreOne;
        return [{ name: "scoreDay", value: scoreOne }, { name: "scoreDayOpposite", value: scoreTwo }];
    }
}

export default FormatTodayScore;
