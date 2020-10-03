module.exports = function toReadable (number) {

    let digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        numStr = number + '';



    if (number == 0) {
        return 'zero';
    } else if (number > 0 && number < 20) {
        return digits[number];
    } else if (numStr.length == 2) {
        return (`${tens[numStr[0]]} ${digits[numStr[1]]}`).replace(/ +/g, ' ').trim();
    } else {
        if (numStr[1] == '0' && numStr[2] == '0') {
            return `${digits[numStr[0]]} hundred`;
        } else {
            return  `${digits[numStr[0]]} hundred ${toReadable(+(numStr[1] + numStr[2]))}`;
        }
    }



}
