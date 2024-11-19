
//================================================
//apiUrl to get the random user data
const apiUrl = "https://randomuser.me/api?results=10";

// =====================================================
// date and time on the lock screen

const updateDateAndtime = () => {
    let dayElm = document.getElementsByClassName("day");
    const timeElm = document.getElementsByClassName("Time");
    const today = new Date();

    for (items of timeElm) {
        items.innerText = (today.getHours() % 12).toString().padStart(2, 0) + ":" + today.getMinutes().toString().padStart(2, 0);
    }

    let dayIndex = today.getDay();
    let day = '';
    const date = today.getDate();
    let monthIndex = today.getMonth();
    let month = ""

    switch (dayIndex) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
            day = "";
            break;
    }
    switch (monthIndex) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;

        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;

        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;

        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;

        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;

        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;

        default:
            month = "";
            break;
    }

    for (de of dayElm) {

        de.innerText = day + ' ' + date + ' ' + month;

    }
}
updateDateAndtime();
setInterval(() => {
    updateDateAndtime();
}, 60000);

// =====================================================
// const dayElm = document.getElementsByClassName("day");
// const timeElm = document.getElementById("Time");
// const today = new Date();
// let day = today.getDay();
// let month = today.getMonth();
// const date = today.getDate();
// const hour = today.getHours() % 12;
// const minute = today.getMinutes();

// switch (day) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;

//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;

//     default:
//         day = "";
//         break;
// }
// switch (month) {
//     case 0:
//         month = "January";
//         break;
//     case 1:
//         month = "February";
//         break;

//     case 2:
//         month = "March";
//         break;
//     case 3:
//         month = "April";
//         break;

//     case 4:
//         month = "May";
//         break;
//     case 5:
//         month = "June";
//         break;

//     case 6:
//         month = "July";
//         break;
//     case 7:
//         month = "August";
//         break;

//     case 8:
//         month = "September";
//         break;
//     case 9:
//         month = "October";
//         break;

//     case 10:
//         month = "November";
//         break;
//     case 11:
//         month = "December";
//         break;

//     default:
//         month = "";
//         break;
// }
// dayElm.innerText = `${day}, ${date} ${month}`;
// timeElm.innerText = `${hour}:${minute}`;


// =====================================================
// initial contactList array
let contactList = [{
    gender: "male",
    name: {
        title: "Mr",
        first: "Logan",
        last: "Mitchell"
    },
    location: {
        street: {
            number: 8703,
            name: "3rd St"
        },
        city: "Maitland",
        state: "Yukon",
        country: "Canada",
        postcode: "D4T 0P2",
        coordinates: {
            latitude: "-70.5806",
            longitude: "-119.7890"
        },
        timezone: {
            offset: "+4:30",
            description: "Kabul"
        }
    },
    email: "logan.mitchell@example.com",
    login: {
        uuid: "8aad19ff-b9ee-405c-b473-0722a62e7ae6",
        username: "lazyduck109",
        password: "deejay",
        salt: "RM54dvW7",
        md5: "b13da34937d7dbd306635c341e60a3ad",
        sha1: "5809e1fcb654550c7fd3f8e0b9af7e72ff6e8550",
        sha256: "6506b602d5bd839e082911e3a6086c4bea581468f5e9cd0f0981bda49a69919c"
    },
    dob: {
        date: "1972-08-27T00:29:20.396Z",
        age: 52
    },
    registered: {
        date: "2005-11-04T02:26:51.636Z",
        age: 19
    },
    phone: "R31 X46-9322",
    cell: "X30 Z01-0445",
    id: {
        name: "SIN",
        value: "482076775"
    },
    picture: {
        large: "https://randomuser.me/api/portraits/men/13.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg"
    },
    nat: "CA"
}];
// ==============================================
//adding change event trigger for slider value change 
const slider = document.getElementById("slider");
const lock_Screen = document.getElementById("lockScreen");
slider.addEventListener("change", (e) => {
    const { value } = e.target;

    if (value < 70) {
        slider.value = 0;

    } else {
        lock_Screen.style.display = "none";
        displayAppScreen();

    }
})

// ==============================================
const displayScreen = (screenName) => {
    const screens = document.getElementsByClassName("screen");

    for (screen of screens) {
        screen.style.display = "none";
    }
    const mainScreen = document.getElementById(screenName);

    mainScreen.style.display = "block";
}

// ==============================================
//display count 
//display the contact list in the accordion
const displayContactList = (userList) => {

    //update the contact count 
    let userNumber = userList.length;
    const userCountElement = document.getElementById("userCount");

    userCountElement.innerText = userNumber;

    //update the contactAccordion
    const contactAccordion = document.getElementById("contactAccordion");
    contactAccordion.innerHTML = "";

    userList.map((item, index) => {

        const accItem = `
        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#contact-${index}" aria-expanded="true" aria-controls="collapseOne">
                                    <img src="${item.picture.medium}" width="50px" height="50px" class="rounded-circle">
                                    <div class="ms-2">
                                        <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}</div>
                                        <div class="">
                                            ${item.location.street.number}, ${item.location.street.name}
                                        </div>
                                    </div>

                                </button>
                            </h2>
                            <div id="contact-${index}" class="accordion-collapse collapse"
                                data-bs-parent="#contactAccordion">
                                <div
                                    class="accordion-body d-flex flex-column justify-content-center align-items-center">
                                    <img src="${item.picture.large}"
                                        class="rounded-circle">
                                    <div class="d-flex flex-column mt-2">

                                        <div class="">
                                            <i class="bi bi-person-fill fs-5"></i>
                                            <span>${item.name.title}. ${item.name.first} ${item.name.last}</span>
                                        </div>

                                        <div>
                                           <a href="tel:${item.phone}"class="decoration"><i class="bi bi-phone-fill fs-5"></i>
                                            <span>${item.phone}</span>
                                            </a>
                                        </div>

                                        <div class="">
                                        <a href="tel:${item.email}" class="decoration">
                                            <i class="bi bi-envelope-fill"></i>
                                            <span>${item.email}</span>
                                            </a>
                                        </div>

                                        <div class="">
                                        <a href="https://www.google.com/maps/search/${item.location.street.number},+${item.location.street.name}, +${item.location.city}, +${item.location.state}, +${item.location.country}/@-33.876295,151.1985883,15z?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" class="decoration">
                                            <i class="bi bi-geo-alt-fill"></i>
                                            <span>  ${item.location.street.number}, ${item.location.street.name}, ${item.location.city}, ${item.location.country}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        contactAccordion.innerHTML += accItem;
    })
}
// ==============================================
const displayAppScreen = () => {
    displayScreen("appScreen");
}
// ==============================================
const displayContactListScreen = async () => {
    //display contact list screen
    displayScreen("contactListScreen");

    //before fetching data
    //1. show spinner
    //2. hide contact list 

    const spinner = document.getElementById("spinner");

    const contactListScreenAfterSpinner = document.getElementById("contact-list");
    contactListScreenAfterSpinner.style.display = "none";

    //fetch contact data
    const response = await fetch(apiUrl);

    const data = await response.json();

    contactList = data.results;

    //after fetching data
    //1. hide spinner
    //2. show contact list 
    spinner.style.display = "none";
    contactListScreenAfterSpinner.style.display = "block";


    //populate contact list 
    displayContactList(contactList);
}
// ==============================================
//search functionality

const searchElm = document.getElementById("search");
searchElm.addEventListener("keyup", (e) => {
    //check if the input value is in the users full name

    const filterContactList = contactList.filter(item => {
        const fullname = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
        return fullname.includes(e.target.value.toLowerCase());

    })
    displayContactList(filterContactList);
});

// ======================================================
//back to lock screen
const backToLock = () => {
    slider.value = 0;
    displayScreen('lockScreen');
}