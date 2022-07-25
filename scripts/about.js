
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


// linking
document.querySelector('#manage_r').addEventListener('click',manage_redirect);
document.querySelector('#discover_r').addEventListener('click',discover_redirect);
document.querySelector('#automation_r').addEventListener('click',automation_redirect);
document.querySelector('#google_r').addEventListener('click',google_redirect);
document.querySelector('#about_r').addEventListener('click',about_redirect);
document.querySelector('#index_r').addEventListener('click',index_redirect);
document.querySelector('.contact_r').addEventListener('click',contact_redirect);
document.querySelector('#monitor_r').addEventListener('click',monitor_redirect);
document.querySelector('#contact_r').addEventListener('click',contact_redirect);


function monitor_redirect()
{
    window.location.href ='monitor.html';
}

function contact_redirect()
{
    window.location.href ='contact.html';
}

function index_redirect()
{
    window.location.href ='index.html';
}

function discover_redirect()
{
    window.location.href = 'discover.html';
}

function manage_redirect()
{
    window.location.href='manage.html';
}

function automation_redirect()
{
    window.location.href = 'automation.html';
}
function google_redirect()
{
    window.location.href = 'google.html';
}
function about_redirect()
{
    window.location.href = 'about.html';
}