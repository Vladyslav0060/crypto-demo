const numeral = require("numeral");

class Utils {
    formatPrice(value: number | string): string {
        return value.toString().length < 9
            ? numeral(value).format("$0,0.00")
            : numeral(value).format("$0,0.00000");
    }

    formatPercentage(value: number | string): string {
        return numeral(value).format("+0.00") + "%";
    }

    formatLargePrice(
        value: number | string,
        withSymbol: boolean = true
    ): string {
        return withSymbol
            ? numeral(value).format("($0.0000a)").toUpperCase()
            : numeral(value).format("(0.0000a)").toUpperCase();
    }
}

export default new Utils();
