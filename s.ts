// <div class="menu">
//     <ul class="list">
//         <li class="item">Home</li>
//         <li class="item">About</li>
//         <li class="item">Contact</li>
//     </ul>
// </div>

// 1️⃣ Write CSS selector for all li inside ul.list.
// 2️⃣ Write XPath for the same.
//ul.list>li
// //ul[@class='list]/li

//

// <div class="profile">
//     <div class="info">
//         <span class="name">Alice</span>
//         <span class="age">30</span>
//     </div>
//     <div class="actions">
//         <button>Edit</button>
//         <button>Delete</button>
//     </div>
// </div>

// 1️⃣ CSS selector to select all buttons inside div.actions.
// 2️⃣ XPath to select the same buttons.

//  css: div.actions > button;l > → direct child; div.actions → the parent
/// xpath: // //div[@class='actions']/button
///* if i need only Edit botton then :
//div[@st class='actions']/button[text()='edit']

// <div class="actions">
//     <button> Edit </button>
//     <button> Delete </button>
// </div>

//  //div[@class='actions']/button[normalize-space(text())='Delete')];
