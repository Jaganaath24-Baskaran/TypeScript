let UserIdAutoIncrement = 1000;
let CoarseIdAutoIncrement = 10;

let CurrentUserId: string;
let CurrentUserName: string;

let NewUserNameStatus = false;
let NewUserAgeStatus = false;
let NewUserPhoneNumberStatus = false;

class User{
    userId:any;
    userName:string;
    userAge:number;
    userPhoneNumber:number;

    constructor(paramUserName:string, paramUserAge:number, paramUserPhoneNumber){
        UserIdAutoIncrement++;
        this.userId = "ONC" + UserIdAutoIncrement;
        this.userName = paramUserName;
        this.userAge = paramUserAge;
        this.userPhoneNumber = paramUserPhoneNumber;
    }
}
class Coarse{
    coarseId:string;
    coarseName:string;
    coarseRequiredDays:number;
    userId:any;

    constructor(paramCoarseName:string, paramCoarseRequiredDays:number, paramUserId:string){
        CoarseIdAutoIncrement++;

        this.coarseId = "OI" + CoarseIdAutoIncrement.toString();
        this.coarseName = paramCoarseName;
        this.coarseRequiredDays = paramCoarseRequiredDays;
        this.userId = paramUserId;
    }
}

let UserArrayList:Array<User> = new Array<User>();
UserArrayList.push(new User("Jaganaath", 22, 7418319189));
UserArrayList.push(new User("Jeeva", 23, 9600210510));
UserArrayList.push(new User("Karan", 24, 8825954126));
UserArrayList.push(new User("Dakshan", 25, 9684645656));

let CoarseArrayList:Array<Coarse> = new Array<Coarse>();
CoarseArrayList.push(new Coarse("C#", 30, "OI11"));
CoarseArrayList.push(new Coarse("HTML", 15, "OI12"));
CoarseArrayList.push(new Coarse("CSS", 16, "OI13"));
CoarseArrayList.push(new Coarse("JavaScript", 10, "OI14"));
CoarseArrayList.push(new Coarse("TypeScript", 7, "OI15"));

function newUserPage(){
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
    
    (document.getElementById('homePage') as HTMLDivElement).style.display="none";
    (document.getElementById('newUserPage') as HTMLDivElement).style.display="block";
}
function existingUserPage(){
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;

    homePage.style.display = "none";
    existingUserPage.style.display = "block";

    availableUser.innerHTML = "<h3>Available User</h3>";


    for (let i = 0; i < UserArrayList.length; i++) {

        availableUser.innerHTML += `User Name : ${UserArrayList[i].userName} | User Id : ${UserArrayList[i].userId}<br>`;
    }
    (document.getElementById('newUserPage') as HTMLDivElement).style.display="none";
    (document.getElementById('homePage') as HTMLDivElement).style.display="block";   

    
}
function signUp(){
    if (NewUserNameStatus == true && NewUserAgeStatus == true && NewUserPhoneNumberStatus == true) {
               
        let newUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
        let newUserAge = (document.getElementById('newUserAge') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('newUserPhoneNumber') as HTMLInputElement).value;

        UserArrayList.push(new User(newUserName, +newUserAge, +newUserPhoneNumber));
        
    }
    else
    {
        alert("Your Registration Process Successful")
    }
    (document.getElementById('loginPage') as HTMLDivElement).style.display="none";
    (document.getElementById('coarsePage') as HTMLDivElement).style.display="block";
}
function signIn(){
    (document.getElementById('coarsePage') as HTMLDivElement).style.display="none";
    (document.getElementById('availableCoarse') as HTMLDivElement).style.display="block";
}
function availableCoarses(){
    (document.getElementById('availableCoarse') as HTMLDivElement).style.display="block";
    (document.getElementById('enrolledCoarse') as HTMLDivElement).style.display="block";
    
}
function enrol(){
    alert("Enrolled Course: ");
}
function enrolledCoarses(){
    alert("Courses Enrolled");
    (document.getElementById('enrolledCoarse') as HTMLDivElement).style.display="none";
    (document.getElementById('enrolledCoarses') as HTMLDivElement).style.display="block";
}