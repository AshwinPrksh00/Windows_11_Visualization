function display_ct5() {
    var x = new Date()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var mon = new Array(12);
    mon[0] = "January";
    mon[1] = "February";
    mon[2] = "March";
    mon[3] = "April";
    mon[4] = "May";
    mon[5] = "June";
    mon[6] = "July";
    mon[7] = "August";
    mon[8] = "September";
    mon[9] = "October";
    mon[10] = "November";
    mon[11] = "December";

    var m1 = mon[x.getMonth()+1]
    var n = weekday[x.getDay()];
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    var h = x.getHours() <10 ? '0'+x.getHours() : x.getHours();
    var m = x.getMinutes() <10 ? '0'+x.getMinutes() : x.getMinutes();
    var s = x.getSeconds() <10 ? '0'+x.getSeconds() : x.getSeconds();
    
    var x1= h+ ":" +  m + " " + ampm;
    var x2= x.getDate() + "-" + (x.getMonth() + 1) + "-" + x.getFullYear();
    var x3 = h+ ":" +  m + ":" +  s + " "; 
    var x4 = x.getDate() +" "+ m1 +" " + x.getFullYear();
    document.getElementById('ct5').innerHTML = x1;
    document.getElementById('ct6').innerHTML = x2;
    document.getElementById('ct7').innerHTML = x3;
    document.getElementById('day').innerHTML = n;
    document.getElementById('mon').innerHTML = x4;
    document.getElementById('ampm').innerHTML = ampm;
    document.getElementById('distime').innerHTML = x4;
    document.getElementById('distime1').innerHTML = n;

    display_c5();
     }
     function display_c5(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct5()',refresh)
    }
    display_c5();

function retAll(pars){
  if(pars == 'start'){
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'search'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'screen'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'calendar'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'widget'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'vscode'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'msedge'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
    noti.style.right = '-600px';
  }
  else if(pars == 'hidden'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    noti.style.right = '-600px';
  }
  else if(pars == 'notification'){
    startmenu.style.bottom = "-655px";
    setTimeout('starttag.style.bottom = "55px";',1000);
    searchmenu.style.bottom = "-655px";
    setTimeout('searchtag.style.bottom = "55px";',1000);
    screenmenu.style.bottom = "-655px";
    setTimeout('displaytag.style.bottom = "55px";',1000);
    calendarmenu.style.right = "-655px";
    setTimeout('disdate.style.bottom = "55px";',1000);
    widclass.style.left = "-655px";
    setTimeout('widgettag.style.bottom = "55px";',1000);
    vscode.style.bottom = "-700px";
    msedge.style.bottom = "-700px";
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
  }
}



let winkey = document.getElementsByClassName("windowbut")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let starttag = document.getElementsByClassName("starttag")[0];

winkey.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px";
        setTimeout('starttag.style.bottom = "55px";',1000);
    }
    else{
        retAll('start');
        startmenu.style.bottom = "50px";
        starttag.style.bottom = "-50px";
    }
})


let serkey = document.getElementsByClassName("searchbut")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]
let searchtag = document.getElementsByClassName("searchtag")[0]

serkey.addEventListener("click", ()=>{
    console.log("click 1");
    if(searchmenu.style.bottom == "50px"){
        searchmenu.style.bottom = "-655px";
        setTimeout('searchtag.style.bottom = "55px";',1000);
    }
    else{
        retAll('search');
        searchmenu.style.bottom = "50px";
        searchtag.style.bottom = "-50px";
    }
})

let scrkey = document.getElementsByClassName("screenbut")[0]
let screenmenu = document.getElementsByClassName("screenmenu")[0]
let displaytag = document.getElementsByClassName("displaytag")[0]

scrkey.addEventListener("click", ()=>{
    console.log("click 2");
    if(screenmenu.style.bottom == "50px"){
        screenmenu.style.bottom = "-655px";
        setTimeout('displaytag.style.bottom = "55px";',1000);
    }
    else{
        retAll('screen');
        screenmenu.style.bottom = "50px";
        displaytag.style.bottom = "-50px";
    }
})

let timkey = document.getElementsByClassName("timedate")[0]
let calendarmenu = document.getElementsByClassName("calendarmenu")[0]
let disdate = document.getElementsByClassName("disdate")[0]

timkey.addEventListener("click", ()=>{
    console.log("click 3");
    if(calendarmenu.style.right == "0px"){
        calendarmenu.style.right = "-655px";
        setTimeout('disdate.style.bottom = "55px";',1000);
    }
    else{
        retAll('calendar');
        calendarmenu.style.right = "0px";
        disdate.style.bottom = "-50px"
    }
})

let widkey = document.getElementsByClassName("trans")[0]
let widclass = document.getElementsByClassName("widgetclass")[0]
let widgettag = document.getElementsByClassName("widgettag")[0]

widkey.addEventListener("click", ()=>{
    console.log("click 4");
    if(widclass.style.left == "10%"){
        widclass.style.left = "-655px";
        setTimeout('widgettag.style.bottom = "55px";',1000);
    }
    else{
        retAll('widget');
        widclass.style.left = "10%";
        widgettag.style.bottom = "-50px";
    }
})

let vskey = document.getElementsByClassName("vsbut")[0]
let vscode = document.getElementsByClassName("vscode")[0]
let closekey = document.getElementsByClassName("close")[0]
let vscodetag = document.getElementsByClassName("vscodetag")[0]

vskey.addEventListener("click", ()=>{
    console.log("click 5");
    if(vscode.style.bottom == "50px"){
        vscode.style.bottom = "-700px";
        vscode.style.transitionDelay = "0s";
    }
    else{
        retAll('vscode');
        vskey.style.cursor = "progress";
        vskey.style.transition = "cursor 0.5s ease";
        setTimeout('vskey.style.cursor = "context-menu";',500);
        vscode.style.bottom = "50px";
        vskey.style.borderBottom = "3.5px solid #00a3d9";
        vscodetag.style.bottom = "-50px";
    }
})

let edge = document.getElementsByClassName("edgebut")[0]
let msedge = document.getElementsByClassName("msedge")[0]
let close1key = document.getElementsByClassName("close1")[0]
let edgetag = document.getElementsByClassName("edgetag")[0]

edge.addEventListener("click", ()=>{
    console.log("click 6");
    if(msedge.style.bottom == "50px"){
        msedge.style.bottom = "-700px";
        msedge.style.transitionDelay = "0s";
    }
    else{
        retAll('msedge');
        edge.style.cursor = "progress";
        edge.style.transition = "cursor 0.5s ease";
        setTimeout('edge.style.cursor = "context-menu";',500);
        msedge.style.bottom = "50px";
        edge.style.borderBottom = "3.5px solid #00a3d9";
        edgetag.style.bottom = "-50px";
    }
})

closekey.addEventListener("click", ()=>{
    console.log("click 5.1");
    if(vscode.style.bottom == "50px"){
        vscode.style.bottom = "-700px";
        vscode.style.transitionDelay = "0s";
        vskey.style.borderBottom = "0";
        setTimeout('vscodetag.style.bottom = "55px";',1000);
    }
})

close1key.addEventListener("click", ()=>{
    console.log("click 6.1");
    if(msedge.style.bottom == "50px"){
        msedge.style.bottom = "-700px";
        msedge.style.transitionDelay = "0s";
        edge.style.borderBottom = "0";
        setTimeout('edgetag.style.bottom = "55px";',1000);
    }
})

let hid = document.getElementsByClassName('hidden')[0]
let hicon = document.getElementsByClassName('hiddicon')[0]
let hidtag = document.getElementsByClassName('hiddentag')[0]

hid.addEventListener("click", ()=>{
  console.log('click 7');
  if(hicon.style.bottom == "45px"){
    hicon.style.bottom = "-200px";
    setTimeout('hidtag.style.bottom = "15px";',1000);
  }
  else{
    retAll('hidden');
    hicon.style.bottom = "45px";
    hidtag.style.bottom = "-50px";
  }
})

let alert1 = document.getElementsByClassName('alert')[0]
let noti = document.getElementsByClassName('notification')[0]

alert1.addEventListener("click", ()=>{
  console.log('click 7.1');
  if(noti.style.right == '0px'){
    noti.style.right = '-600px';
  }
  else{
    retAll('notification');
    noti.style.right = '0px';
  }
})


/*----------------------------------Calendar UI----------------------------------------*/

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()] +", "+ date.getFullYear();
  //document.querySelector(".date p").innerHTML = new Date().toDateString();
  let trans = document.getElementsByClassName("days")[0];
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date notselected" id="${x+32}">${prevLastDay - x + 1}</div>`;
    
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() && date.getFullYear() == new Date().getFullYear()
    ) {
      days += `<div class="notselected today selected" id="${i}">${i}</div>`;
    } else {
      days += `<div class="notselected id="${i}"">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date notselected" id="${j+40}">${j}</div>`;
  }
  trans.style.transition = "all 0.5s ease-in";
  monthDays.innerHTML = days;

/*-----------Hovering Effect as seen in Windows---------------*/
const offset = 69;
const borderWidth = 3;
const angles = []; //in  rad
for (let i = 0; i <= 2; i += 0.25) {
  angles.push(Math.PI * i);
}
let nearBy = [];
let activeBtn = document.querySelector(".today");
if (activeBtn == null){
  document.querySelector(".notselected").classList.add("selected");
  activeBtn = document.querySelector(".selected");
}
let lastClicked = null;

document.querySelectorAll(".notselected").forEach((btn) => {
  btn.onclick = (e) => {
    //clear effects from last clicked date and set lastClicked to current item
    if (lastClicked) {
      lastClicked.classList.remove("selected");
    }
    lastClicked = e.currentTarget;

    activeBtn.classList.remove("selected");
    activeBtn.classList.add("notselected");
    activeBtn.classList.toggle(
      "not-active",
      e.currentTarget.id !== activeBtn.id
    );
    e.currentTarget.classList.add("selected");
  };
});

function clearNearBy() {
  nearBy.splice(0).forEach((e) => (e.style.borderImage = null));
}

const body = document.querySelector(".days");

body.addEventListener("mousemove", (e) => {
  let x = e.clientX; //x position of cursor.
  let y = e.clientY; //y position of cursor

  clearNearBy();

  nearBy = angles.reduce((acc, rad, index, arr) => {
    const offsets = [offset * 0.35, offset * 1.105];

    const elements = offsets.reduce((elementAccumulator, o, i, offsetArray) => {
      if (index % 2 === 0 && i === 0) return elementAccumulator;
      const cx = Math.floor(x + Math.cos(rad) * o);
      const cy = Math.floor(y + Math.sin(rad) * o);
      const element = document.elementFromPoint(cx, cy);
      // console.log("element at", x, y, cx, cy, offsets, (rad * 180) / Math.PI);
      if (
        element &&
        element.classList.contains("notselected") &&
        !element.classList.contains("today") &&
        !element.classList.contains("selected") &&
        elementAccumulator.findIndex((ae) => ae.id === element.id) < 0) {

          const brect = element.getBoundingClientRect();
          const bx = x - brect.left; //x position within the element.
          const by = y - brect.top; //y position within the element.
          const gr = Math.floor(offset * 1.7);
          if (!element.style.borderImage)
            element.style.borderImage = `radial-gradient(${gr}px ${gr}px at ${bx}px ${by}px ,rgba(255,255,255,0.3),rgba(255,255,255,0.1),transparent ) 9 / ${borderWidth}px / 0px stretch `;
          console.log("element at", offsets, (rad * 180) / Math.PI, element);

          return [...elementAccumulator, element];
      }
      return elementAccumulator;
    }, []);

    return acc.concat(elements);
  }, []);
});

body.onmouseleave = (e) => {
  clearNearBy();
};
};


document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

