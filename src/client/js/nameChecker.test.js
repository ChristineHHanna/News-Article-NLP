const updateUI = require('./nameChecker')

describe("Testing the DOMManipulation functionality", () => {
    test("Testing the updateUI() function", () => {
        const scoreTag = document.getElementById('score_tag')
        const confidence = document.getElementById('confidence')
        const agreement = document.getElementById('agreement')
        const irony = document.getElementById('irony')
        const subjectivity = document.getElementById('subjectivity')
        let data = {score_tag:"NONE", agreement:"AGREEMENT", confidence:"100",subjectivity:"OBJECTIVE",irony:"NONIRONIC"};
        
        function updateUI(data) {
    try {
        expect(scoreTag.innerHTML).toBe("Score Tag : " +  NONE)
        expect(confidence.innerHTML).toBe("Confidence : " + 100)
        expect(agreement.innerHTML).toBe("Agreement: " +  AGREEMENT)
        expect(irony.innerHTML).toBe("Irony : " +  NONIRONIC)
        expect(subjectivity.innerHTML).toBe("Subjectivity: " +  OBJECTIVE)
    } catch (error) {
        console.log("error", error)
    }
}
        })});