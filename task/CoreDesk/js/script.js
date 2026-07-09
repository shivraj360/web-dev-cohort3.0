const body = document.querySelector("body");
const main = document.querySelector("main");
const aside = document.querySelector("aside");


const navToDo = document.querySelector("#nav-todo");
const ToDoPage = document.querySelector("#todo-page");
const dashboard = document.querySelector("#dashboard");
const menuItem = document.querySelectorAll(".menu-item");
const page = document.querySelectorAll(".page");
const todoBackPage = document.querySelector("#todo-backpage");

dashboard.addEventListener("click",() => {
    page.forEach((item)=>{
    item.style.display = "none";
    });
    menuItem.forEach((item)=>{
    item.classList.remove("active");
    });

});

navToDo.addEventListener("click",()=>{
    page.forEach((item)=>{
    item.style.display = "none";
});
    ToDoPage.style.display="flex";
    
    menuItem.forEach((item)=>{
    item.classList.remove("active");
    });

    navToDo.classList.add("active");
    });
    todoBackPage.addEventListener("click",()=>{
    ToDoPage.style.display = "none";
    dashboard.classList.add("active");
    navToDo.classList.remove("active");

    });

const navDailyPlanner = document.querySelector("#nav-daily-planner");
const dailyPlannerPage = document.querySelector("#daily-planner-page");
const plannerBackPage = document.querySelector("#planner-backpage");



navDailyPlanner.addEventListener("click",()=>{
    page.forEach((item)=>{
    item.style.display = "none";
   });
    dailyPlannerPage.style.display="flex";
    menuItem.forEach((item)=>{
        item.classList.remove("active");
    });
    navDailyPlanner.classList.add("active");    
});
plannerBackPage.addEventListener("click",()=>{
    dailyPlannerPage.style.display = "none";
    dashboard.classList.add("active");
    navDailyPlanner.classList.remove("active");  
});




const navDailyGoal = document.querySelector("#nav-daily-goal");
const dailyGoalsPage = document.querySelector("#daily-goals-page");
const goalsBackPage = document.querySelector("#goals-backpage");


navDailyGoal.addEventListener("click",()=>{
    menuItem.forEach((item)=>{
        item.classList.remove("active");
    });

    navDailyGoal.classList.add("active");
    page.forEach((item)=>{
    item.style.display = "none";
    });
    dailyGoalsPage.style.display="flex"; 
});
goalsBackPage.addEventListener("click",()=>{
    dailyGoalsPage.style.display = "none";
    dashboard.classList.add("active");
    navDailyGoal.classList.remove("active");  
});



const navTimer = document.querySelector("#nav-timer");
const timerPage = document.querySelector("#timer-page");
const timerBackPage = document.querySelector("#timer-backpage");

navTimer.addEventListener("click",()=>{
    menuItem.forEach((item)=>{
        item.classList.remove("active");
    });
    navTimer.classList.add("active");
    page.forEach((item)=>{
    item.style.display = "none";
    });
    timerPage.style.display="flex"; 
});
timerBackPage.addEventListener("click",()=>{
    timerPage.style.display = "none";
    dashboard.classList.add("active");
    navTimer.classList.remove("active"); 
   
});



const navQuotes = document.querySelector("#nav-quotes");
const quotesPage = document.querySelector("#quotes-page");
const quotesBackPage = document.querySelector("#quotes-backpage");

navQuotes.addEventListener("click",()=>{
    menuItem.forEach((item)=>{
        item.classList.remove("active");
    });
    navQuotes.classList.add("active");
    page.forEach((item)=>{
    item.style.display = "none";
    });
    quotesPage.style.display="flex"; 
});
quotesBackPage.addEventListener("click",()=>{
    quotesPage.style.display = "none";
    dashboard.classList.add("active");
    navQuotes.classList.remove("active"); 
   
});




const navWeather = document.querySelector("#nav-weather");
const weatherPage = document.querySelector("#weather-page");
const weatherBackPage = document.querySelector("#weather-backpage");

navWeather.addEventListener("click", () => {
    menuItem.forEach((item) => {
        item.classList.remove("active");
    });

    navWeather.classList.add("active");

    page.forEach((item) => {
        item.style.display = "none";
    });

    weatherPage.style.display = "flex";
});

weatherBackPage.addEventListener("click", () => {
    weatherPage.style.display = "none";
    dashboard.classList.add("active");
    navWeather.classList.remove("active");
});


const navDateTime = document.querySelector("#nav-date-time");
const dateTimePage = document.querySelector("#date-time-page");
const dateTimeBackPage = document.querySelector("#date-time-backpage");

navDateTime.addEventListener("click", () => {
    menuItem.forEach((item) => {
        item.classList.remove("active");
    });

    navDateTime.classList.add("active");

    page.forEach((item) => {
        item.style.display = "none";
    });

    dateTimePage.style.display = "flex";
});

dateTimeBackPage.addEventListener("click", () => {
    dateTimePage.style.display = "none";
    dashboard.classList.add("active");
    navDateTime.classList.remove("active");
});





const navTheme = document.querySelector("#nav-theme");
const themePage = document.querySelector("#theme-page");
const themeBackPage = document.querySelector("#theme-backpage");

navTheme.addEventListener("click", () => {
    menuItem.forEach((item) => {
        item.classList.remove("active");
    });

    navTheme.classList.add("active");

    page.forEach((item) => {
        item.style.display = "none";
    });

    themePage.style.display = "flex";
});

themeBackPage.addEventListener("click", () => {
    themePage.style.display = "none";
    dashboard.classList.add("active");
    navTheme.classList.remove("active");
});


const navSetting = document.querySelector("#nav-setting");
const settingPage = document.querySelector("#setting-page");
const settingBackPage = document.querySelector("#setting-backpage");

navSetting.addEventListener("click", () => {
    menuItem.forEach((item) => {
        item.classList.remove("active");
    });

    navSetting.classList.add("active");

    page.forEach((item) => {
        item.style.display = "none";
    });

    settingPage.style.display = "flex";
});

settingBackPage.addEventListener("click", () => {
    settingPage.style.display = "none";
    dashboard.classList.add("active");
    navSetting.classList.remove("active");
});


const parrotThemeBtn = document.querySelector("#parrot-themeBtn")
const avatar = document.querySelector("#avatar");
const logoImg = document.querySelector("#logo-img");
const avatarImg = document.querySelector("#avatarImg");


parrotThemeBtn.addEventListener("click", () => {
    themePage.style.display ="none";
    navTheme.classList.remove("active");
    dashboard.classList.add("active");
    body.style.fontFamily = "parrot";
    body.style.color = "green";
    menuItem.forEach((event) => {
        event.style.color = "green";
    })
    aside.style.color ="green";
    aside.style.backgroundColor = "black";
    main.style.backgroundImage = "url(./assets/wallpapers/parrot-6.1.png)";
   
    logoImg.src = "./assets/images/parrot.png";
    avatarImg.src = "./assets/images/parrotlogo.jpg";
    console.log("lagi ya nhi");
    console.log(logoImg);

});

const garudaThemeBtn = document.querySelector("#garuda-themeBtn")



garudaThemeBtn.addEventListener("click", () => {
    themePage.style.display ="none";
    navTheme.classList.remove("active");
    dashboard.classList.add("active");
    body.style.fontFamily = "garuda";
    body.style.color = "purple";
    menuItem.forEach((event) => {
        event.style.color = "purple";
    })
    aside.style.color ="purple";
    aside.style.backgroundColor = "black";
    main.style.backgroundImage = "url(./assets/wallpapers/garuda-bg.jpg)";
   
    logoImg.src = "./assets/images/garuda.jpg";
    avatarImg.src = "./assets/images/garudalogo.png";
    console.log("lagi ya nhi");
    console.log(logoImg);

    

});
const liveTime = document.querySelector("#live-time");
const liveDate = document.querySelector("#live-date");
const fetchDateTime = new Date();
liveTime.textContent = fetchDateTime.toLocaleTimeString() ;
liveDate.textContent = fetchDateTime.toLocaleDateString() ;
