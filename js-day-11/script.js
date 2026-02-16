// console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
// function myfuc(cb) {
//     setTimeout(() => {
//        // return"hello world";
//        cb("hello world");
//     }, 5000);
// }
// myfuc((data)=>{
//     console.log(data);
// })

// //console.log(myfuc());//undefined
// myfuc(()=>{}) 
// console.log("asdfghjkl");

console.log("Start......letssss gooooo")
function login(uname, password, cb) {
    setTimeout(() => {
        cb({ umane: uname, isloggedin: true, message: "login successfulllll yayyyyyyyy" });
    }, 1000);
}

function getvdolist(email, cb) {
    setTimeout(() => {
        cb([{ title: "vdo 1" }, { title: "vdo 2" }])
    }, 2000);
}
function getvdodetail(vdo, cb) {
    setTimeout(() => {
        cb({ title: VideoColorSpace.title, description: "this is a vdo about" + vdo.title })
    }, 2000)
}

login("akanksha@gmail.com", "password", (userdata) => {
    console.log(userdata);
    getvdolist(userdata.uname, (vdolist) => {
        console.log(vdolist);
        getvdodetail(vdolist[0], (vdodetail) => {
            console.log(vdodetail);
        });
    });
});
console.log("end byeeeeeeee")