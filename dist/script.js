function back() {
  document.getElementById("popup").classList.add("flex");
  document.getElementById("popup").classList.remove("hidden");
}
function back1() {
  document.getElementById("popup2").classList.add("flex");
  document.getElementById("popup2").classList.remove("hidden");
}
function back2() {
  document.getElementById("popup3").classList.add("flex");
  document.getElementById("popup3").classList.remove("hidden");
}
function back3() {
  document.getElementById("popup4").classList.add("flex");
  document.getElementById("popup4").classList.remove("hidden");
}

window.onscroll = function () {
  menu();
  dnav();
};
var xstatus = false;
function menu() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("logo").classList.add("lg:text-dark");
    document.getElementById("nav").classList.add("bg-white");
    document.getElementById("nav").classList.add("dark:bg-dark");
    document.getElementById("o").classList.add("dark:lg:bg-dark");
    document.getElementById("o").classList.remove("lg:dark:bg-slate-800");
    document.getElementById("nav").classList.add("fixed");
    document.getElementById("nav").classList.add("w-full");
    document.getElementById("nav").classList.add("z-50");
    document.getElementById("nav").classList.add("shadow-lg");
    document.getElementById("nav").classList.add("transition");
    document.getElementById("nav").classList.add("duration-300");
  } else {
    document.getElementById("nav").classList.remove("bg-white");
    document.getElementById("nav").classList.remove("dark:bg-dark");
    document.getElementById("o").classList.add("lg:dark:bg-slate-800");
    document.getElementById("logo").classList.remove("lg:text-black");
    document.getElementById("nav-name").classList.remove("text-black");
    document.getElementById("nav").classList.remove("w-full");
    document.getElementById("nav").classList.remove("fixed");
    document.getElementById("nav").classList.remove("z-50");
    document.getElementById("nav").classList.remove("shadow-lg");
  }
}

function dnav() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("down").classList.add("hidden");
    document.getElementById("down").classList.add("transitiion");
    document.getElementById("down").classList.add("duration-300");
  } else {
    document.getElementById("down").classList.add("flex");
  }
}

function simple() {
  document.getElementById("smp").classList.add("flex");
  document.getElementById("smp").classList.remove("hidden");
  document.getElementById("cpt").classList.add("hidden");
}

function cepat() {
  document.getElementById("smp").classList.remove("flex");
  document.getElementById("smp").classList.add("hidden");
  document.getElementById("cpt").classList.remove("hidden");
}


function gologin() {
  window.location.href = "/dist/signin.html";
}

function gosignup() {
  window.location.href = "/dist/signup.html";
}

function goBuy() {
  window.location.href = "/dist/pricing.html"
}

function lanjutBeli() {
  // Popup 1
  document.getElementById("master").classList.remove("flex");
  document.getElementById("master").classList.add("hidden");
  document.getElementById("lanjutkan").classList.remove("hidden");
  document.getElementById("lanjutkan").classList.add("flex");
  // Popup2
  document.getElementById("master2").classList.remove("flex");
  document.getElementById("master2").classList.add("hidden");
  document.getElementById("lanjutkan2").classList.remove("hidden");
  document.getElementById("lanjutkan2").classList.add("flex");
 
  // popup3
  document.getElementById("master3").classList.remove("flex");
  document.getElementById("master3").classList.add("hidden");
  document.getElementById("lanjutkan3").classList.remove("hidden");
  document.getElementById("lanjutkan3").classList.add("flex");
  // popup4
  document.getElementById("master4").classList.remove("flex");
  document.getElementById("master4").classList.add("hidden");
  document.getElementById("lanjutkan4").classList.remove("hidden");
  document.getElementById("lanjutkan4").classList.add("flex");
}

function drop() {
  var down = document.getElementById("down");
  if (xstatus == true) {
    down.classList.add("flex");
    down.classList.add("flex-col");
    down.classList.add("justify-center");
    down.classList.add("gap-1");
    down.classList.add("px-2");
    down.classList.remove("hidden");
    xstatus = false;
  } else {
    down.classList.remove("flex");
    down.classList.remove("flex-col");
    down.classList.remove("justify-center");
    down.classList.add("hidden");
    xstatus = true;
  }
  console.log(xstatus);
}

function cancel() {
  document.getElementById("popup").classList.add("hidden");
  document.getElementById("popup2").classList.add("hidden");
  document.getElementById("popup3").classList.add("hidden");
  document.getElementById("popup4").classList.add("hidden");
}

function backend() {
  var backend = document.getElementById("backend");
  if (xstatus == true) {
    backend.classList.add("border-2");
    backend.classList.add("border-dark");
    backend.classList.remove("bg-dark");
    xstatus = false;
  } else {
    backend.classList.remove("border-2");
    backend.classList.remove("border-dark");
    backend.classList.add("bg-dark");
    xstatus = true;
  }
  console.log(xstatus);
}

function blog() {
  var dwn = document.getElementById("dwn");
  if (xstatus == true) {
    dwn.classList.add("flex");
    dwn.classList.add("flex-col");
    dwn.classList.add("justify-center");
    dwn.classList.add("gap-6");
    dwn.classList.add("px-2");
    dwn.classList.remove("hidden");
    xstatus = false;
  } else {
    dwn.classList.remove("flex");
    dwn.classList.remove("flex-col");
    dwn.classList.remove("justify-center");
    dwn.classList.add("hidden");
    xstatus = true;
  }
  console.log(xstatus);
}

function validateNumber(value) {
  if (/^\w+([\.-]?\w+)\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function downloadback() {
  let valuePassword = document.getElementById("number").value;
  let alertPassword = document.getElementById("pin-alert");

  console.log(valuePassword)
  if (valuePassword != '') {
    window.location.href = "../assets/app/backend.zip";
  } else {
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Isi terlebih dahulu!";
    }
  }
}

function validateNumber(value) {
  if (/^\w+([\.-]?\w+)\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function downloadfront() {
  let valuePassword = document.getElementById("number2").value;
  let alertPassword = document.getElementById("pin-alert2");

  console.log(valuePassword)
  if (valuePassword != '') {
    window.location.href = "../assets/app/front.zip";
  } else {
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Isi terlebih dahulu!";
    }
  }
}

function validateNumber(value) {
  if (/^\w+([\.-]?\w+)\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function downloadandroid() {
  let valuePassword = document.getElementById("number3").value;
  let alertPassword = document.getElementById("pin-alert3");

  console.log(valuePassword)
  if (valuePassword != '') {
    window.location.href = "../assets/app/android.zip";
  } else {
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Isi terlebih dahulu!";
    }
  }
}

function validateNumber(value) {
  if (/^\w+([\.-]?\w+)\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function downloadmulti() {
  let valuePassword = document.getElementById("number4").value;
  let alertPassword = document.getElementById("pin-alert4");

  console.log(valuePassword)
  if (valuePassword != '') {
    window.location.href = "../assets/app/multi.zip";
  } else {
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Isi terlebih dahulu!";
    }
  }
}



const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});