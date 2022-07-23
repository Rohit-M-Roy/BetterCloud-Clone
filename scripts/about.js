
import navbar from '../components/navbar.js'

document.querySelector('nav').innerHTML = navbar();


// import footer from "../components/footer.js"

// document.querySelector("#k_foot").innerHTML=footer()


let year=()=>{
    let count=0;
    let id=setInterval(()=>{
        if(count===10)
        {
            clearInterval(id)
        }
        document.querySelector('#k_year').innerHTML=count;
        count++;

    },100)
}
year()

let emp=()=>{
    let count=0;
    let id=setInterval(()=>{
        if(count===330)
        {
            clearInterval(id)
        }
        document.querySelector('#k_emp').innerHTML=count+""+"+";
        count++;

    },10)
}
emp()

let office=()=>{
    let count=0;
    let id=setInterval(()=>{
        if(count===6)
        {
            clearInterval(id)
        }
        document.querySelector('#k_off').innerHTML=count;
        count++;

    },100)
}
office()


let myClick=()=>{
    window.location.href="about.html"
}

document.querySelector("#k_btn").addEventListener("click",myClick)



let myLastClick=()=>{
    window.location.href="about.html"
}

document.querySelector("#k_last_btn").addEventListener("click",myLastClick)



