import{b as p,c as d,u as x,r as h,a as u,d as f,j as e,C as g}from"./index-ad1c9c8c.js";import{b as j}from"./icons8-bedroom-96-ee3038fa.js";function w(){const{id:l}=p(),{auth:s}=d(),{rentList:o,setIsMOdal:r,isModal:i}=x(),t=o==null?void 0:o.find(n=>n.id===l);h.useEffect(()=>{document.title=`e-gency | ${t.name}`});const a=u(),c=f(),m=()=>{s!=null&&s.accessToken?r(!0):window.confirm("You must be logged in to contact owner, Log in?")&&a("/login",{state:{from:c},replace:!0})};return t?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>a(-1),className:" text-white  rounded-3xl bg-gray-900 pr-8  p-2  hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 ",children:"👈back"}),e.jsx("div",{className:" items-center pb-36",children:e.jsxs("div",{className:"text-center laptop:flex laptop:justify-center desktop:flex desktop:justify-center",children:[e.jsx("img",{src:t.image,alt:t.name,className:"laptop:w-[40vw] laptop:h-[60vh] macBook:w-full desktop:w-[40vw] desktop:h-[60vh] rounded-lg"}),e.jsxs("div",{className:" laptop:m-16 laptop:text-3xl desktop:m-16 desktop:text-3xl font-extrabold",children:[e.jsx("h2",{children:t.name}),e.jsxs("div",{className:" flex justify-center gap-2 items-center",children:[t.sittingroom&&e.jsxs("div",{className:" flex justify-center items-center gap-1",children:[e.jsx("p",{className:" laptop:text-4xl phone:text-2xl small:text-2xl",children:t.sittingroom}),e.jsx("img",{className:" laptop:w-8 laptop:h-8 phone:w-6 phone:h-6 small:w-6 small:h-6 phone:mb-2 small:mb-2",src:"https://img.icons8.com/ios-filled/50/living-room.png",alt:"living-room"})]}),e.jsxs("div",{className:" flex justify-center items-center gap-1",children:[e.jsx("p",{className:" laptop:text-4xl phone:text-2xl small:text-2xl",children:t.bedroom}),e.jsx("img",{src:j,className:" laptop:w-8 laptop:h-8 phone:w-6 phone:h-6 small:w-6 small:h-6 phone:mb-2 small:mb-2"})]})]}),e.jsxs("p",{children:["📌: ",t.location]}),e.jsxs("p",{children:["Rent: ₦",t.rent]}),e.jsx("button",{onClick:m,className:"text-white rounded-3xl bg-gray-900 pr-8 p-2 hover:transform hover:translate-x-[5px] hover:scale-[1.03] transition duration-300 ease-in-out border-2 border-gray-300 m-4",children:"Contact the owner"})]})]})}),i&&e.jsx(g,{})]}):e.jsx("div",{children:"Item not found"})}export{w as default};
