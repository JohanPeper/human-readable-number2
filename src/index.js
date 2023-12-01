module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let answer = '';
    if (number < 20) {
        return units[number];
    }
    if (number < 100) {
        if (!(number % 10)) {
            return tens[number / 10];
        } else {
            return tens[Math.floor(number / 10)] + " " + units[number % 10];
        }
    }
    answer = units[Math.floor(number / 100)] + " hundred";
    if (number % 100 == 0) { return answer }
    else if (number % 100 < 20) {
        return answer += ' ' + units[number % 100];
    }
    if (number % 100 < 100) {
        if (!(number % 10)) {
            answer += " " + tens[Math.floor((number % 100) / 10)];
        } else {
            answer += " " + tens[Math.floor((number % 100) / 10)] + " " + units[number % 10];
        }
    }
    return answer;
}
