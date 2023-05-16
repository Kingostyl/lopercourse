window.onscroll = function () {
  menu();
};
var xstatus = false;

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

function menu() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("logo").classList.add("lg:text-dark");
    document.getElementById("nav-name").classList.add("dark:lg:text-white");
    document.getElementById("nav-name").classList.add("dark:lg:bg-dark");
    document.getElementById("nav").classList.add("bg-white");
    document.getElementById("o").classList.add("lg:dark:bg-dark");
    document.getElementById("nav").classList.add("lg:dark:bg-dark");
    document.getElementById("nav").classList.add("dark:bg-dark");
    document.getElementById("o").classList.add("overflow-hidden");
    document.getElementById("nav").classList.add("fixed");
    document.getElementById("nav").classList.add("w-full");
    document.getElementById("nav").classList.add("z-50");
    document.getElementById("nav").classList.add("shadow-lg");
    document.getElementById("nav").classList.add("transition");
    document.getElementById("nav").classList.add("duration-300");
  } else {
    document.getElementById("nav").classList.remove("bg-white");
    document.getElementById("o").classList.remove("lg:dark:bg-dark");
    document.getElementById("nav").classList.remove("lg:dark:bg-dark");
    document.getElementById("nav").classList.add("lg:dark:bg-slate-800");
    document.getElementById("o").classList.add("lg:dark:bg-slate-800");
    document.getElementById("nav-name").classList.remove("dark:lg:bg-dark");
    document.getElementById("logo").classList.remove("lg:text-black");
    document.getElementById("nav-name").classList.remove("text-black");
    document.getElementById("nav").classList.remove("w-full");
    document.getElementById("nav").classList.remove("fixed");
    document.getElementById("nav").classList.remove("z-50");
    document.getElementById("nav").classList.remove("shadow-lg");
  }
}
function simple() {
  document.getElementById("smp").classList.add("flex");
  document.getElementById("smp").classList.remove("hidden");
  document.getElementById("cpt").classList.add("hidden");
  document.getElementById("dtl").classList.add("hidden");
}

function cepat() {
  document.getElementById("smp").classList.remove("flex");
  document.getElementById("smp").classList.add("hidden");
  document.getElementById("dtl").classList.add("hidden");
  document.getElementById("cpt").classList.remove("hidden");
}

function detail() {
  document.getElementById("dtl").classList.add("flex");
  document.getElementById("dtl").classList.remove("hidden");
  document.getElementById("smp").classList.add("hidden");
  document.getElementById("cpt").classList.add("hidden");
}

function gologin() {
  window.location.href = "/dist/signin.html";
}

function gosignup() {
  window.location.href = "/dist/signup.html";
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

function validateEmail(value) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function gomockup() {
  let valueEmail = document.getElementById("email").value;
  let valueUsername = document.getElementById("text").value;
  let valuePassword = document.getElementById("password").value;

  let alertEmail = document.getElementById("email-alert");
  let alertUsername = document.getElementById("username-alert");
  let alertPassword = document.getElementById("password-alert");

  if(check.checked) {


  if (valueUsername !== "") {
    alertUsername.innerHTML = "";

    if (validateEmail(valueEmail)) {
      alertEmail.innerHTML = "";

      if (valuePassword !== "") {
        alertPassword.innerHTML = "";
        window.location.href = "./home.html";
      } else {
        alertPassword.innerHTML = "enter your password!";
      }
    } else {
      alertEmail.innerHTML = "enter your email correctly!";

      if (valuePassword !== "") {
        alertPassword.innerHTML = "";
      } else {
        alertPassword.innerHTML = "enter your password!";
      }
    }
  } else {
    alertUsername.innerHTML = "Masukan nama mu!";
    if (validateEmail(valueEmail)) {
      alertEmail.innerHTML = "";
      if (valuePassword !== "") {
        alertPassword.innerHTML = "";
      } else {
        alertPassword.innerHTML = "Masukan password mu!";
      }
    } else {
      alertEmail.innerHTML = "Masukan email mu!";
      if (valuePassword !== "") {
        alertPassword.innerHTML = "";
      } else {
        alertPassword.innerHTML = "Masukan password mu!";
      }
    }
  }
}

}

function validateEmail(value) {
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) {
    return true;
  } else {
    return false;
  }
}

function gohome() {
  let valueEmail = document.getElementById("email").value;
  let valuePassword = document.getElementById("password").value;

  let alertEmail = document.getElementById("email-alert");
  let alertPassword = document.getElementById("password-alert");

  if (validateEmail(valueEmail)) {
    if (valuePassword !== "") {
      window.location.href = "./home.html";
    } else {
      alertPassword.innerHTML = "password is wrong, please try again!";
      alertEmail.innerHTML = "";
    }
  } else {
    alertEmail.innerHTML = "enter your email correctly!";
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "password is wrong, please try again!";
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

function downloadback() {
  let valueEmail = document.getElementById("email").value;
  let valuePassword = document.getElementById("number").value;

  let alertEmail = document.getElementById("phone-alert");
  let alertPassword = document.getElementById("pin-alert");

  if (validateEmail(valueEmail)) {
    if (valuePassword !== "") {
      window.location.href = "../assets/app/backend.zip";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
      alertEmail.innerHTML = "";
    }
  } else {
    alertEmail.innerHTML = "masukan email anda";
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
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
  let valueEmail = document.getElementById("email").value;
  let valuePassword = document.getElementById("number").value;

  let alertEmail = document.getElementById("phone-alert2");
  let alertPassword = document.getElementById("pin-alert2");

  if (validateEmail(valueEmail)) {
    if (valuePassword !== "") {
      window.location.href = "../assets/app/frontend.zip";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
      alertEmail.innerHTML = "";
    }
  } else {
    alertEmail.innerHTML = "masukan email anda";
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
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
  let valueEmail = document.getElementById("email").value;
  let valuePassword = document.getElementById("number").value;

  let alertEmail = document.getElementById("phone-alert3");
  let alertPassword = document.getElementById("pin-alert3");

  if (validateEmail(valueEmail)) {
    if (valuePassword !== "") {
      window.location.href = "../assets/app/android.zip";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
      alertEmail.innerHTML = "";
    }
  } else {
    alertEmail.innerHTML = "masukan email anda";
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
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
  let valueEmail = document.getElementById("email").value;
  let valuePassword = document.getElementById("number").value;

  let alertEmail = document.getElementById("phone-alert4");
  let alertPassword = document.getElementById("pin-alert4");

  if (validateEmail(valueEmail)) {
    if (valuePassword !== "") {
      window.location.href = "../assets/app/multi.zip";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
      alertEmail.innerHTML = "";
    }
  } else {
    alertEmail.innerHTML = "masukan email anda";
    if (valuePassword !== "") {
      alertPassword.innerHTML = "";
    } else {
      alertPassword.innerHTML = "Pin anda salah, coba lagi!";
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

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}