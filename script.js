fetch("hardskill.json")
.then((response) => response.json())
.then(data => {

    console.log(data);
    data.forEach(element => {
        console.log(element);
        const div = document.createElement("div")
        div.classList.add("card")
    });
});

fetch("webDesign.json")
.then((response) => response.json())
.then(data => {

    console.log(data);
    data.forEach(element => {
        console.log(element);
        const div = document.createElement("div")
        div.classList.add("card")
    });
});

fetch("wordPress.json")
.then((response) => response.json())
.then(data => {

    console.log(data);
    data.forEach(element => {
        console.log(element);
        const div = document.createElement("div")
        div.classList.add("card")
    });
});
    