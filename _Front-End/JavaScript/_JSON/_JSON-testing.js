// TODO: JSON Testing Page

fetch("_ladies.json")
    .then(response => response.json())
    .then(data =>
        console.log(`First Name: ${data.girl1.firstName} Last Name: ${data.girl1.lastName} Age: ${data.girl1.age}`)
    )

    // data.girl1.firstName