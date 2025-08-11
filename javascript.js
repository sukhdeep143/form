console.log("We are working with AJAX!!!");

$("#todoForm").submit(function (e) {
    e.preventDefault()

    let title = $("#title").val();
    let userId = $("#userId").val();

    console.log("Submitting Todo:", title, "for User:", userId);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (this.status === 201) { 
            console.log(JSON.parse(this.responseText));
            console.log("Todo Created Successfully:");
            console.log("THis si jfishfih")
        } else {
            console.error("Something went wrong!", this.status);
        }
    };

    let param = JSON.stringify({
        title: title,
        userId: userId,
        completed: false
    });

    xhr.send(param);
});



$("#GetData").click(()=>{
    console.log("Button is clicked");

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xhr.onload = function(){
        if (this.status === 200) {
              let todos = JSON.parse(this.responseText); 

            let html = "<h3>Todos:</h3><ul>";
            todos.forEach(todo => {
                html += `<li>
                            <strong>${todo.title}</strong> - 
                            ${todo.title, todo.id}
                         </li>`;
            });
            html += "</ul>";

            $("#output").html(html);
            
        } else{
            console.log("Something went wrong!!!")
        }
    }

    xhr.send()
    
});


$("#filedata").click(()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "test.txt", true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById("output").innerHTML = this.responseText;

        }else{
            console.error("Something is wrong!!!");
        }
    }


    xhr.send()
})