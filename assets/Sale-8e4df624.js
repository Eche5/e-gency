import{u as a,a as r,r as i,j as e,b as l,N as n}from"./index-2e288785.js";function d(){const{saleList:t}=a(),o=r();return i.useEffect(()=>{document.title="e-gency | sale"}),e.jsxs("div",{className:" phone:pb-36 iphone:pb-36 small:pb-36",children:[e.jsx("button",{onClick:()=>o(-1),className:" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 ",children:"👈back"}),e.jsx("h1",{className:" text-center text-3xl font-bold",children:"Houses for Sale"}),e.jsx("ul",{className:"laptop:grid laptop:grid-cols-2 laptop:m-8 laptop:gap-8 desktop:grid desktop:grid-cols-2 desktop:m-8 desktop:gap-8",children:t.map(s=>e.jsxs("li",{className:" flex justify-start gap-8 phone:mb-6 iphone:mb-6 small:mb-6",children:[e.jsx("img",{src:s.image,alt:"studio2",className:s.isActive?"laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg":"laptop:w-48 laptop:h-48 phone:w-48 phone:h-48 iphone:w-48 iphone:h-48 small:w-48 small:h-48 rounded-lg grayscale"}),e.jsxs("div",{children:[e.jsxs("p",{className:" text-2xl text-[1rem] font-bold",children:[s.name," "]}),e.jsxs("p",{className:" flex",children:[e.jsxs("div",{className:" flex mr-2 gap-2",children:[s.sittingroom&&e.jsxs("div",{className:" flex justify-center",children:[s.sittingroom,e.jsx("img",{width:"20",height:"8",src:"https://img.icons8.com/ios-filled/50/living-room.png",alt:"living-room"})]}),e.jsxs("div",{className:" flex justify-center",children:[s.bedroom,e.jsx("img",{src:l,className:" w-4 h-[1.2rem]"})]})]}),e.jsx("span",{children:"📌 "}),s.location]}),e.jsxs("p",{className:" text-gray-950 mt-2",children:["₦",s.amount]}),e.jsx(n,{to:`${s.id}`,children:e.jsxs("button",{disabled:!s.isActive,className:s.isActive?" text-white  rounded-3xl bg-gray-900 px-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 laptop:m-4":"text-white  rounded-3xl bg-gray-300 px-8  p-2  ease-in-out border-2 border-gray-300 laptop:m-4 cursor-not-allowed",children:[s.isActive?"View":"Sold"," "]})})]})]},s.image))})]})}export{d as default};
