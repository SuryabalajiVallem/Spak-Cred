(this["webpackJsonpspak-cred"]=this["webpackJsonpspak-cred"]||[]).push([[0],{210:function(e,t,a){},211:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(13),s=a.n(n),i=(a(210),a.p,a(211),a(19)),d=a(23),l=a(17),o=(a(212),a(441)),u=a(448),j=a(449),b=a(445),m=a(446),O=a(447),p=a(438),f=a(7),h=(new Date).getFullYear(),v=Array.from({length:12},(function(e,t){var a=t+1;return a<=9?"0"+a:a})),x=Array.from({length:9},(function(e,t){return h+t})),g=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(2)},formControl:{minWidth:120}}}));function N(e){var t=e.cardMonth,a=e.cardYear,n=e.onUpdateState,s=e.onFlipCreditCard,i=(e.cardNumberRef,e.cardHolderRef,e.cardDateRef,e.onCardInputFocus,e.onCardInputBlur,e.children),d=Object(r.useState)(""),p=Object(l.a)(d,2),h=p[0],N=p[1],C=c.a.useState(2),y=Object(l.a)(C,2),M=(y[0],y[1],c.a.useState("")),S=Object(l.a)(M,2),F=S[0],w=S[1],E=Object(r.useState)(""),Y=Object(l.a)(E,2),k=(Y[0],Y[1],g()),A=Object(r.useRef)(null),H=function(e){var t=e.target,a=t.name,r=t.value;if("cardCvv"===a){/^[0-9]{0,4}$/.test(e.target.value)&&(w(r),n(a,r))}else n(a,r)},L=function(e){for(var t="",a=[{regEx:/^4[0-9]{5}/gi,cardType:"VISA"},{regEx:/^5[1-5][0-9]{4}/gi,cardType:"MASTERCARD"},{regEx:/^3[47][0-9]{3}/gi,cardType:"AMEX"},{regEx:/^(5[06-8]\d{4}|6\d{5})/gi,cardType:"MAESTRO"}],r=0;r<a.length;r++)if(e.match(a[r].regEx)){t=a[r].cardType;break}if(0===e.indexOf("50")||0===e.indexOf("60")||0===e.indexOf("65"))for(var c="508500-508999|606985-607984|608001-608500|652150-653149".split("|"),n=0;n<c.length;n++){var s=parseInt(c[n].split("-")[0],10),i=parseInt(c[n].split("-")[1],10);if(e.substr(0,6)>=s&&e.substr(0,6)<=i&&e.length>=6){t="RUPAY";break}}return t},R=function(e,t,a,r){A.current.style.display="block",A.current.style.borderColor="white",A.current.style.transform="translate(".concat(e,"rem,").concat(t,"rem)"),A.current.style.height="".concat(r,"rem"),A.current.style.width="".concat(a,"rem")},I=function(){R("23","12.5","6","3.5")},T=function(){A.current.style.borderColor="transparent",A.current.style.transform="translate(0,0)"};return Object(f.jsxs)("div",{className:"credit-form-container",children:[Object(f.jsx)("div",{className:"card-list",children:i}),Object(f.jsx)("div",{ref:A,className:"card-box"}),Object(f.jsx)("div",{className:"credit-form-inner",children:Object(f.jsxs)(o.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(f.jsxs)(o.a,{item:!0,xs:12,className:"mb-2",children:[Object(f.jsx)(u.a,{htmlFor:"my-input",children:"Card Number"}),Object(f.jsx)(j.a,{type:"text",value:h,className:"form-control",autoComplete:"off",label:"Enter Card Number",variant:"outlined",name:"cardNumber",onChange:function(e){var t=e.target,a=t.name,r=t.value,c=e.target.value.replaceAll(" ","");if(/^[0-9]{0,16}$/.test(c)){var s=L(c).toLowerCase();if("amex"===(s=0===s.length?"visa":s)){var i=(c.slice(0,4).replace(/(.{4})/g,"$1 ")+c.slice(4,10).replace(/(.{6})/g,"$1 ")+c.slice(10,15)).trim();N(i)}else N(c.replace(/(.{4})/g,"$1 ").trim())}n(a,r)},onFocus:function(){R("1.5","8","21","3")},onBlur:T})]}),Object(f.jsxs)(o.a,{item:!0,xs:12,className:"mb-2",children:[Object(f.jsx)(u.a,{htmlFor:"my-input",children:"Card Holder"}),Object(f.jsx)(j.a,{style:{width:"100%"},id:"outlined-basic",name:"cardHolder",type:"tel",autoComplete:"off",label:"Enter Card Holder",onChange:H,onFocus:function(){R("1.5","12.5","8","3.6")},onBlur:T,variant:"outlined"})]}),Object(f.jsxs)(o.a,{item:!0,xs:3,spacing:3,className:"mb-2",children:[Object(f.jsx)(u.a,{htmlFor:"my-input",children:"Expiry Date"}),Object(f.jsxs)(b.a,{variant:"outlined",className:k.formControl,children:[Object(f.jsx)(u.a,{id:"demo-simple-select-outlined-label",children:"Month"}),Object(f.jsx)(m.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",name:"cardMonth",onChange:H,onFocus:I,onBlur:T,value:t,label:"Month",children:v.map((function(e,t){return Object(f.jsx)(O.a,{value:e,children:e})}))})]})]}),Object(f.jsx)(o.a,{item:!0,xs:3,className:"mb-2 pt-28",children:Object(f.jsxs)(b.a,{variant:"outlined",className:k.formControl,children:[Object(f.jsx)(u.a,{id:"demo-simple-select-outlined-label",children:"Year"}),Object(f.jsx)(m.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",name:"cardYear",onChange:H,onFocus:I,onBlur:T,value:a,label:"Year",children:x.map((function(e,t){return Object(f.jsx)(O.a,{value:e,children:e})}))})]})}),Object(f.jsxs)(o.a,{item:!0,xs:6,className:"mb-2",children:[Object(f.jsx)(u.a,{htmlFor:"my-input",children:"CVV"}),Object(f.jsx)(j.a,{style:{width:"100%"},value:F,onFocus:function(){s("180deg")},onBlur:function(){s("360deg")},name:"cardCvv",onChange:H,id:"outlined-basic",type:"tel",autoComplete:"off",label:"Enter CVV",variant:"outlined"})]})]})})]})}var C=a(78),y=a(56),M={cardNumber:"#### #### #### ####",cardHolder:"FULL NAME",cardMonth:"",cardYear:"",cardCvv:"",isCardFlipped:!1},S={visa:"^4",amex:"^(34|37)",mastercard:"^5[1-5]",discover:"^6011",unionpay:"^62",troy:"^9792",diners:"^(30[0-5]|36)"},F=function(e){var t=Object(r.useState)(M),a=Object(l.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(null),o=Object(l.a)(s,2),u=(o[0],o[1],Object(r.useState)([])),j=Object(l.a)(u,2),b=j[0],m=j[1],O=(Object(r.useCallback)((function(e,t){n(Object(d.a)(Object(d.a)({},c),{},Object(i.a)({},e,t||M[e])))}),[c]),Object(r.useMemo)((function(){return function(e){for(var t,a=e,r=0,c=Object.entries(S);r<c.length;r++){var n=Object(l.a)(c[r],2),s=n[0],i=n[1];if(t=new RegExp(i),null!=a.match(t))return s}return"visa"}(e.cardNumber)}),[e.cardNumber]));return Object(r.useEffect)((function(){var t,a=[],r=e.cardCvv.split(""),c=Object(C.a)(r);try{for(c.s();!(t=c.n()).done;){t.value;a.push("*")}}catch(n){c.e(n)}finally{c.f()}m(a)}),[e.cardCvv]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"blackStrip"}),Object(f.jsx)("div",{className:"m-2 mt-3 d-flex justify-content-end",children:Object(f.jsx)("div",{className:"cvv",children:"CVV"})}),Object(f.jsx)("div",{className:"m-2 whiteStrip d-flex justify-content-end",children:Object(f.jsx)("div",{className:"cvvValue",children:e.cardCvv&&b.map((function(e,t){return Object(f.jsx)(y.a,{inline:!0,text:e,springConfig:{stiffness:80,damping:20},direction:"down",className:"num pr-3"},t)}))})}),Object(f.jsx)("div",{className:"mt-4 m-1 d-flex justify-content-end",children:Object(f.jsx)("img",{alt:O,src:"/Spak-Cred"+"/credit-card-types/".concat(O,".png"),className:"card-type-image"})})]})})},w={cardNumber:"#### #### #### ####",cardHolder:"FULL NAME",cardMonth:"",cardYear:"",cardCvv:"",isCardFlipped:!1},E={visa:"^4",amex:"^(34|37)",mastercard:"^5[1-5]",discover:"^6011",unionpay:"^62",troy:"^9792",diners:"^(30[0-5]|36)"},Y=function(e){var t=Object(r.useState)(w),a=Object(l.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)("#### #### #### ####".split("")),o=Object(l.a)(s,2),u=o[0],j=o[1],b=Object(r.useState)(null),m=Object(l.a)(b,2),O=(m[0],m[1],Object(r.useCallback)((function(e,t){n(Object(d.a)(Object(d.a)({},c),{},Object(i.a)({},e,t||w[e])))}),[c]),Object(r.useMemo)((function(){return function(e){for(var t,a=e,r=0,c=Object.entries(E);r<c.length;r++){var n=Object(l.a)(c[r],2),s=n[0],i=n[1];if(t=new RegExp(i),null!=a.match(t))return s}return"visa"}(e.cardNumber)}),[e.cardNumber]));Object(r.useEffect)((function(){var e=u.map(p);j(e)}),[e.cardNumber]);var p=function(t,a){return"amex"===e.type?4===a||11===a?" ":a<4||a>13?void 0===e.cardNumber[a]?"#":e.cardNumber[a]:void 0===e.cardNumber[a]?"#":"*":4===a||9===a||14===a?" ":a<4||a>14?void 0===e.cardNumber[a]?"#":e.cardNumber[a]:void 0===e.cardNumber[a]?"#":"*"};return Object(f.jsxs)("div",{style:{color:"white"},children:[Object(f.jsxs)("div",{className:"p-4 d-flex justify-content-between",children:[Object(f.jsx)("img",{src:"/Spak-Cred/credit-card-images/chip.png",className:"chip",alt:"chip"}),Object(f.jsx)("img",{alt:O,src:"/Spak-Cred"+"/credit-card-types/".concat(O,".png"),className:"card-type-image"})]}),Object(f.jsx)("div",{className:"numRow mt-3 align-middle card-number-section",children:Object(f.jsx)("strong",{children:"amex"===e.type?u.slice(0,17).map((function(e,t){return Object(f.jsx)(y.a,{inline:!0,text:e,springConfig:{stiffness:80,damping:20},direction:"down",className:"num pr-3"},t)})):u.map((function(e,t){return Object(f.jsx)(y.a,{inline:!0,text:e,springConfig:{stiffness:80,damping:20},direction:"down",className:"num pr-3"},t)}))})}),Object(f.jsxs)("div",{className:"row card-holder-expiry-section",children:[Object(f.jsxs)("div",{className:"col-9",children:[Object(f.jsx)("div",{className:"row h6 metaText",children:"Card Holder"}),Object(f.jsx)("div",{className:"row h6",children:Object(f.jsx)("div",{className:"pr-3 h6",children:e.cardHolder||"VALLEM SURYA BALAJI"})})]}),Object(f.jsxs)("div",{className:"col-3",children:[Object(f.jsx)("div",{className:"row h6 metaText",children:"Expiry"}),Object(f.jsxs)("div",{className:"row h6",children:[Object(f.jsx)(y.a,{inline:!0,text:e.cardMonth||"MM",springConfig:{stiffness:80,damping:20},className:"p-0 h6 mon",direction:"down"}),"/",Object(f.jsx)(y.a,{inline:!0,text:e.cardYear.toString().substr(2,2)||"YY",springConfig:{stiffness:80,damping:20},className:"p-0 h6",direction:"down"})]})]})]})]})},k={cardNumber:"#### #### #### ####",cardHolder:"FULL NAME",cardMonth:"",cardYear:"",cardCvv:"",isCardFlipped:!1},A=function(){var e=Math.floor(25*Math.random()+1);return"".concat(e,".jpeg")}(),H=function(e){var t=Object(r.useState)(k),a=Object(l.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(null),o=Object(l.a)(s,2),u=(o[0],o[1],Object(r.useRef)({}));Object(r.useCallback)((function(e,t){n(Object(d.a)(Object(d.a)({},c),{},Object(i.a)({},e,t||k[e])))}),[c]);Object(r.useEffect)((function(){u.current.style.transform="rotateY("+e.toggle+")"}),[e.toggle]),console.log("BACKGROUND_IMG",A);var j={backgroundImage:"url(/Spak-Cred"+"/credit-card-background/".concat(A)+")"};return Object(f.jsx)("div",{className:"card-container",children:Object(f.jsxs)("div",{className:"card-main",ref:u,children:[Object(f.jsx)("div",{className:"card-img card-front ",style:j,children:Object(f.jsx)(Y,{cardNumber:e.cardNumber,cardHolder:e.cardHolder,cardMonth:e.cardMonth,cardYear:e.cardYear})}),Object(f.jsx)("div",{className:"card-img card-back",style:j,children:Object(f.jsx)(F,{cardNumber:e.cardNumber,cardCvv:e.cardCvv})})]})})},L={cardNumber:"#### #### #### ####",cardHolder:"FULL NAME",cardMonth:"",cardYear:"",cardCvv:"",isCardFlipped:!1,toggle:"0deg"},R=function(){var e=Object(r.useState)(L),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(null),s=Object(l.a)(n,2),o=s[0],u=(s[1],Object(r.useCallback)((function(e,t){c(Object(d.a)(Object(d.a)({},a),{},Object(i.a)({},e,t||L[e])))}),[a])),j=Object(r.useCallback)((function(e){c(Object(d.a)(Object(d.a)({},a),{},{toggle:e||L.toggle}))}),[a]);return Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(N,{cardMonth:a.cardMonth,cardYear:a.cardYear,onUpdateState:u,onFlipCreditCard:j,children:Object(f.jsx)(H,{cardNumber:a.cardNumber,cardHolder:a.cardHolder,cardMonth:a.cardMonth,cardYear:a.cardYear,cardCvv:a.cardCvv,isCardFlipped:a.isCardFlipped,toggle:a.toggle,onUpdateState:!0,onFlipCreditCard:!0,currentFocusedElm:o})})})};var I=function(){return Object(f.jsx)(R,{})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,451)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),T()}},[[403,1,2]]]);
//# sourceMappingURL=main.4bbc8dd6.chunk.js.map