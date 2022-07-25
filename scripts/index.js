import navbar from '../components/navbar.js'

document.querySelector('nav').innerHTML = navbar();


//  Mid Body Part 1

let midBodyPart1ButtonDetails = [
    {
        image:'https://www.bettercloud.com/wp-content/uploads/2021/07/34-2048x1316.png',
        title:'Enhance overall satisfaction and productivity',
        description:'Remove friction from the employee experience and gain deeper insight into the tools your people use to do their job and communicate internally',
        points:[
            'Automated app discovery','Application insights','Usage analytics'
        ]
    },
    {
        image:'https://www.bettercloud.com/wp-content/uploads/2021/07/9-1-2048x1296.png',
        title:'Provide security that empowers, not overpowers',
        description:'Proactively reduce security exposure from data oversharing with automated security policies that effectively monitor and remediate threats across your SaaS enviroment.',
        points:[
            'Sensitive data discovery','Risky app mitigation','Least privilege access','Regulatory compliance'
        ]
    },
    {
        image:'https://www.bettercloud.com/wp-content/uploads/2021/07/5-1.png',
        title:'Automate to innovate',
        description:'Purpose-built for IT, no-code automated workflows maximize operational efficiency by reducing employee downtime, right-sizing SaaS spend,and freeing up time for more strategic projects.',
        points:[
            'Automate onboarding, offboarding & mid-life cycle changes','Streamline help desk ticket resolution','Optimize license allocation'
        ]
    }
]

let midBodyPart1Displayer = (detailNo)=>
{
    const card = document.createElement('div');
    card.setAttribute('class','midBodyPart1Details');
    const img = document.createElement('img');
    img.src = detailNo.image;
    const innercard1 = document.createElement('div');
    innercard1.append(img);
    const innercard2 = document.createElement('div');
    const title = document.createElement('h2');
    title.innerText = detailNo.title;
    const des = document.createElement('p');
    des.innerText = detailNo.description;
    innercard2.append(title,des);
    for(let i=0;i<detailNo.points.length;i++)
    {
        const pointsDiv = document.createElement('div');
        pointsDiv.setAttribute('class','pointsDiv');
        const greenTick = document.createElement('img');
        greenTick.src = 'https://www.bettercloud.com/wp-content/uploads/2021/06/green-bullet.png';
        const point = document.createElement('p');
        point.innerText = detailNo.points[i];
        pointsDiv.append(greenTick,point);
        innercard2.append(pointsDiv);
    }
    const btn = document.createElement('button');
        btn.setAttribute('class','learnMoreBtn');
        btn.innerText = 'LEARN MORE';
    innercard2.append(btn);
    card.append(innercard1,innercard2);
    document.querySelector('#midBodyPart1Details').append(card);
}

//on load
document.querySelector('#midBodyPart1Details').innerHTML=null;
    document.getElementById('TranfromBtn').style.backgroundColor = '#eaeaea';
    midBodyPart1Displayer(midBodyPart1ButtonDetails[0]);

//Click Button Dom Link 
document.querySelector('#TranfromBtn').addEventListener('click',()=>{
    document.querySelector('#midBodyPart1Details').innerHTML=null;
    document.getElementById('TranfromBtn').style.backgroundColor = '#eaeaea';
    document.getElementById('MaximiseBtn').style.backgroundColor = 'white';
    document.getElementById('centralizeDataBtn').style.backgroundColor = 'white';
    midBodyPart1Displayer(midBodyPart1ButtonDetails[0]);
});
document.querySelector('#centralizeDataBtn').addEventListener('click',()=>{
    document.querySelector('#midBodyPart1Details').innerHTML=null;
    document.getElementById('centralizeDataBtn').style.backgroundColor = '#eaeaea';
    document.getElementById('TranfromBtn').style.backgroundColor = 'white';
    document.getElementById('MaximiseBtn').style.backgroundColor = 'white';
    midBodyPart1Displayer(midBodyPart1ButtonDetails[1]);
});
document.querySelector('#MaximiseBtn').addEventListener('click',()=>{
    document.querySelector('#midBodyPart1Details').innerHTML=null;
    document.getElementById('MaximiseBtn').style.backgroundColor = '#eaeaea';
    document.getElementById('centralizeDataBtn').style.backgroundColor = 'white';
    document.getElementById('TranfromBtn').style.backgroundColor = 'white';
    midBodyPart1Displayer(midBodyPart1ButtonDetails[2]);
});





//News Feed
let newsResource = [
    {
        Img:"./images/NewsFeedbodyImg1.png",
        Title:"Why OAuth Apps Are a Security Risk in SaaS Management",
        Body:"OAuth apps can create an incredible user experience, but let’s explore some of the reasons why they’re a security risk in SaaS management.",
        Author:"RICHARD MOY",
    },
    {
        Img:"./images/NewsFeedbodyImg2.png",
        Title:"How to Keep Sensitive Data Safe with Automated Offboarding",
        Body:"Automating employee offboarding is more than just a time saver—it is a critical way to protect sensitive data. Learn how automate zero touch offboarding in a SaaS management platform to keep your SaaS data safe.",
        Author:"MANDIE SELLARS",
    },
    {
        Img:"./images/NewsFeedbodyImg3.png",
        Title:"How to Automate File Security in a SaaS Management Platform",
        Body:"Learn why and how you should use an SMP to uncover improperly shared files, locate sensitive data, and use workflows to automatically fix file sharing actions that violate your security policies.",
        Author:"MANDIE SELLARS",
    }
]


let NewsFeedDisplayer = ()=>
{
    let cont = document.querySelector('#neewsFeedContainer');
    newsResource.forEach((ele)=>{
        const card = document.createElement('div');
        card.setAttribute("class",'news');
        const img = document.createElement('img');
        img.src = ele.Img;
        const title = document.createElement('h3');
        title.innerText = ele.Title;
        const body = document.createElement('p');
        body.innerText = ele.Body;
        const innercard = document.createElement('div');
        innercard.setAttribute('class','authorTime');
        const author = document.createElement('p');
        author.innerText = ele.Author;
        const timeRead = document.createElement('p');
        timeRead.innerText = '5 MIN READ';
        innercard.append(author,timeRead);
        card.append(img,title,body,innercard);
        cont.append(card);
    })

}

NewsFeedDisplayer();


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
    window.location.href ='microsoft.html';
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

///Footer

import footer from '../components/footer.js';

document.querySelector('#footer_index').innerHTML = footer();