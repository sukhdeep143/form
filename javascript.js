console.log("We are working with AJAX!!!");

$("#getData").click(function () {
    console.log("You clicked the GET button");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'test.txt', true);

    xhr.onprogress = () => {
        console.log("Progress...");
    };

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error("Something went wrong!");
        }
    };

    xhr.send();
});

$('#postData').click(() => {
    console.log("You clicked the POST button");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'test.txt', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error("Something went wrong!");
        }
    };

    let param = JSON.stringify({ name: "sukhdeep" });
    xhr.send(param);
});
