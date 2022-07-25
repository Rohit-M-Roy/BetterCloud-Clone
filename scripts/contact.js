import navbar from '../components/navbar.js'

document.querySelector('nav').innerHTML = navbar();


let submit=()=>{
    alert("Thank you for your Responce,Team will get back to you!!!")

    window.location.reload()

}
document.querySelector("#k_submit").addEventListener("click",submit);

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
document.querySelector('#microsoft_r').addEventListener('click',microsoft_redirect);

function microsoft_redirect()
{
    window.location.href ='microsoft workspace/microsoft.html';
}


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