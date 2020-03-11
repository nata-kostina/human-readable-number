module.exports = function toReadable(number) {
    if (number == 0)
        return "zero";
    let numberStr = "";
    if (number > 99) {
        switch (Math.trunc(number / 100)) {
            case 1:
                numberStr += "one hundred ";
                break;
            case 2:
                numberStr += "two hundred ";
                break;
            case 3:
                numberStr += "three hundred ";
                break;
            case 4:
                numberStr += "four hundred ";
                break;
            case 5:
                numberStr += "five hundred ";
                break;
            case 6:
                numberStr += "six hundred ";
                break;
            case 7:
                numberStr += "seven hundred ";
                break;
            case 8:
                numberStr += "eight hundred ";
                break;
            case 9:
                numberStr += "nine hundred ";
                break;
        }
    }
    if (number > 19) {
        switch (Math.trunc(number % 100 / 10)) {
            case 2:
                numberStr += "twenty ";
                break;
            case 3:
                numberStr += "thirty ";
                break;
            case 4:
                numberStr += "forty ";
                break;
            case 5:
                numberStr += "fifty ";
                break;
            case 6:
                numberStr += "sixty ";
                break;
            case 7:
                numberStr += "seventy ";
                break;
            case 8:
                numberStr += "eighty ";
                break;
            case 9:
                numberStr += "ninety ";
                break;
        }
    }
    if ((number % 100 >= 10) && (number % 100 < 20)) {
        switch (number % 100) {
            case 10:
                numberStr += "ten";
                break;
            case 11:
                numberStr += "eleven";
                break;
            case 12:
                numberStr += "twelve";
                break;
            case 13:
                numberStr += "thirteen";
                break;
            case 14:
                numberStr += "fourteen";
                break;
            case 15:
                numberStr += "fifteen";
                break;
            case 16:
                numberStr += "sixteen";
                break;
            case 17:
                numberStr += "seventeen";
                break;
            case 18:
                numberStr += "eighteen";
                break;
            case 19:
                numberStr += "nineteen";
                break;
        }
    }
    else {
        switch (number % 10) {
            case 1:
                numberStr += "one";
                break;
            case 2:
                numberStr += "two";
                break;
            case 3:
                numberStr += "three";
                break;
            case 4:
                numberStr += "four";
                break;
            case 5:
                numberStr += "five";
                break;
            case 6:
                numberStr += "six";
                break;
            case 7:
                numberStr += "seven";
                break;
            case 8:
                numberStr += "eight";
                break;
            case 9:
                numberStr += "nine";
                break;
        }
    }
    return numberStr.trim();
}
