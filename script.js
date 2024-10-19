const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const toastBox = document.getElementById('toast-box')
const popup = document.getElementById('popup')

function openpopup(){
popup.classList.add('open-popup')
}

function closepopup(){
    popup.classList.remove('open-popup')
    }

function addTask(){
    if (inputBox.value === ''){
        alert('Add your Task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();

};

function showToast(){
  if (inputBox.value === ''){
    return;
  };
 
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML= ' Task Added';
    toastBox.appendChild(toast);

    setTimeout(()=>{
        toast.remove()
    }, 60000);
}

function btn(){
    showToast();
    addTask();
    ;
    
}


listContainer.addEventListener('click' ,function(e){
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    saveData()
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    openpopup()
    saveData()
}
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}



showTask()
