chrome.extension.sendMessage({greeting: "test"}, function(response){
	alert("popup.js");
});


//listen for addUsrBtn click from popup.html
	//call add user to list

//listen for getUsrLst click from popup.html
	//call getListOfusers
	//call displayListOfUsers

//listen for removeUsrBtn click from popup.html
	//call remove user from list

function addUserToList(user)
{
	//get username input from popup.html
	//add input to stored array
};

function removeUserFromList(user)
{
	//get selection input from popup.html
	//search array for input
	//remove user from stored array
};

function getListOfUsers()
{
	//get a list of blocked users
};

function displayListOfUsers(users)
{
	//populate popup.html list of users
};