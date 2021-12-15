module.exports = function toReadable (number) {
    let oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let threeDigit = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let readableNumber = [];
    let hundreds = Math.floor(number / 100);
    let twen = number % 100;
    let eden = twen % 10;
    if (number === 0) return ['zero'];
    if (hundreds > 0) {
        readableNumber.push(oneDigit[hundreds]);
        readableNumber.push('hundred');
    }
    if (twen >= 20) {
        readableNumber.push(threeDigit[Math.floor(twen / 10)]);
        if (eden !== 0) readableNumber.push(oneDigit[eden]);
    }
    else if (twen >= 10) readableNumber.push(twoDigit[twen % 10]);
    else if (twen !== 0) readableNumber.push(oneDigit[eden]);
    return readableNumber.join(' ');
}
