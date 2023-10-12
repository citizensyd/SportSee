const GRAMME = "g";
const KCALORIE = "kCal";

/**
 * Class responsible for formatting and structuring nutriment data.
 */
class FormatNutriments {
  /**
   * Create a nutriment formatter.
   * 
   * @param {Array} data - The raw data to be formatted.
   * @param {Array} newData - The resulting data after formatting.
   */
  constructor(data, newData) {
    this.data = data;
    this.newData = newData;
  }

  /**
   * Format the calorie count for each data element.
   */
  formatCalorieCount() {
    this.data.map(element => this._formatIndividualCalorieCount(element));
  }

  /**
   * Update nutriment item for both raw data and formatted data.
   */
  updateItem() {
    const changeData = this.data[0].keyData;
    this.newData.nutriments = this._createNutriments(changeData);
  }

  /**
   * Format the calorie count for a given element if it meets the criteria.
   * 
   * @param {Object} element - The data element to format.
   */
  _formatIndividualCalorieCount(element) {
    if (element.keyData && typeof element.keyData.calorieCount === "number" && element.keyData.calorieCount >= 1000) {
      let formattedNumber = element.keyData.calorieCount.toLocaleString('fr-FR');
      element.keyData.calorieCount = formattedNumber.replace(/\s/g, ',');
    }
  }

  /**
   * Create a structured object for nutriments.
   * 
   * @param {Object} changeData - The key data for nutriment creation.
   * @returns {Object} The structured nutriments object.
   */
  _createNutriments(changeData) {
    return {
      calories: this._createNutriment("Calories", "caloriesIcon", "Icone des Calories", changeData.calorieCount, KCALORIE),
      proteines: this._createNutriment("Protéines", "proteinesIcon", "Icone des Protéines", changeData.proteinCount, GRAMME),
      glucides: this._createNutriment("Glucides", "glucidesIcon", "Icone des Glucides", changeData.carbohydrateCount, GRAMME),
      lipides: this._createNutriment("Lipides", "lipidesIcon", "Icone des Lipides", changeData.lipidCount, GRAMME)
    }
  }

  /**
   * Create a structured object for an individual nutriment.
   * 
   * @param {string} name - The name of the nutriment.
   * @param {string} url - The icon URL for the nutriment.
   * @param {string} alt - The alternative text for the nutriment's icon.
   * @param {number} value - The value of the nutriment.
   * @param {string} unit - The unit of the nutriment (g, kCal, etc.)
   * @returns {Object} The structured nutriment object.
   */
  _createNutriment(name, url, alt, value, unit) {
    return {
      name: name,
      url: url,
      alt: alt,
      value: value,
      unit: unit
    }
  }
}

export default FormatNutriments;
