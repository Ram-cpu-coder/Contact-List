
//================================================

const contactList = [
    {
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
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Noemí",
            last: "Garza"
        },
        location: {
            street: {
                number: 4232,
                name: "Periférico Ocasio"
            },
            city: "Mapimi",
            state: "Guerrero",
            country: "Mexico",
            postcode: 86647,
            coordinates: {
                latitude: "-46.6620",
                longitude: "-77.2782"
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland"
            }
        },
        email: "noemi.garza@example.com",
        login: {
            uuid: "e50f0206-791f-4779-a06b-0fac05144381",
            username: "bigwolf835",
            password: "betty",
            salt: "hMKIZg12",
            md5: "088eb3b1f221ead6de634ae896b486cf",
            sha1: "24a4b70375d63e446663dd0058f4c1e8f075ae5b",
            sha256: "3c9ae16f599aca7842038dc1bcb6f0a46687857a2355b7effddd848090efe269"
        },
        dob: {
            date: "1996-04-24T02:51:20.081Z",
            age: 28
        },
        registered: {
            date: "2018-02-13T06:05:15.549Z",
            age: 6
        },
        phone: "(636) 658 1497",
        cell: "(615) 635 9688",
        id: {
            name: "NSS",
            value: "18 09 01 8857 4"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/66.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg"
        },
        nat: "MX"
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Damir",
            last: "Blažić"
        },
        location: {
            street: {
                number: 5411,
                name: "Oslobođenja"
            },
            city: "Žitište",
            state: "North Banat",
            country: "Serbia",
            postcode: 56746,
            coordinates: {
                latitude: "-49.5392",
                longitude: "-175.6766"
            },
            timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
            }
        },
        email: "damir.blazic@example.com",
        login: {
            uuid: "ab2f4fcd-8056-4ac1-8293-ab1ecbb196c9",
            username: "bigbutterfly666",
            password: "sneaky",
            salt: "ba1zSvVB",
            md5: "a5810246586a56e9fd20ea6ee0d92a09",
            sha1: "c910bbc9c38b949a603fc8c91b32ca5ca84b5a9d",
            sha256: "84969c82673cc65ab90945c66dbf793a7bf878af7792c7786d5a6da9df40e793"
        },
        dob: {
            date: "1968-01-06T08:24:04.030Z",
            age: 56
        },
        registered: {
            date: "2019-06-04T21:41:51.680Z",
            age: 5
        },
        phone: "027-3102-536",
        cell: "060-6008-347",
        id: {
            name: "SID",
            value: "891423743"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/39.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/39.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg"
        },
        nat: "RS"
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Sayfeddine",
            last: "Van Iersel"
        },
        location: {
            street: {
                number: 1842,
                name: "Burgemeester Snelplein"
            },
            city: "Peins",
            state: "Friesland",
            country: "Netherlands",
            postcode: "3872 HG",
            coordinates: {
                latitude: "45.8084",
                longitude: "-88.9839"
            },
            timezone: {
                offset: "-3:30",
                description: "Newfoundland"
            }
        },
        email: "sayfeddine.vaniersel@example.com",
        login: {
            uuid: "7bc3a375-05e4-4090-8416-d004edbd6fa6",
            username: "ticklishdog233",
            password: "zxcv",
            salt: "UEaYT0lp",
            md5: "3ad1e1b225c4f207204ba4c4bbc7ac9c",
            sha1: "884a396efaa705bccf23c7bec0d98abe8fd6e655",
            sha256: "9a55da608ce33a97464e26e88c1684ecc7985ea1f6030b0717ddf700a759ecbe"
        },
        dob: {
            date: "1990-12-27T01:05:42.156Z",
            age: 33
        },
        registered: {
            date: "2003-05-17T12:58:50.049Z",
            age: 21
        },
        phone: "(0051) 136451",
        cell: "(06) 55782711",
        id: {
            name: "BSN",
            value: "03126532"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/92.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg"
        },
        nat: "NL"
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Riley",
            last: "Harris"
        },
        location: {
            street: {
                number: 1505,
                name: "The Strand"
            },
            city: "Blenheim",
            state: "Otago",
            country: "New Zealand",
            postcode: 79826,
            coordinates: {
                latitude: "-20.8623",
                longitude: "166.8688"
            },
            timezone: {
                offset: "+3:00",
                description: "Baghdad, Riyadh, Moscow, St. Petersburg"
            }
        },
        email: "riley.harris@example.com",
        login: {
            uuid: "5f5e5fc8-5d5f-4dc3-909b-41148dc81dc3",
            username: "happytiger302",
            password: "fringe",
            salt: "iVqimMo5",
            md5: "50d6e24368cc40185f40d17ae536d557",
            sha1: "c883bcf6822d4ec332fa253dbc4a12154bbd967b",
            sha256: "eeb3528d5b972291d7ab207479576ba5f7513a4e6552ac71a482d2d0b1d0f32d"
        },
        dob: {
            date: "1971-03-20T04:17:33.854Z",
            age: 53
        },
        registered: {
            date: "2018-07-27T13:14:49.007Z",
            age: 6
        },
        phone: "(885)-916-0759",
        cell: "(779)-134-5363",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/59.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg"
        },
        nat: "NZ"
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Sadrudine",
            last: "Gonçalves"
        },
        location: {
            street: {
                number: 5908,
                name: "Avenida da Legalidade"
            },
            city: "Criciúma",
            state: "Bahia",
            country: "Brazil",
            postcode: 47376,
            coordinates: {
                latitude: "32.7064",
                longitude: "117.7461"
            },
            timezone: {
                offset: "+4:30",
                description: "Kabul"
            }
        },
        email: "sadrudine.goncalves@example.com",
        login: {
            uuid: "1baf8f76-eb64-428f-ab74-2c821c38ad56",
            username: "heavycat506",
            password: "fiesta",
            salt: "mkLsCc4C",
            md5: "4a94d3bf527cb605387ceaa5a3b3e469",
            sha1: "65272d4884a8afcce4139fea1f37386ea68b70c7",
            sha256: "6ca623762cdf2e73a56adfd36c54bed94454c303adddbabf2c8011edaa0a646c"
        },
        dob: {
            date: "1979-03-28T10:19:19.206Z",
            age: 45
        },
        registered: {
            date: "2014-09-02T16:06:11.071Z",
            age: 10
        },
        phone: "(82) 3849-2792",
        cell: "(35) 5888-2914",
        id: {
            name: "CPF",
            value: "439.542.424-28"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/67.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/67.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/67.jpg"
        },
        nat: "BR"
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Millie",
            last: "Lee"
        },
        location: {
            street: {
                number: 3874,
                name: "College Road"
            },
            city: "Hamilton",
            state: "Bay of Plenty",
            country: "New Zealand",
            postcode: 11297,
            coordinates: {
                latitude: "-41.1857",
                longitude: "-54.6795"
            },
            timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi"
            }
        },
        email: "millie.lee@example.com",
        login: {
            uuid: "3c555021-c2e4-4a02-842a-743f61947ace",
            username: "tinyelephant385",
            password: "florence",
            salt: "T9w1pfTw",
            md5: "56c8e7a67927cfadfa44cac2569b7068",
            sha1: "45d031cb7c589a942e3d992924cd1818f95f6e62",
            sha256: "268c3c338ca04f1fb811e08aaae88262d507247a6e7ae93680ed60c2ac77a594"
        },
        dob: {
            date: "1976-12-15T19:22:30.994Z",
            age: 47
        },
        registered: {
            date: "2018-12-20T14:52:06.846Z",
            age: 5
        },
        phone: "(628)-122-5120",
        cell: "(679)-586-5077",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/3.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg"
        },
        nat: "NZ"
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Fatma",
            last: "Abanuz"
        },
        location: {
            street: {
                number: 6132,
                name: "Necatibey Cd"
            },
            city: "Kırşehir",
            state: "Ordu",
            country: "Turkey",
            postcode: 90349,
            coordinates: {
                latitude: "-49.4280",
                longitude: "113.1884"
            },
            timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein"
            }
        },
        email: "fatma.abanuz@example.com",
        login: {
            uuid: "9151b789-c32f-4bdd-b722-87952c7ab5a9",
            username: "tinypeacock846",
            password: "jeep",
            salt: "1RucMeWK",
            md5: "569460126c4a0c17028b65f0144f393b",
            sha1: "2216b34dc2f96c392ccd8e3aadfeb1243f4b3e25",
            sha256: "e9bca7aeb1d53ca6374dbd057877a7e2ff90f86626c49cc11353abdb0cbaf675"
        },
        dob: {
            date: "1972-09-27T02:03:05.076Z",
            age: 52
        },
        registered: {
            date: "2008-04-14T14:14:49.754Z",
            age: 16
        },
        phone: "(671)-764-7408",
        cell: "(330)-758-9995",
        id: {
            name: "",
            value: null
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/20.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg"
        },
        nat: "TR"
    },
    {
        gender: "female",
        name: {
            title: "Ms",
            first: "Melissa",
            last: "Jordan"
        },
        location: {
            street: {
                number: 9436,
                name: "Boghall Road"
            },
            city: "Cavan",
            state: "Carlow",
            country: "Ireland",
            postcode: 61975,
            coordinates: {
                latitude: "-47.5532",
                longitude: "-176.1689"
            },
            timezone: {
                offset: "+4:30",
                description: "Kabul"
            }
        },
        email: "melissa.jordan@example.com",
        login: {
            uuid: "38576e40-babc-4827-b194-a9c5b56c76d1",
            username: "brownrabbit800",
            password: "abacab",
            salt: "jglfQDnv",
            md5: "58b5a32c976f56d5d8ecc862571b2323",
            sha1: "9c182f255746f3596681a608256b71c485d9fe11",
            sha256: "40d96b03d6466fb5ee5ca03e8d824afdb39d70cd2318ec5b7173e1993563f90d"
        },
        dob: {
            date: "1965-01-27T19:34:37.007Z",
            age: 59
        },
        registered: {
            date: "2020-04-18T21:02:50.249Z",
            age: 4
        },
        phone: "011-777-6563",
        cell: "081-994-8612",
        id: {
            name: "PPS",
            value: "1409620T"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/13.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
        },
        nat: "IE"
    },
    {
        gender: "female",
        name: {
            title: "Miss",
            first: "Pihla",
            last: "Toro"
        },
        location: {
            street: {
                number: 8663,
                name: "Hämeenkatu"
            },
            city: "Riihimäki",
            state: "Southern Ostrobothnia",
            country: "Finland",
            postcode: 56159,
            coordinates: {
                latitude: "22.1534",
                longitude: "30.8951"
            },
            timezone: {
                offset: "-6:00",
                description: "Central Time (US & Canada), Mexico City"
            }
        },
        email: "pihla.toro@example.com",
        login: {
            uuid: "8d1dd21f-decb-45aa-9d26-ec29b58faed2",
            username: "tinygorilla133",
            password: "melinda",
            salt: "LySSZdcN",
            md5: "d9686a838afb41cd35f387ee8b8ce0d9",
            sha1: "b254487c9142de7e787a5c63a56e977f53696f5e",
            sha256: "a3df9504649b6cc8957e9b6be875246681d13ff9477cfed828e4e81711576c93"
        },
        dob: {
            date: "1965-06-04T22:20:35.176Z",
            age: 59
        },
        registered: {
            date: "2009-04-07T13:01:42.255Z",
            age: 15
        },
        phone: "09-248-559",
        cell: "041-221-00-05",
        id: {
            name: "HETU",
            value: "NaNNA622undefined"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/women/3.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg"
        },
        nat: "FI"
    },
    {
        gender: "male",
        name: {
            title: "Mr",
            first: "Branimir",
            last: "Novak"
        },
        location: {
            street: {
                number: 6341,
                name: "Lukićeva"
            },
            city: "Žabari",
            state: "Moravica",
            country: "Serbia",
            postcode: 15543,
            coordinates: {
                latitude: "54.0123",
                longitude: "-177.9926"
            },
            timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz"
            }
        },
        email: "branimir.novak@example.com",
        login: {
            uuid: "e12ed8c7-d520-4a89-b680-0d6b5c7d11a6",
            username: "yellowladybug265",
            password: "2580",
            salt: "gGPYXuTk",
            md5: "e05ac7d5ebd9ce4b39b923d22e79846c",
            sha1: "21662c3ca0f922235ddcb47074581044119e8415",
            sha256: "3efa5f98693b3317e627e8382da036b0c021665cd679137354587773f170077c"
        },
        dob: {
            date: "1991-01-29T07:02:52.151Z",
            age: 33
        },
        registered: {
            date: "2015-03-27T23:49:53.259Z",
            age: 9
        },
        phone: "022-9959-863",
        cell: "066-4602-394",
        id: {
            name: "SID",
            value: "442670674"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/46.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/46.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/46.jpg"
        },
        nat: "RS"
    }
];
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
        console.log(item);

        const accItem = `
        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                    <img src="./ram.jpg" width="50px" height="50px" class="rounded-circle">
                                    <div class="ms-2">
                                        <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}</div>
                                        <div class="">
                                            ${item.location.street.number}, ${item.location.street.name}
                                        </div>
                                    </div>

                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#contactAccordion">
                                <div
                                    class="accordion-body d-flex flex-column justify-content-center align-items-center">
                                    <img src="./ram.jpg" alt="" srcset="" height="150px" width="150px"
                                        class="rounded-circle">
                                    <div class="d-flex flex-column mt-2">

                                        <div class="">
                                            <i class="bi bi-person-fill fs-5"></i>
                                            <span>Ram Kumar Dhimal</span>
                                        </div>

                                        <div class="">
                                            <i class="bi bi-phone-fill fs-5"></i>
                                            <span>+61 042565666</span>
                                        </div>

                                        <div class="">
                                            <i class="bi bi-envelope-fill"></i>
                                            <span>ram@gmail.com</span>
                                        </div>

                                        <div class="">
                                            <i class="bi bi-geo-alt-fill"></i>
                                            <span>Sydney, Australia</span>
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

    // appScreen.classList.remove("hidden");

    displayScreen("appScreen");
}

// ==============================================
displayContactList(contactList);
displayScreen("contactListScreen")