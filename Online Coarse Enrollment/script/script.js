var UserIdAutoIncrement = 1000;
var CoarseIdAutoIncrement = 10;
var CurrentUserId;
var CurrentUserName;
var NewUserNameStatus = false;
var NewUserAgeStatus = false;
var NewUserPhoneNumberStatus = false;
var User = /** @class */ (function () {
    function User(paramUserName, paramUserAge, paramUserPhoneNumber) {
        UserIdAutoIncrement++;
        this.userId = "ONC" + UserIdAutoIncrement;
        this.userName = paramUserName;
        this.userAge = paramUserAge;
        this.userPhoneNumber = paramUserPhoneNumber;
    }
    return User;
}());
var Coarse = /** @class */ (function () {
    function Coarse(paramCoarseName, paramCoarseRequiredDays, paramUserId) {
        CoarseIdAutoIncrement++;
        this.coarseId = "OI" + CoarseIdAutoIncrement.toString();
        this.coarseName = paramCoarseName;
        this.coarseRequiredDays = paramCoarseRequiredDays;
        this.userId = paramUserId;
    }
    return Coarse;
}());
var UserArrayList = new Array();
UserArrayList.push(new User("Jaganaath", 22, 7418319189));
UserArrayList.push(new User("Jeeva", 23, 9600210510));
UserArrayList.push(new User("Karan", 24, 8825954126));
UserArrayList.push(new User("Dakshan", 25, 9684645656));
var CoarseArrayList = new Array();
CoarseArrayList.push(new Coarse("C#", 30, "OI11"));
CoarseArrayList.push(new Coarse("HTML", 15, "OI12"));
CoarseArrayList.push(new Coarse("CSS", 16, "OI13"));
CoarseArrayList.push(new Coarse("JavaScript", 10, "OI14"));
CoarseArrayList.push(new Coarse("TypeScript", 7, "OI15"));
function newUserPage() {
    /*let newUserId = (document.getElementById(NewUserId) as HTMLInputElement).value;
    for (let i = 0; i < UserArrayList.length; i++)
    {
        if(document.getElementById('userId') as HTMLDivElement).value == UserArrayList[i].userId
        {
            signUp();
        }
        else
        {
            alert("Invalid User!");
        }
    }*/
    document.getElementById('homePage').style.display = "none";
    document.getElementById('newUserPage').style.display = "block";
}
function existingUserPage() {
    var homePage = document.getElementById('homePage');
    var existingUserPage = document.getElementById('existingUserPage');
    var availableUser = document.getElementById('availableUser');
    homePage.style.display = "none";
    existingUserPage.style.display = "block";
    availableUser.innerHTML = "<h3>Available User</h3>";
    for (var i = 0; i < UserArrayList.length; i++) {
        availableUser.innerHTML += "User Name : ".concat(UserArrayList[i].userName, " | User Id : ").concat(UserArrayList[i].userId, "<br>");
    }
    document.getElementById('newUserPage').style.display = "none";
    document.getElementById('homePage').style.display = "block";
}
function signUp() {
    if (NewUserNameStatus == true && NewUserAgeStatus == true && NewUserPhoneNumberStatus == true) {
        var newUserName = document.getElementById('newUserName').value;
        var newUserAge = document.getElementById('newUserAge').value;
        var newUserPhoneNumber = document.getElementById('newUserPhoneNumber').value;
        UserArrayList.push(new User(newUserName, +newUserAge, +newUserPhoneNumber));
    }
    else {
        alert("Your Registration Process Successful");
    }
    document.getElementById('loginPage').style.display = "none";
    document.getElementById('coarsePage').style.display = "block";
}
function signIn() {
    document.getElementById('coarsePage').style.display = "none";
    document.getElementById('availableCoarse').style.display = "block";
}
function availableCoarses() {
    document.getElementById('availableCoarse').style.display = "block";
    document.getElementById('enrolledCoarse').style.display = "block";
}
function enrol() {
    alert("Enrolled Course: ");
}
function enrolledCoarses() {
    alert("Courses Enrolled");
    document.getElementById('enrolledCoarse').style.display = "none";
    document.getElementById('enrolledCoarses').style.display = "block";
}
