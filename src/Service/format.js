import FormatNutriments from "./formatNutriments";
import FormatUserInfos from "./formatUserInfos";
import FormatPerformance from "./formatPerformance";
import FormatTodayScore from "./formatTodayScore";
import FormatSessionsAverage from "./formatSessionsAverage";
import FormatSessionsDateKgCal from "./formatSessionsDateKgCal";

/**
 * Class to format and structure data.
 */
class FormatData {
  /**
   * Create a data formatter.
   * 
   * @param {Array} data - The data to be formatted.
   */
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
  
  /**
   * Get the formatted data.
   * 
   * @returns {Array} The formatted data.
   */
  getFormatNewData() {
    try {
      this.#updateNewData();
      console.log(this.newData);
      return this.newData;
    } catch (error) {
      console.error("Error during data formatting:", error);
      throw error;
    }
  }

  /**
   * Update the newData attribute by using various format methods.
   */
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
      console.error("Error during data update:", error);
      throw error;
    }
  }
}

export default FormatData;
