import{r as w}from"./index-ae4a7961.js";var p="NOT_FOUND";function B(r){var t;return{get:function(a){return t&&r(t.key,a)?t.value:p},put:function(a,c){t={key:a,value:c}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function K(r,t){var e=[];function a(o){var n=e.findIndex(function(s){return t(o,s.key)});if(n>-1){var u=e[n];return n>0&&(e.splice(n,1),e.unshift(u)),u.value}return p}function c(o,n){a(o)===p&&(e.unshift({key:o,value:n}),e.length>r&&e.pop())}function i(){return e}function l(){e=[]}return{get:a,put:c,getEntries:i,clear:l}}var D=function(t,e){return t===e};function M(r){return function(e,a){if(e===null||a===null||e.length!==a.length)return!1;for(var c=e.length,i=0;i<c;i++)if(!r(e[i],a[i]))return!1;return!0}}function I(r,t){var e=typeof t=="object"?t:{equalityCheck:t},a=e.equalityCheck,c=a===void 0?D:a,i=e.maxSize,l=i===void 0?1:i,o=e.resultEqualityCheck,n=M(c),u=l===1?B(n):K(l,n);function s(){var A=u.get(arguments);if(A===p){if(A=r.apply(null,arguments),o){var h=u.getEntries(),g=h.find(function(f){return o(f.value,A)});g&&(A=g.value)}u.put(arguments,A)}return A}return s.clearCache=function(){return u.clear()},s}function Y(r){var t=Array.isArray(r[0])?r[0]:r;if(!t.every(function(a){return typeof a=="function"})){var e=t.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function q(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var c=function(){for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];var u=0,s,A={memoizeOptions:void 0},h=o.pop();if(typeof h=="object"&&(A=h,h=o.pop()),typeof h!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof h+"]");var g=A,f=g.memoizeOptions,v=f===void 0?e:f,k=Array.isArray(v)?v:[v],G=Y(o),m=r.apply(void 0,[function(){return u++,h.apply(null,arguments)}].concat(k)),E=r(function(){for(var y=[],S=G.length,R=0;R<S;R++)y.push(G[R].apply(null,arguments));return s=m.apply(null,y),s});return Object.assign(E,{resultFunc:h,memoizedResultFunc:m,dependencies:G,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),E};return c}var P=q(I);const C=(r,t)=>{let e,a;switch(t){case"Lose fat":e=.25,a=.2;break;case"Gain Muscle":e=.3,a=.2;break;case"Maintain":e=.2,a=.25;break;default:e=.25,a=.2}const c=1-(e+a),i=Math.round(c*r/4),l=Math.round(e*r/4),o=Math.round(a*r/9);return{proteinGoal:l,fatGoal:o,carbsGoal:i}},V=r=>r.foodIntake.waterIntake,x=P(r=>r.foodIntake.items,r=>{const t=["Breakfast","Lunch","Dinner","Snack"],e=t.map(a=>({mealType:a,carbonohidrates:0,protein:0,fat:0}));return r.forEach(a=>{const{mealType:c,carbonohidrates:i,protein:l,fat:o}=a,n=t.indexOf(c);n!==-1&&(e[n].carbonohidrates+=i,e[n].protein+=l,e[n].fat+=o)}),e}),H=P([r=>r.foodIntake.items,r=>r.auth.user.BMR,r=>r.auth.user.goal],(r,t,e)=>{const{caloriesFact:a,carbFact:c,proteinFact:i,fatFact:l}=r.reduce((s,{carbonohidrates:A,protein:h,fat:g,calories:f})=>(s.caloriesFact+=f,s.carbFact+=A,s.proteinFact+=h,s.fatFact+=g,s),{caloriesFact:0,carbFact:0,proteinFact:0,fatFact:0}),{carbsGoal:o,proteinGoal:n,fatGoal:u}=C(t,e);return{Calories:{fact:a,goal:t},Carbonohidrates:{fact:c,goal:o},Protein:{fact:i,goal:n},Fat:{fact:l,goal:u}}}),X=P(r=>r.foodIntake.items,r=>{const t={Breakfast:[],Lunch:[],Dinner:[],Snack:[]};return r.forEach(e=>{const a=e.mealType;t[a]&&t[a].push(e)}),Object.keys(t).map(e=>({type:e,data:t[e]}))}),O="data:image/png;base64,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",z="/HealthyHub/assets/Breakfast@2x-4fcc321b.png",Q="data:image/png;base64,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",U="/HealthyHub/assets/Lunch@2x-0c478530.png",F="data:image/png;base64,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",T="/HealthyHub/assets/Dinner@2x-d707147b.png",b="data:image/png;base64,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",L="/HealthyHub/assets/Snack@2x-952e2b03.png",j={Breakfast:[O,z],Lunch:[Q,U],Dinner:[F,T],Snack:[b,L]};let N=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((t,e)=>(e&=63,e<36?t+=e.toString(36):e<62?t+=(e-26).toString(36).toUpperCase():e>62?t+="-":t+="_",t),"");const Z=r=>w.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},w.createElement("path",{d:"M9.57007 5.93018L3.50007 12.0002L9.57007 18.0702",stroke:"#B6B6B6",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),w.createElement("path",{d:"M20.5 12H3.67",stroke:"#B6B6B6",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}));export{Z as S,V as a,H as b,X as c,j as m,N as n,x as s};