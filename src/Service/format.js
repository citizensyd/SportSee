import FormatNutriments from "./formatNutriments";
import FormatUserInfos from "./formatUserInfos";
import FormatPerformance from "./formatPerformance";
import FormatTodayScore from "./formatTodayScore";
import FormatSessionsAverage from "./formatSessionsAverage";
import FormatSessionsDateKgCal from "./formatSessionsDateKgCal";

class FormatData {
  constructor(data) {
    this.data = data;
    this.previousData = this.newData;
    console.log(this.data);
    this.newData = [];
    this.formatNutriments = new FormatNutriments(this.data, this.newData);
    this.formatUserInfos = new FormatUserInfos(this.data, this.newData);
    this.formatPerformance = new FormatPerformance(this.data, this.newData);
    this.formatTodayScore = new FormatTodayScore(this.data, this.newData);
    this.formatSessionsAverage = new FormatSessionsAverage(this.data, this.newData);
    this.formatSessionsDateKgCal = new FormatSessionsDateKgCal(this.data, this.newData);
  }
  
  getFormatNewData() {
    try {
      this.#updateNewData();
      console.log(this.newData);
      return this.newData;
    } catch (error) {
      console.error("Erreur lors du formatage des données:", error);
      throw error;
    }
  }

  #updateNewData() {
    try {
      this.formatNutriments.formatCalorieCount();
      this.formatNutriments.updateItem();
      this.formatUserInfos.updateUserInfos();
      this.formatTodayScore.updateTodayScore();
      this.formatSessionsAverage.extendSessionsAverage();
      this.formatSessionsDateKgCal.updateSessionsDateKgCal();
      this.formatPerformance.updatePerformance();
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données:", error);
      throw error;
    }
  }
}

export default FormatData;
