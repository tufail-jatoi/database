
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase,ref,set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCePKl7K8oZ0e5LZ5X5nnO4PdzTzurlr2w",
    authDomain: "database-5203d.firebaseapp.com",
    projectId: "database-5203d",
    storageBucket: "database-5203d.appspot.com",
    messagingSenderId: "77496352291",
    appId: "1:77496352291:web:2b9cee82812cce83597b96",
    measurementId: "G-ZPT3P8S4FJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const database = getDatabase();

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var contact = document.getElementById("contact");
var cnic = document.getElementById("cnic");
var lastQualification = document.getElementById("lastQualification");
var course = document.getElementById("course");
var parent = document.getElementById("parent");


window.saveTask = function(){
    var obj = {
        task: course.value,lastQualification.value,cnic.value,contact.value,password.value,email.value, lastName.value,
        title: firstName.value,
    };
    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `tasks/${obj.id}/`);
    set(reference,obj);
    console.log(obj);
};

function getData(){
    let reference = ref(database, "tasks/")
    let arr = [];
    onChildAdded(reference, function(data){
        arr.push(data.val());
        console.log(arr);
        parent.innerHTML = "";
        for(var i = 0; i < arr.length; i++){
            parent.innerHTML += `<li>${arr[i].task}</li>`
        }
    });
}

getData();


