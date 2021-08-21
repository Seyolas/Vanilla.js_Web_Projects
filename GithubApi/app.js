const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");



const github1 = new github();
const ui = new UI();

eventListeners();


function eventListeners(){

  githubForm.addEventListener("submit",getData);
  clearLastUsers.addEventListener("click",clearAllSearched);
  document.addEventListener("DOMContentLoaded",getAllSearched);
  
}

function getData(e){

  let username = nameInput.value.trim();


  if (username === "") {
    // alert("geçerli bir username giriniz.");
    ui.showError(username);
  }
  else {
    github1.getGithubData(username).then(function(response){
      
      if (response.user.message=="Not Found") {
        ui.showError(username);
      }
      else{

      ui.addSearchedUserToUI(username);
      Storage.addSearchedUsersToStorage(username);
      ui.showUserInfo(response.user);
      ui.showUserRepo(response.repo);
      }

    });

  }

  ui.clearInput();
  e.preventDefault();

}

function clearAllSearched(){
  if (confirm("Emin misiniz ?")) {
    Storage.clearAllUsersFromStorage();
    ui.ClearAllSearchedFromUI();
  }

}

function getAllSearched(){

  let users = Storage.getSearchedUsersFromStorage();
  let result = "";

  users.forEach(i => {
    
    result+= `<li class = "list-group-item">${i}</li>`;



  });

  lastUsers.innerHTML=result;

}