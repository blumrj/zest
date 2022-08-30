var bodyTag = document.getElementsByTagName("body")[0];
var path = window.location.pathname;
var page = path.split("/").pop();
//swiper
var swiper = new Swiper(".swiperDishes", {
    slidesPerView: 1,
    spaceBetween: 70,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    rewind: true,
    longSwipes: false,
    breakpoints: {
        975: {
            spaceBetween: 40,
            slidesPerView: 3,
        }, 
        830: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        }
    },
    scrollbar: false,
});

// var swiper = new Swiper(".swiperImageGallery", {
//     slidesPerView: 1,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     rewind: true,
// });

// var swiper = new Swiper(".swiperMenu", {
//     slidesPerView: 3,
//     init: true,
//     createElements: true,
//     enabled: true,
//     nested: true,
//     observer: true,
//     on: {
//         init: function () {
//           console.log('swiper initialized');
//         },
//       },
//         grid: {
//           rows: 1,
//         },
//         spaceBetween: 30,
//         breakpoints: {
//           830: {
//             slidesPerView: 3,
//             grid: {
//               rows: 2,
//             },
//           }
//         }
// })

//scrollify
$(document).ready(function($) {
    $.scrollify({
section : ".part",
scrollSpeed: 1100,
before: function(){
    if($.scrollify.current().hasClass("black")){
        $("nav").addClass("nav-light");
        $("nav").removeClass("nav-dark");
        $("#navbar").addClass("nav-light");
        $("#navbar").removeClass("nav-dark");
        $(".burger-line").addClass("nav-dark");
        $(".burger-line").removeClass("nav-light");
    }
    else{
        $("nav").addClass("nav-dark");
        $("nav").removeClass("nav-light");
        $(".nav-active").addClass("nav-dark");
        $("#navbar").removeClass("nav-light");
        $(".burger-line").addClass("nav-light");
        $(".burger-line").removeClass("nav-dark");
    }
}
});
});


$(window).on("load", () => {
    $(".burger-line").addClass("nav-light");
})


// navigation
const navigation = document.getElementsByTagName("nav")[0];
navigation.classList.add("nav-container", "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "uppercase", "nav-dark");

var burger2 = document.createElement("div");
burger2.setAttribute("id", "burger2");
for(let i = 0; i < 3; i++){
    var burgerLine = document.createElement("div");
    burgerLine.classList.add("burger-line");
    burger2.appendChild(burgerLine)
}
navigation.appendChild(burger2);

// nav logo
const navLogo = document.createElement("p");
const navLogoLink = document.createElement("a");
navLogo.classList.add("logo");
navLogoLink.setAttribute("href", "index.html");
navLogoLink.innerText="zest.";
navigation.appendChild(navLogo);
navLogo.appendChild(navLogoLink);

// stranice i linkovi stranica
const navPages = ["početna", "meni", "kontakt"];
const navPageLinks = ["index.html", "meni.html", "kontakt.html"];

// nav ul 
const navUl = document.createElement("ul");
navUl.classList.add("d-flex", "flex-wrap", "flex-direction-column", "align-items-center", "justify-content-evenly", "nav-dark");
navUl.setAttribute("id", "navbar");
for(var i=0; i<navPageLinks.length; i++){
    var liTag = document.createElement("li");
    var aTag = document.createElement("a");
    aTag.setAttribute("href", navPageLinks[i]);
    aTag.innerText=navPages[i];
    liTag.appendChild(aTag);
    navUl.appendChild(liTag);
    navigation.style.paddingBottom ="10px";
        navigation.style.paddingTop ="10px";
    if(page==navPageLinks[i]){
        aTag.classList.add("activePage");
        aTag.innerHTML += "<i class='fa-solid fa-utensils'></i>";
    }
}
navigation.appendChild(navUl);

//dugme za rezervaciju
var dugme = document.createElement("input");
dugme.type="button";
dugme.value="Rezerviši";
dugme.classList.add("nav-btn")
navigation.appendChild(dugme);

// rezervacija
 var reservationDiv = document.createElement("div");
 reservationDiv.setAttribute("id", "reservation");
 bodyTag.appendChild(reservationDiv);
 reservationDiv.innerHTML="<div id='reservation-content'><span id='close'><i class='fa-solid fa-xmark'></i></span><form class='d-flex flex-direction-column align-items-center'><h2 class='p1'>Napravite rezervaciju</h2><label for='resName' class='w-80 '>E-mail adresa</label><input type='email' name='resEmail' id='resEmail' class='input-line' onblur='checkReservationEmail()'/><label for='resNumber' class='w-80'>Broj osoba:</label><select name='resNumber' id='resNumber' class='input-line' onchange='NoPeople();'><option value='option0'>Izaberite</option><option value='option1'>1</option><option value='option2'>2</option><option value='option3'>3</option><option value='option4'>4</option><option value='option5'>5</option><option value='option6'>6</option></select><label for='resDate' class='w-80 '>Datum rezervacije:</label><input type='date' name='resDate' id='resDate' class='input-line' onblur='checkChosenDate();'/><label for='resTime' class='w-80 '>Vreme: </label><input type='time' name='resTime' id='resTime' class='input-line' onblur='checkChosenTime();'/><input type='button' value='Potvrdi' class='btn btn-form mb-1' id='res-potvrdi'/></form></div>";


 var reservationButton = document.querySelector(".nav-btn");
var reservation = document.querySelector("#reservation");

 reservationButton.addEventListener("click", ()=> {
    if(document.querySelector("#navbar").classList.contains("nav-active")){
        document.querySelector("#navbar").classList.remove("nav-active");
    }
    reservation.classList.toggle("active");
    if(reservation.classList.contains("active")){
        reservation.style.maxHeight = reservation.scrollHeight + "px";
    }
    else{
        reservation.style.maxHeight = 0;
    }
 })
 document.querySelector("#close").addEventListener("click", () => {
    reservation.classList.toggle("active");
    reservation.style.maxHeight = 0;

 })

  //modal za uspesnost rezervacije
  var reservationModalResult = document.createElement("div");
  reservationModalResult.classList.add("reservation-result-modal");
  var reservationModalResultBody = document.createElement("div");
  reservationModalResultBody.classList.add("reservation-result-modal-body");
  reservationModalResult.appendChild(reservationModalResultBody);
  var reservationModalResultBodyContent = document.createElement("div");
  reservationModalResultBodyContent.classList.add("reservation-result-modal-body-content");
  reservationModalResultBody.appendChild(reservationModalResultBodyContent);
  bodyTag.appendChild(reservationModalResult);

//provera podataka rezervacije
 var resFalse = 0;
 
 // mejl
 function checkReservationEmail(){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var resEmail = document.querySelector("#resEmail");
    var x = regex.test(resEmail.value);
    if(x){
        resEmail.style.borderColor = "initial";
    }
    else{
        resEmail.style.borderColor = "red";
        resFalse++;
    }
}

//datum
function checkChosenDate(){
    var reservationDateField = document.querySelector("#resDate");
    var reservationDateValue = document.querySelector("#resDate").value;
    var chosenReservationDateValue = new Date(reservationDateValue);
    var todaysDate = new Date();
    todaysDate.setHours(0,0,0,0);
    if(chosenReservationDateValue >= todaysDate){
        reservationDateField.style.borderColor = "initial";
    }
    else{
        reservationDateField.style.borderColor = "red";
        resFalse++;
    }
}

// vreme
function checkChosenTime(){
    var timeField = document.querySelector("#resTime");
    var chosenTime = document.querySelector("#resTime").value;
    if(chosenTime>"22:00" || chosenTime<"09:00"){
        timeField.style.borderColor = "red";
        resFalse++;
    }
    else{
        timeField.style.borderColor = "initial";
    }
}

//broj osoba

function NoPeople(){
    var numberInput = document.querySelector("#resNumber");
    var izbor = document.querySelector("#resNumber").value;
    if(izbor == "option0"){
        numberInput.style.borderColor = "red";
        resFalse++;
    }
    else{
        numberInput.style.borderColor = "initial";
    }
}

//dohvatanje divova za poruku
var reservationModalResult = document.querySelector(".reservation-result-modal");
    var reservationModalResultBody = document.querySelector(".reservation-result-modal-body");
    var reservationModalResultBodyContent = document.querySelector(".reservation-result-modal-body-content");

document.getElementById("res-potvrdi").addEventListener("click", () =>{
    setTimeout(() => {
        reservationModalResult.classList.add("active");
        reservationModalResultBody.style.maxHeight = reservationModalResultBody.scrollHeight + "px";

        setTimeout(() => {
            reservationModalResult.classList.remove("active");
            reservationModalResultBody.style.maxHeight = 0;
          }, 2000);
      });
      
    resFalse = 0;

    checkReservationEmail()
    NoPeople();
    checkChosenDate();
    checkChosenTime();

    if(resFalse==0){
        reservationModalResult.style.backgroundColor = "green";
        reservationModalResultBodyContent.innerHTML="Ušpesno ste napravili rezervaciju.";
        reservation.classList.toggle("active")
        reservation.style.maxHeight = 0;
    }
    else{
        reservationModalResult.style.backgroundColor = "red";
        reservationModalResultBodyContent.innerText="Neispravno ste popunili rezervaciju.";
    }
})

//mobile navigation 
var openBurger = false;
document.querySelector("#burger2").addEventListener("click", () => {
    if(!openBurger){
        document.querySelector("#burger2").classList.add("activeBurger");
        document.querySelector("#navbar").classList.add("nav-active");
        openBurger = true;
    }
    else{
        document.querySelector("#burger2").classList.remove("activeBurger");
        document.querySelector("#navbar").classList.remove("nav-active");
        openBurger = false;
    }
})

//index.html
// landing page icons 
if(page=="index.html" || page==""){
    var iconsPath = ["https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/?"];
    var icons = ["fab fa-instagram", "fab fa-facebook", "fab fa-twitter"];
    
    icons.forEach( element => {
        //kreiranje a taga
        var aTag = document.createElement("a");
        //dodavanje atributa
        aTag.setAttribute("target", "_blank");
        aTag.setAttribute("href", iconsPath[icons.indexOf(element)]);
        if(icons.indexOf(element) != 0){
            aTag.setAttribute("class", "ml-1");
        }
        //kreiranje i taga (za ikonice)
        var iTag = document.createElement("i");
        //dodavanje atributa  
        iTag.setAttribute("class", element);
        // dodavanje i taga a tagu
        aTag.appendChild(iTag);
        //dodavanje a taga divu sa #landing-page-icons
        document.querySelector("#landing-page-icons").appendChild(aTag);
    })

    // izdvajamo 

    var swiperWrapper = document.querySelector(".swiper-wrapper");

    var imgPath = ["assets/img/jelodana.png", "assets/img/jelodana.png", "assets/img/jelodana.png"];
    var imgAlt = ["slika1", "slika2", "slika3"];
    var dishName = ["NazivJela1", "NazivJela2", "NazivJela3"];
    var dishDescription = [
        
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nam nemo distinctio fuga maiores aperiam est similique, vitae quasi facere consectetur hic iste accusamus officia aut, quia voluptatu", 
    
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nam nemo distinctio fuga maiores aperiam est similique, vitae quasi facere consectetur hic iste accusamus officia aut, quia voluptatu", 
    
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nam nemo distinctio fuga maiores aperiam est similique, vitae quasi facere consectetur hic iste accusamus officia aut, quia voluptatu"
    
    ];

    for(let i = 0; i < imgPath.length; i++){
        // pravljenje swiper slide-a
        var slide = document.createElement("div");
        slide.classList.add("swiper-slide", "sadrzaj");
        
        //pravljenje slike
        var img = document.createElement("img");
        img.src = imgPath[i];
        img.alt = imgAlt[i];
        img.classList.add("img-fluid", "w-80");

        // pravljenje div-a za h3 i opis
        var descriptionDiv = document.createElement("div");
        //h3
        var descriptionH3 = document.createElement("h3");
        descriptionH3.classList.add("p1");
        descriptionH3.innerHTML = dishName[i];
        descriptionDiv.appendChild(descriptionH3);
        //opis
        var descriptionP = document.createElement("p");
        descriptionP.classList.add("p1");
        descriptionP.innerHTML = dishDescription[i];
        descriptionDiv.appendChild(descriptionP);
        //button
        var dishButton = document.createElement("input");
        dishButton.type = "button";
        dishButton.classList.add("btn");
        dishButton.value = "Pogledaj meni";
        descriptionDiv.appendChild(dishButton);

        slide.appendChild(img);
        slide.appendChild(descriptionDiv)
        swiperWrapper.appendChild(slide)

    }
}
//meni.html
if(page=="meni.html"){
//jelovnik;

//dorucak
var breakfastImgArray = ["assets/img/jelodana.png", "assets/img/jelodana.png", "assets/img/jelodana.png", "assets/img/jelodana.png", "assets/img/jelodana.png", "assets/img/jelodana.png"];
var breakfastName = ["Engleski doručak", "Prženice", "Sendvič sa pršutom", "Wrap sa piletinom", "Engleski dorucak", "Engleski dorucak"];
var breakfastIngredients = [
    ["pržena jaja", "kobasica", "paradajz"], 
    ["tost hleb", "panir masa"],
    ["hleb", "pršuta", "kačkavalj", "paradajz"],
    ["tortilja", "zel.salata", "piletina", "kačkavalj"],
    ["pržena jaja", "kobasica", "paradajz"],
    ["pržena jaja", "kobasica", "paradajz"], 
];
var breakfastPrice = ["350 RSD", "300 RSD", "390 RSD", "430 RSD", "350 RSD", "350 RSD"];

//f-ja za pravljenje menija
function MenuCourses( images, courseName, ingredients, price){
        // swiper menu
        var swiperMenu = document.querySelector(".swiperMenu");
        swiperMenu.appendChild(swiperWrapper);
        //pravljenje slajdova
        for(let i = 0; i<images.length; i++){
            //pravljenje slajda i dodavanje wrapperu
            var slide = document.createElement("div");
            slide.classList.add("swiper-slide", "d-flex", "flex-direction-column");
            swiperWrapper.appendChild(slide);
            //pravljenje slike i dodavanje slajdu
            var img = document.createElement("img");
            img.src = images[i];
            img.alt = courseName[i];
            img.classList.add("img-fluid", "w-50");
            slide.appendChild(img);
            // pravljenje dodatnog diva i dodavanje slajdu
            var additionalDiv = document.createElement("div");
            additionalDiv.classList.add("pl-1");
            slide.appendChild(additionalDiv);
            // pravljenje h3
            var h3 = document.createElement("h3");
            h3.classList.add("pb-1");
            h3.innerHTML = courseName[i];
            additionalDiv.appendChild(h3);
            //p sa sastojcima
            var p1 = document.createElement("p");
            p1.innerHTML = ingredients[i];
            additionalDiv.appendChild(p1);
            //p sa cenom
            var p2 = document.createElement("p");
            p2.innerHTML = price[i];
            additionalDiv.appendChild(p2);
        }
        var main = document.querySelector("#main");
        main.appendChild(part);

    }

   swiper.on("init", MenuCourses( breakfastImgArray, breakfastName, breakfastIngredients, breakfastPrice));
}

//kontakt 
if(page=="kontakt.html"){

//iframe

var iframe = document.getElementsByTagName("iframe")[0];
var form = document.getElementsByName("contact-form")[0];
iframe.style.maxHeight =  form.scrollHeight + "px";

//provera forme

//ime
var regexFirstName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
var formFirstName = document.querySelector("#formName");
//prezime
var regexLastName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
var formLastName = document.querySelector("#formLastName");
//email
var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var formEmail = document.querySelector("#formEmail");
//textarea
var regexTextArea = /[0-9a-zA-Z]{5,}/;
var formTextArea = document.querySelector("#formTextArea");

var formCorrect = 0;

//f-ja za proveru elemenata forme
function checkForm(regexPattern, formElement){
    var regex = regexPattern;
    var regexMatch = regex.test(formElement.value);
    if(regexMatch){
        formElement.style.borderColor = "initial";
        formCorrect ++;
    }
    else{
        formElement.style.borderColor = "red";
    }
}

//provera elemenata forme klikom na dugme
document.getElementById("potvrdi").addEventListener("click", () =>{
    setTimeout(() => {
        reservationModalResult.classList.add("active");
        reservationModalResultBody.style.maxHeight = reservationModalResultBody.scrollHeight + "px";

        setTimeout(() => {
            reservationModalResult.classList.remove("active");
            reservationModalResultBody.style.maxHeight = 0;
          }, 2000);
      });

    formCorrect = 0;
    
    checkForm(regexFirstName, formFirstName);
    checkForm(regexLastName, formLastName);
    checkForm(regexEmail, formEmail);
    checkForm(regexTextArea, formTextArea);

    if(formCorrect<4){
        reservationModalResult.style.backgroundColor = "red";
        reservationModalResultBodyContent.innerText="Neispravno ste popunili formu.";
    }
    else{
        reservationModalResult.style.backgroundColor = "green";
        reservationModalResultBodyContent.innerHTML="Ušpesno ste poslali poruku.";
    }
})
}


// newsletter and accordion
var newsletterAccordion = document.querySelector("#newsletter-accordion");

var divClasses = ["d-flex", "justify-content-around", "flex-direction-column", "w-45", "h-70"];

var h2Content = ["Želis da ti stižu obaveštenja o našim ponudama?", "", "Često postavljana pitanja"];

var divsContent = [
    "<div class='d-flex flex-direction-column' id='newsletter'><h3>Prijavi se na naš newsletter!</h3><div class='d-flex align-items-center'><input type='text' id='newsletterInput' placeholder='Email adresa'/><input type='button' value='Potvrdi' class='btn' id='newsletterBtn'></div></div>",
    "", 
    "<div id='accordion'></div>",
];

for(let i = 0; i<divsContent.length; i++){
    if(i!==1){
        var element = document.createElement("div");
        divClasses.forEach(className  => {
            element.classList.add(className);
        })
        var h2 = document.createElement("h2");
        h2.classList.add("mt-7");
        h2.innerText = h2Content[i];
        element.appendChild(h2);
        element.innerHTML += divsContent[i];
        newsletterAccordion.appendChild(element);
    }
    else{
        var element = document.createElement("div");
        element.classList.add("vl", "mt-7");
        newsletterAccordion.appendChild(element);
    }
}

    // accordion
    var accordion = document.getElementById("accordion");
    const accordionQuestion = [ "Na kojoj adresi se nalazi Zest?", "Da li postoji parking u blizini?", "Kako napraviti rezervaciju?"];

    const accordionAnswer = ["Bulevar kralja Aleksandra 29", "Svim gostima restorana je parking obezbeđen", "Pozovite broj 061 456783 ili rezervišite preko našeg sajta"];

    for(let i =0; i < accordionQuestion.length; i++){
        // pravljenje div-a koji ce biti glavi element u kom se nalazi i pitanje i odgovor
        var accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordion.appendChild(accordionItem);
        // pravljenje div-a koji ce sadrzati pitanje
        var accordionItemHeader = document.createElement("div");
        accordionItem.appendChild(accordionItemHeader);
        accordionItemHeader.classList.add("accordion-item-header");
        accordionItemHeader.innerText = accordionQuestion[i];
        // pravljenje div-a koji ce sadrzati odgovor
        var accordionItemBody = document.createElement("div");
        accordionItem.appendChild(accordionItemBody);
        accordionItemBody.classList.add("accordion-item-body");
        var accordionItemBodyContent = document.createElement("div");
        accordionItemBody.appendChild(accordionItemBodyContent);
        accordionItemBodyContent.classList.add("accordion-item-body-content");
        accordionItemBodyContent.innerText = accordionAnswer[i];
    }

    var accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", () => {
            //dohvatanje elementa sa aktivnom klasom
            var currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active-accordion");

            if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader){
                currentlyActiveAccordionItemHeader.classList.toggle("active-accordion");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            //smenjuje aktivnu klasu klikom na neki od elemenata
            accordionItemHeader.classList.toggle("active-accordion");
            // dohvatanje diva sa odgovorom
            var accordionItemBody = accordionItemHeader.nextElementSibling;
            //provera: ako je kliknuto na pitanje, tj. ako u sebi sadrzi aktivnu klasu onda podesavamo max visinu diva
            if(accordionItemHeader.classList.contains("active-accordion")){
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else{
                accordionItemBody.style.maxHeight = 0;
            }
        })
    }) 

    //footer

    var footer = document.getElementsByTagName("footer")[0];

    var footerItemsContent = [
        "<a href='index.html'><h2 class='font-logo uppercase'>zest.</h2></a><p class='mb-1'>restoranzest&commat;gmail.com</p><a href='https://www.instagram.com/' target='_blank'><i class='fab fa-instagram'></i></a><a class='ml-1' href='https://www.facebook.com/' target='_blank'><i class='fab fa-facebook'></i></a><a class='ml-1' href='https://twitter.com/?' target='_blank'><i class='fab fa-twitter'></i></a>", "<li><h3 class='pb-1'>Brzi linkovi</h3></li><li><a href='meni.html'>Meni</a></li><li><a href='galerija.html'>Galerija</a></li><li><a href='kontakt.html'>Kontakt</a></li>", 
        "<h3>Radno vreme</h3><p>9h-22h</p>",
    ]

    for(let i = 0; i<footerItemsContent.length; i++){
        var element;
        if(i!==1){
            element = document.createElement("div");
        }
        else{
            element = document.createElement("ul");
        }
        element.classList.add("footer-item");
        element.innerHTML = footerItemsContent[i];
        footer.appendChild(element);
    }