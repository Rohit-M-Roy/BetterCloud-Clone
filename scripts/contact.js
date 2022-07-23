import navbar from '../components/navbar.js'

document.querySelector('nav').innerHTML = navbar();


let submit=()=>{
    alert("Thank you for your Responce,Team will get back to you!!!")

    window.location.reload()

}
document.querySelector("#k_submit").addEventListener("click",submit)