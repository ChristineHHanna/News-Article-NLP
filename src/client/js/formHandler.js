function handleSubmit(event) {
    event.preventDefault();

    // get text that user submitted
    let formText = document.getElementById('name').value;
    let regexURL = /^(http(?:s)?\:\/\/[a-zA-Z0-9]+(?:(?:\.|\-)[a-zA-Z0-9]+)+(?:\:\d+)?(?:\/[\w\-]+)*(?:\/?|\/\w+\.[a-zA-Z]{2,4}(?:\?[\w]+\=[\w\-]+)?)?(?:\&[\w]+\=[\w\-]+)*)$/
    if (regexURL.test(formText)) {
    postLink(formText);
    } else { 
        alert('Please enter a valid URL in order to proceed :)')
    }
}

function postLink(formText) {
    fetch('/addData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
        .then(res => res.json())
        .then((res) => {
            Client.updateUI(res);
        })
}


export { handleSubmit }
export { postLink }
