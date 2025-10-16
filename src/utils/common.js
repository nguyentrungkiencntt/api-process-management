class Common {
    generate(num) {
        const str = "ZXCVBNMASDFGHJKLPOIUYTREWQ1234567890";
        let result = '';
        for (let i = 0; i <= num; i++) {
            result += str.charAt(Math.floor(Math.random() * str.length));
        }
        return result;
    }
}

module.exports = new Common();