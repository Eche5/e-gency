import{u as r,j as s,N as t}from"./index-08a34dbe.js";import{b as a}from"./icons8-bedroom-96-ee3038fa.js";function l(){const{saleList:e}=r();return s.jsx("div",{children:s.jsx("ul",{className:"grid grid-cols-2 m-8 gap-8",children:e.map(i=>s.jsxs("li",{className:" flex justify-start gap-8",children:[s.jsx("img",{src:i.image,alt:"studio2",className:"w-48 h-48 rounded-lg"}),s.jsxs("div",{children:[s.jsxs("p",{className:" text-2xl font-bold",children:[i.name," "]}),s.jsxs("p",{className:" flex",children:[s.jsxs("div",{className:" flex mr-2 gap-2",children:[i.sittingroom&&s.jsxs("div",{className:" flex justify-center",children:[i.sittingroom,s.jsx("img",{width:"20",height:"8",src:"https://img.icons8.com/ios-filled/50/living-room.png",alt:"living-room"})]}),s.jsxs("div",{className:" flex justify-center",children:[i.bedroom,s.jsx("img",{src:a,className:" w-4 h-[1.2rem]"})]})]}),s.jsx("span",{children:"📌 "}),i.location]}),s.jsxs("p",{className:" text-gray-950 mt-2",children:["₦",i.amount]}),s.jsx(t,{to:`${i.id}`,children:s.jsxs("button",{className:" text-white  rounded-3xl bg-gray-900 px-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4",children:["View"," "]})})]})]},i.image))})})}export{l as default};