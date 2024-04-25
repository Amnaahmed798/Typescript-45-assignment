const userName = ["admin" , "amna" ,"ali" ,"umer" ,"aslam"];

for(let i=0 ; i<userName.length; i++){

if(userName[i] === "admin"){
    console.log('hello admin, would you like to see a status report?');
}
else{
    console.log(`hello ${userName[i]} , thank you for logging in again. `)
}
}