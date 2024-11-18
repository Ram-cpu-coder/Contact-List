
//================================================
const apiUrl = "https://randomuser.me/api?results=11";
let contactList = [];
// ==============================================
const slider = document.getElementById("slider");

slider.addEventListener("change", (e) => {
    const { value } = e.target;

    if (value < 70) {
        slider.value = 0;

    } else {
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

                                        <div class="">
                                            <i class="bi bi-phone-fill fs-5"></i>
                                            <span>${item.phone}</span>
                                        </div>

                                        <div class="">
                                            <i class="bi bi-envelope-fill"></i>
                                            <span>${item.email}</span>
                                        </div>

                                        <div class="">
                                            <i class="bi bi-geo-alt-fill"></i>
                                            <span>  ${item.location.street.number}, ${item.location.street.name}, ${item.location.city}, ${item.location.country}</span>
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

    //fetch contact data
    const response = await fetch(apiUrl);

    const data = await response.json();

    contactList = data.results;


    //populate contact list 
    displayContactList(contactList);
}
// ==============================================