(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){},175:function(e,t,a){},193:function(e,t,a){e.exports=a(697)},199:function(e,t,a){},671:function(e,t,a){},681:function(e,t,a){},682:function(e,t,a){e.exports=a.p+"static/media/bmichart.db64506d.png"},683:function(e,t,a){},697:function(e,t,a){"use strict";a.r(t);a(194);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=(a(199),a(49)),s=a(50),c=a(55),m=a(51),u=a(56),h=a(191),d=a(41),p=a(64),g=a(57),f=a.n(g),y=a(75),E=a(83),w=a(52),b=a(732),v=a(745),x=a(746),N=a(743),k=a(181);a(671);var B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.Auth.signIn(a.state.email,a.state.password);case 4:alert("Logged in"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert("Slow down cowboy, this isn't yeehaw szn yet \nWe're still in dev, \nbut you can still try the Calculator free!");case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("p",null," Please Login / Signup to get started"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(b.a,{controlId:"email",bsSize:"large"},r.a.createElement(v.a,{className:"mb-3",size:"lg",autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,null,"Email")),r.a.createElement(x.a,null))),r.a.createElement(b.a,{controlId:"password",bsSize:"large"},r.a.createElement(v.a,{className:"mb-3",size:"lg",value:this.state.password,onChange:this.handleChange,type:"password"},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,null,"Password")),r.a.createElement(x.a,null))),r.a.createElement(N.a,{className:"ButtonLogin",block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit"},"Login"),r.a.createElement(N.a,{className:"ButtonSignup",block:!0,bsSize:"large",type:"signup",variant:"secondary"},"Signup"),r.a.createElement("p",{style:{marginTop:"40px",fontStyle:"italic"}},"- OR -"),r.a.createElement(N.a,{style:{color:"white"},block:!0,className:"ButtonTest",onClick:function(){window.location.assign("/Calculator")}},"Get started free!")))}}]),t}(n.Component),M=(a(681),a(82)),T=a.n(M);var F=function(){var e=Object(n.useState)({visits:0,comments:[]}),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)(function(){!function(){var e=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/Home/visits");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,l(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("header",{className:"Homepage-header"},r.a.createElement("h1",{className:"h1"},"Welcome to"),r.a.createElement("img",{style:{height:"200px"},src:T.a,className:"App-logo",alt:"prepit logo"}),r.a.createElement(B,null),r.a.createElement("p",{style:{marginTop:"60px"}}," This page has been viewed ",a.visits," times"))};a(174);var O=function(){var e=a(682);return r.a.createElement("header",{className:"Homepage-header"},r.a.createElement("h1",null,"Details"),r.a.createElement("img",{src:T.a,className:"App-logo",alt:"prepit logo"}),r.a.createElement("p",null,"Hi there and welcome to the App!"),r.a.createElement("p",null,"Here you will find explanasions for the calculations and what they mean!"),r.a.createElement("p",null,"We hope this helps, we're only just getting started! ",r.a.createElement("span",{role:"img","aria-label":"Fire"},"\ud83d\udd25")),r.a.createElement("div",{style:{marginTop:"60px",marginBottom:"60px"}},r.a.createElement("h1",null,"BMR: "),r.a.createElement("p",{style:{marginLeft:"10%",marginRight:"10%"}},"BMR is an abbreviation for Basal Metabolic Rate. BMR is the minimum of calories required for the body at rest to sustain normal body functioning and life. The energy in this condition is consumed only for the support of the most important organs such as nervous system, heart, lungs, liver, and kidneys. Your BMR or Basal Metabolic Rate is a measurement of how many calories your body would consume if you were to stay in bed all day. BMR is particularly useful when you apply the Harris Benedict Equation/your activity factor (e.g. sedentary...) to find out how many calories you burn each day. Depending on your weight goals you can then adjust your calorie intake, so create a deficit to lose weight or create a calorie surplus in your diet to gain weight. For optimal health we advise a calorie intake or surplus to be no greater than 500 calories per day."),r.a.createElement("h1",null,"BMI: "),r.a.createElement("p",{style:{marginLeft:"10%",marginRight:"10%"}},"A weight-to-height ratio, calculated by dividing one's weight in kilograms by the square of one's height in meters and used as an indicator of obesity and underweight.Your BMI or Body Mass Index is a measurement of body fat based on your height and weight. This health calculation applies to both men and women between the ages of 18 and 65 years. BMI can be used to indicate if you are overweight, obese, underweight or normal. A healthy BMI score is between 20 and 25. A score below 20 indicates that you may be underweight; a value above 25 indicates that you may be overweight. You can calculate your BMI by using the BMI Calculator and comparing your results with the BMI Chart. Use the BMI Chart to determine your Body Mass Index"),r.a.createElement("img",{style:{height:"100%",width:"100%"},src:e,alt:"BMI Chart"}),r.a.createElement("p",{style:{marginLeft:"10%",marginRight:"10%"}},"What does the Body Mass Index Chart say about you? Your BMI is a useful tool to estimate a healthy body weight based on your height. However, due to the wide variety of body types, the distribution of muscle and bone mass, etc., it is not appropriate to use this as the only or final indication for diagnosis. This also implies that your BMI does not actually \u201cmeasure\u201d your percentage of body fat. Due to its ease of measurement and calculation, the BMI index is the most widely used diagnostic indicator to identify a person\u2019s optimal weight depending on their height. Your BMI \u201cnumber\u201d will inform you if you are underweight, of normal weight, overweight, or obese. MealPro would like you to note that there are many ways to address your body weight. This is one of the many possibilities - if you have any concerns about your weight, please get a detailed assessment from your physician who unlike this BMI calculator can address you very specific situation."),r.a.createElement("h1",null," Intermittent Fasting"),r.a.createElement("p",null,"What is intermittent fasting, and why is it so awesome? Intermittent fasting (IF) is not a diet, it\u2019s a lifestyle in which you limit food intake to a certain time window during the day. One of the most common \u201cwindows\u201d is an 8-hour eating window. One thing to note, Intermittent Fasting is not calorie restriction. These two often mistakenly get paired together, but it\u2019s unnecessary to decrease calories with IF in order to achieve fat-burning and gut-healing benefits. There are a lot of patterns of intermittent fasting, such as: Eating all meals within a 12 hour window (say, from 8am \u2013 8pm), then fasting for 12 hours Eating all meals within a 10 hour window (usually 9am \u2013 7pm), then fasting for 14 hours Eating all meals within an 8 hour window (usually 10am-6pm), then fasting for 16 hours (You\u2019ll often see this referred to as 16:8 intermittent fasting) OMAD (eating only One Meal A Day) Every other day fasting (eating nothing one day, then eating normally the next) ADF (alternate day fasting, 36/12 hrs fast/feed) The Warrior Diet (20/4 hrs fast/feed) Eat Stop Eat (24 hrs fasting, 1-2x/week) The Fast-5 Diet. (19/5 hrs fast/feed) Although there may be certain situations when longer fasts might be appropriate, more is not usually better when it comes to intermittent fasting. Extended fasts can disrupt hormone balance \u2013 especially in women \u2013 which can lead to poor sleep, fatigue, fertility issues, depression, and other problems. (",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pubmed/23382817"},"source 1 ",r.a.createElement("a",{href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0052416"},"source 2")),")")))};var I=function(){return r.a.createElement("header",{className:"Homepage-header"},r.a.createElement("h1",null,"Resources"),r.a.createElement("a",{href:"https://www.sportsrd.org/wp-content/uploads/2018/11/Transitioning-into-Healthy-Eating.pdf"}," Getting Started Eating Healthy PDF "),r.a.createElement("a",{href:"https://www.sportsrd.org/wp-content/uploads/2018/11/Healthy-Grocery-Shopping.pdf"}," Healthy Grocery Shopping PDF "),r.a.createElement("a",{href:"https://www.choosemyplate.gov/MyPlatePlan"}," Meal Planning "),r.a.createElement("a",{href:"https://www.sportsrd.org/wp-content/uploads/2018/11/Healthy-Snacking-Fact-Sheet-WEB1.pdf"}," Healthy Snacks PDF "),r.a.createElement("a",{href:"https://www.sportsrd.org/wp-content/uploads/2018/11/Dietary-Supplements-Fact-Sheet.pdf"}," Workout Supplement PDF "),r.a.createElement("a",{href:"https://www.calculator.net/pdf/navy-physical-readiness-program.pdf"}," The Navy Physical readiness PDF"),r.a.createElement("a",{href:"http://www.farmersmarketonline.com/fm/Florida.htm"}," Farmers Markets in Florida "),r.a.createElement("a",{href:"https://www.eatright.org"}," Eatright.org "))},S=a(184),C=a(742),j=a(190),P=a(735);a(175);var A=a(734),H=Object(A.a)(function(e){return{container:{display:"flex",flexWrap:"wrap",alignContent:"center",flexDirection:"column",paddingBottom:"40px"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:e.spacing(2)},menu:{width:200}}}),W=Object(j.a)({palette:{primary:{main:"#fafafa"},secondary:{main:"#fafafa"},text:"#fff",button:"#fff"}}),Y=[{value:"Male",label:"M"},{value:"Female",label:"F"}];var R=function(){var e=H(),t=r.a.useState({Email:"example@gmail.com",Budget:"500",Height:"72",Weight:"155",Age:"21",Gender:"Male",Currency:"USD"}),a=Object(E.a)(t,2),n=a[0],l=a[1],o=function(e){return function(t){l(Object(S.a)({},n,Object(w.a)({},e,t.target.value)))}};return r.a.createElement("header",{className:"Calculator-header"},r.a.createElement("h1",{className:"Title"},"Welcome to the Calculator!"),r.a.createElement("p",{className:"Instructions"},"Enter the following, Sample Data was provideed  ( M 21 6ft)"),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"}},r.a.createElement("div",{className:"Box"},r.a.createElement(P.a,{theme:W},r.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},r.a.createElement(C.a,{id:"outlined-email-input",label:"Email",className:e.textField,type:"email",name:"email",onChange:o("Email"),margin:"normal",variant:"outlined",helperText:"Please enter your Email"}),r.a.createElement(C.a,{id:"outlined-input",label:"Budget ($)",className:e.textField,type:"number",name:"Monthly Budget",onChange:o("Budget"),margin:"normal",variant:"outlined",helperText:"Please enter your Monthly Income"}),r.a.createElement(C.a,{id:"outlined-input",label:"Height (inches)",className:e.textField,type:"number",name:"Height",onChange:o("Height"),margin:"normal",variant:"outlined",helperText:"Please enter your Height \n(6 ft = 72 inches)"})))),r.a.createElement("div",{style:{paddingTop:"3px"}},r.a.createElement("div",{className:"Box"},r.a.createElement(P.a,{theme:W},r.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off"},r.a.createElement(C.a,{id:"outlined-input",label:"Weight (lbs)",className:e.textField,type:"number",name:"Weight",onChange:o("Weight"),margin:"normal",variant:"outlined",helperText:"Please enter your Weight"}),r.a.createElement(C.a,{id:"outlined-input",label:"Age",className:e.textField,type:"number",name:"Age",onChange:o("Age"),margin:"normal",variant:"outlined",helperText:"Please enter your Age"}),r.a.createElement(C.a,{id:"outlined-select",select:!0,label:"Gender",className:e.textField,value:n.Gender,onChange:o("Gender"),SelectProps:{native:!0,MenuProps:{className:e.menu}},helperText:"Please select your Gender",margin:"normal",variant:"outlined"},Y.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))))))),r.a.createElement("div",{style:{marginBottom:"10px",paddingBottom:"60px"}},(n.Budget,n.Height,n.Weight,n.Age,n.Gender,n.Email&&n.Budget&&n.Height&&n.Weight&&""!==n.Age?function(e,t,a,n,l){var o=((.12*e+.15*e)/2).toFixed(2),i=(o/4).toFixed(2),s=(i/7).toFixed(2),c=.45359237*a,m=.0254*t;function u(e,t,a){if("Male"===e){var l=(66+6.23*t+12.7*a-6.8*n).toFixed(2);return r.a.createElement("p",null," ",l," Calories ")}if("Female"===e){var o=(655+4.35*t+4.7*a-4.7*n).toFixed(2);return r.a.createElement("p",null," ",o," Calories ")}}function h(e,t){return(e/(t*t)*703).toFixed(2)}function d(e,t,a){if("Male"===e&&t>=18){var n=(1.2*a+.23*t-10.8-5.4).toFixed(2);return r.a.createElement("p",null,n," %")}if("Female"===e&&t>=18){var l=(1.2*a+.23*t-0-5.4).toFixed(2);return r.a.createElement("p",null,l," %")}if("Male"===e&&t<18){var o=(1.51*a-.7*t-3.6+1.4).toFixed(2);return r.a.createElement("p",null,o," %")}if("Female"===e&&t<18){var i=(1.51*a-.7*t-0+1.4).toFixed(2);return r.a.createElement("p",null,i," %")}}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," About You:"),r.a.createElement("p",{className:"Text"}," Your overall Health Status: "),function(e,t,a,n,l){if("Male"===e&&t>=18){if(n<18)return r.a.createElement("p",{className:"Ok"}," You are under weight ");if(18<=n<=24)return r.a.createElement("p",{className:"Good"}," You have healthy weight ");if(25<=n<=29)return r.a.createElement("p",{className:"Poor"}," You are overweight ");if(30<=n<=39)return r.a.createElement("p",{className:"Bad"}," You are obese ");if(40<=n)return r.a.createElement("p",{className:"Terrible"}," You are extremely obese ")}if("Female"===e&&t>=18){if(n<18)return r.a.createElement("p",{className:"Ok"}," You are under weight ");if(18<=n<=24)return r.a.createElement("p",{className:"Good"}," You have healthy weight ");if(25<=n<=29)return r.a.createElement("p",{className:"Poor"}," You are overweight ");if(30<=n<=39)return r.a.createElement("p",{className:"Bad"}," You are obese ");if(40<=n)return r.a.createElement("p",{className:"Terrible"}," You are extremely obese ")}if("Male"===e&&t<18){if(n<18)return r.a.createElement("p",{className:"Ok"}," You are under weight ");if(18<=n<=24)return r.a.createElement("p",{className:"Good"}," You have healthy weight ");if(25<=n<=29)return r.a.createElement("p",{className:"Poor"}," You are overweight ");if(30<=n<=39)return r.a.createElement("p",{className:"Bad"}," You are obese ");if(40<=n)return r.a.createElement("p",{className:"Terrible"}," You are extremely obese ")}if("Female"===e&&t<18){if(n<18)return r.a.createElement("p",{className:"Ok"}," You are under weight ");if(18<=n<=24)return r.a.createElement("p",{className:"Good"}," You have healthy weight ");if(25<=n<=29)return r.a.createElement("p",{className:"Poor"}," You are overweight ");if(30<=n<=39)return r.a.createElement("p",{className:"Bad"}," You are obese ");if(40<=n)return r.a.createElement("p",{className:"Terrible"}," You are extremely obese ")}}(l,n,u(l,a,t),h(a,t),d(l,n,h(a,t))),r.a.createElement("p",{className:"Text"}," Weight in kilogram (kg): ",c),r.a.createElement("p",{className:"Text"}," Height in meters (m): ",m),r.a.createElement("h1",{style:{color:"white",marginTop:"40px"}}," BMR "),r.a.createElement("p",{className:"Text"},u(l,a,t)),r.a.createElement("h1",{style:{color:"white",marginTop:"40px"}}," BMI "),r.a.createElement("p",{className:"Text"},h(a,t)),r.a.createElement("h1",{style:{color:"white",marginTop:"40px"}}," Body Fat Percentage "),r.a.createElement("p",{className:"Text"},d(l,n,h(a,t))),r.a.createElement("h1",{style:{color:"white",marginTop:"40px"}}," Recomeneded Budget "),r.a.createElement("p",{className:"Text"},"Monthly Food Expense: $",o),r.a.createElement("p",{className:"Text"},"Weekly Food Expense: $",i),r.a.createElement("p",{className:"Text"},"Daily Food Expense: $",s))}(n.Budget,n.Height,n.Weight,n.Age,n.Gender):r.a.createElement("p",null," Calculations will automatically populate when values are entered. ")),r.a.createElement("form",{action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top"},r.a.createElement("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),r.a.createElement("input",{type:"hidden",name:"hosted_button_id",value:"NS7WP7TV5TL6L"}),r.a.createElement("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),r.a.createElement("img",{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}))),r.a.createElement("p",{style:{paddingBottom:"20px"}},"*THIS WEBSITE IS IN DEVELOPMENT, FOR MORE INFORMATION VISIT THE",r.a.createElement("a",{href:"/LearnMore"}," LEARN MORE "),"PAGE*"))};var D=function(){return r.a.createElement("header",null,r.a.createElement("h1",null," Prepit"),r.a.createElement("h3",null,"A solo dev project to help you eat better on a budget"),r.a.createElement("p",{style:{marginTop:"40px"}},"This project has come a long way but still needs a lot of work, we hope you understand as our engineer can builld all the time as much as he'd like to."),r.a.createElement("h3",null," What it does so far "),r.a.createElement("p",null,"So far this web app can calculate your: BMR, BMI, Body fat %, and it gives you a recomended budget for you food expenditure."),r.a.createElement("h3",null," What we plan on it doing "),r.a.createElement("p",null,"Trust us, this is far from what we would like it to do but its a start. Our goal is to make a product that no matter who you are, you can learn about your health and your budget.Our dream scenario is that given your body's current characteristics and status, we can generate a meal plan that won't break your budget and will help you reach your fitness goal whether its to lose or gain weight!"),r.a.createElement("h3",null," Roadmap "),r.a.createElement("p",null,"So far our roadmap has had many twists and turns but we're almost there! We have plans of moving to an official mobile app but development takes time effort and captial that we don't yet have... \"patience is a virtue\""),r.a.createElement("p",null," So far the app is a react and node project with a mongodb server attached that will run the calculations mentioned above."),r.a.createElement("h4",{style:{marginTop:"40px",marginBottom:"40px"}}," Going foward, Our roadmap will look somethings like this: "),r.a.createElement("h5",null,"1. Allow users to create profiles that save their data "),r.a.createElement("h5",null,"2. Allow users to switch between metric or imperial "),r.a.createElement("h5",null,"3. Allow users to set a goal of gaining or losing weight "),r.a.createElement("h5",null,"4. Allow users to calculate calorie deficit/surplus using Lean Mass or Total Body Weught formula "),r.a.createElement("h5",null,"5. Allow users to track their progress with graphs and visuals "),r.a.createElement("h5",null,"6. Allow users to generate a meal plan using their own data "),r.a.createElement("h5",null,"7. Create a mobile stack that works on mobile with the already built backend "),r.a.createElement("h5",null,"8. Add-in an Intermitement Fasting Calculator "),r.a.createElement("h5",null,"9. Move twoard a personal meal plan and lifestyle status tracker "),r.a.createElement("h5",null,"10. Allow users to create a 'personal blockchain' to lock their data down without worry of access from any third party without permission"),r.a.createElement("h4",{style:{marginTop:"40px",marginBottom:"40px"}}," Why are there ads? "),r.a.createElement("p",null,"So far, we are in our infency as a tech company and we have a lot of room to grow so this project needs all the funding it can get. We run a shopify store to help as well but this isn't our primary focus. The ads only barely make enough to cover the server costs, but if you'd like the app done sooner, we have added a donate button to our place holder of a Calculator while we quietly continue dev work. We hope this app helped you learn about your health and we will work to only make this product better for all!"),r.a.createElement("p",null,"Thank you again, Jon"))},G=(a(683),a(74)),L=a(736),_=a(737),z=a(738),V=a(744),$=a(739),q=a(740),U=a(741),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(G.a)(a)),a.state={collapsed:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(L.a,{color:"faded",light:!0},r.a.createElement(_.a,{href:"/",className:"mr-auto"},"Prepit App"),r.a.createElement(z.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(V.a,{isOpen:!this.state.collapsed,navbar:!0},r.a.createElement($.a,{navbar:!0},r.a.createElement(q.a,null,r.a.createElement(U.a,{href:"/"},"Home")),r.a.createElement(q.a,null,r.a.createElement(U.a,{href:"/Calculator"},"Diet & Budget Calculator")),r.a.createElement(q.a,null,r.a.createElement(U.a,{href:"/LearnMore"},"Learn More")),r.a.createElement(q.a,null,r.a.createElement(U.a,{href:"/Resources"},"Resources")),r.a.createElement(q.a,null,r.a.createElement(U.a,{href:"/About"},"About"))))))}}]),t}(r.a.Component),K=a(59),Q=function(){return r.a.createElement(K.c,{color:"blue",className:"font-small pt-3 mt-1",style:{alignItems:"center"}},r.a.createElement(K.b,{fluid:!0,className:"text-center"},r.a.createElement(K.d,null,r.a.createElement(K.a,{md:"12"},r.a.createElement("h5",{className:"title"},r.a.createElement("a",{href:"https://prepit.org"},"Prepit")),function(){var e=Math.floor(4*Math.random())+1;return 1===e?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," \u201cIt is health that is real wealth and not pieces of gold and silver.\u201d "),r.a.createElement("p",null," - Mahatma Gandhi")):2===e?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," \u201cHealth is not valued till sickness comes.\u201d "),r.a.createElement("p",null," - Thomas Fuller")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null," \u201cHealth is the greatest gift.\u201d "),r.a.createElement("p",null,"- Buddha "))}()))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement(K.b,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",r.a.createElement("a",{href:"http://cryptocurrensea.io"}," Cryptocurrensea "))))},X=function(){return r.a.createElement("h1",null,"404: Page Not Found")},Z=!0,ee=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(d.b,Object.assign({},a,{render:function(e){return!0===Z?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/Home"})}}))},te=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",component:F,exact:!0}),r.a.createElement(d.b,{path:"/Home",component:F,exact:!0}),r.a.createElement(ee,{path:"/Calculator",component:R}),r.a.createElement(d.b,{path:"/LearnMore",component:O,exact:!0}),r.a.createElement(d.b,{path:"/Resources",component:I,exact:!0}),r.a.createElement(d.b,{path:"/About",component:D,exact:!0}),r.a.createElement(d.b,{component:X}))),r.a.createElement(Q,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(695);o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a.p+"static/media/logo.8d29e701.svg"},91:function(e,t){}},[[193,1,2]]]);
//# sourceMappingURL=main.797655b8.chunk.js.map