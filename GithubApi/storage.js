class Storage{


        static getSearchedUsersFromStorage(){
            // tüm kullanıcıları sil

            let users;

            if (localStorage.getItem("searched")===null) {
                users = [];
            }
            else{
                users = JSON.parse(localStorage.getItem("searched"));
            }

            return users;

        }

        static addSearchedUsersToStorage(username){

            let users = this.getSearchedUsersFromStorage();

            if (users.indexOf(username)===-1) {
                    users.push(username);

            }
            localStorage.setItem("searched",JSON.stringify(users));
        }


        static clearAllUsersFromStorage(){

            localStorage.removeItem("searched");

        }



}