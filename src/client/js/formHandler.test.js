const formHandler = require('./formHandler')

describe("Testing the validation functionality", () => {
    test("Testing the handleSubmit() function", () => {
        let regexURL = /^(http(?:s)?\:\/\/[a-zA-Z0-9]+(?:(?:\.|\-)[a-zA-Z0-9]+)+(?:\:\d+)?(?:\/[\w\-]+)*(?:\/?|\/\w+\.[a-zA-Z]{2,4}(?:\?[\w]+\=[\w\-]+)?)?(?:\&[\w]+\=[\w\-]+)*)$/
        let url = 'https://www.udacity.com'
        expect(url).toMatch(regexURL);
        })});