let navbar = ()=>
{
    return `<div id="navFirstHalf">
    <div id="navbar_logo">
        <img src="./images/bettercloud-white-logo.png" alt="logo">
        <img src="./images/bettercloud-logo.png" alt="black_logo">
    </div>
    <ul id="navbarMainOptions">
        <li>PRODUCTS</li>
        <li>SOLUTION</li>
        <li>CUSTOMER</li>
        <li>RESOURCES</li>
        <li>COMPANY</li>
    </ul>
</div>
<div id="navbar_second_half">
    <span id="person_icon" class="material-symbols-outlined">
        person
        </span>
    <span id="search_icon" class="material-symbols-outlined">
            search
            </span>
    <button id="request_a_demo_button">REQUEST A DEMO</button>
</div>`
}

export default navbar;