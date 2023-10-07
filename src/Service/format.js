import FormatNutriments from "./formatNutriments";
import FormatUserInfos from "./formatUserInfos";
import FormatPerformance from "./formatPerformance";
import FormatTodayScore from "./formatTodayScore";
import FormatSessionsAverage from "./formatSessionsAverage";
import FormatSessionsDateKgCal from "./formatSessionsDateKgCal";

class FormatData {
  constructor(data) {
    this.data = data;
    console.log(this.data);
    this.newData = [];
    this.formatNutriments = new FormatNutriments(this.data, this.newData);
    this.formatUserInfos = new FormatUserInfos(this.data, this.newData);
    this.formatPerformance = new FormatPerformance(this.data, this.newData);
    this.formatTodayScore = new FormatTodayScore(this.data, this.newData);
    this.formatSessionsAverage = new FormatSessionsAverage(this.data, this.newData);
    this.formatSessionsDateKgCal = new FormatSessionsDateKgCal(this.data, this.newData);
    this.updateNutriments();
    this.updateUserInfos()
    this.updatePerformance();
    this.updatetodayScore();
    this.updateSessionsAverage();
    this.updateSessionsDateKgCal();

  }

  getNewData() {
    console.log(this.newData);
    return this.newData;
  }

  updateNutriments() {
    this.formatNutriments.formatCalorieCount();
    this.formatNutriments.updateItem();
  }

  updateUserInfos() {
    this.formatUserInfos.updateUserInfos();
  }

  updatetodayScore() {
    this.formatTodayScore.updateTodayScore();
  }

  updateSessionsAverage() {
    this.formatSessionsAverage.extendSessionsAverage();
  }

  updateSessionsDateKgCal() {
    this.formatSessionsDateKgCal.updateSessionsDateKgCal();
  }

  updatePerformance() {
    this.formatPerformance.updatePerformance();
  }
}

export default FormatData;