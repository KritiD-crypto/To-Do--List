let addtask = document.querySelector(".add-task");

const adding = addtask.addEventListener("click", () =>{
    // console.log("hello");
    // const inputvalue = addtask.value;
    const inputField = document.querySelector(".myInput");
    const inputValue = inputField.value;

    if(inputValue.trim() === ""){
        // console.log("Please add a task");
        alert("Please add a task!");
    }else{
        // console.log("task added successfully");
        const newDiv = document.createElement("div");
        newDiv.classList.add("task1");
        newDiv.innerHTML= `
            <label class="task-label">
                <input type="checkbox" class="checkbox">
                <span>${inputValue}</span>
                <button class="deletebtn">
                <i class="fa-solid fa-trash"></i>
                </button>
            </label>
        `;
        const container = document.querySelector(".tasks");
        container.append(newDiv);
        inputField.value = "";

       
    }
});



let deletetask = document.querySelector(".tasks");
// let deleting = document.querySelector(".task1");
let deletebtn = document.querySelector(".deletebtn");

const del = deletetask.addEventListener("click", (event) =>{
    // console.log("task deleted");
    // deleting.remove();

    
    if (event.target.closest(".deletebtn")){
        
        event.target.closest(".task1").remove();
      
    }
});

