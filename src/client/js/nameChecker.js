const scoreTag = document.getElementById('score_tag')
const confidence = document.getElementById('confidence')
const agreement = document.getElementById('agreement')
const irony = document.getElementById('irony')
const subjectivity = document.getElementById('subjectivity')

function updateUI(data) {
    try {
       // console.log(upUI);
        scoreTag.innerHTML = "Score Tag : " + `${data.score_tag}`
        confidence.innerHTML = "Confidence : " +`${data.confidence}`
        agreement.innerHTML = "Agreement: " +`${data.agreement}`
        irony.innerHTML = "Irony : "+ `${data.irony}`
        subjectivity.innerHTML = "Subjectivity: " +`${data.subjectivity}`
    } catch (error) {
        console.log("error", error)
    }
}

export { updateUI }