const GRAMME = "g";
const KCALORIE = "kCal";

class FormatNutriments {
    constructor(data, newData) {
        this.data = data;
        this.newData = newData;
    }
  
    formatCalorieCount() {
      this.data.forEach(element => this._formatIndividualCalorieCount(element));
    }

    updateItem() {
      const changeData = this.data[0].keyData;
      this.data[0].nutriments = this._createNutriments(changeData);
      this.newData.nutriments = this._createNutriments(changeData);
    }

    _formatIndividualCalorieCount(element) {
        if (element.keyData && typeof element.keyData.calorieCount === "number" && element.keyData.calorieCount >= 1000) {
            let formattedNumber = element.keyData.calorieCount.toLocaleString('fr-FR');
            element.keyData.calorieCount = formattedNumber.replace(/\s/g, ',');
        }
    }

    _createNutriments(changeData) {
      return {
        calories: this._createNutriment("Calories", "caloriesIcon", "Icone des Calories", changeData.calorieCount, KCALORIE),
        proteines: this._createNutriment("Protéines", "proteinesIcon", "Icone des Protéines", changeData.proteinCount, GRAMME),
        glucides: this._createNutriment("Glucides", "glucidesIcon", "Icone des Glucides", changeData.carbohydrateCount, GRAMME),
        lipides: this._createNutriment("Lipides", "lipidesIcon", "Icone des Lipides", changeData.lipidCount, GRAMME)
      }
    }

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
