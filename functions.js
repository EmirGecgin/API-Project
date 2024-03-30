async function pullUserInformation() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();
        displayInformationInCards(userData);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Pulling is done.");
    }
}


function displayInformationInCards(userData) {
    let userInfoCard = document.getElementById("user-card");
    userData.forEach(userInfo => {
        userInfoCard.innerHTML +=
            `<div class="col-md-12 d-flex">
            <div class=" card w-100 m-3">
                <div class="card-body d-flex flex-column">
                    <h5>${userInfo.name} </h5>
                    <div class="user-info-details">
                        <p><i class="fa-solid fa-user"></i> @${userInfo.username}</p>
                        <p><i class="fa-solid fa-envelope"></i> ${userInfo.email}</p>
                        <p><i class="fa-solid fa-location-dot"></i> ${userInfo.address.street }, ${ userInfo.address.suite}, ${ userInfo.address.city}/${ userInfo.address.zipcode}</p>
                        <p><i class="fa-solid fa-phone"></i> ${userInfo.phone}</p>
                        <p><i class="fa-solid fa-earth-americas"></i> ${userInfo.website}</p>
                        <p><i class="fa-solid fa-building"></i> ${userInfo.company.name}</p>
                    </div>
                    <div class="justify-content-center d-flex">
                        <div class="showButton text-center d-flex justify-content-center">
                            <i id="showbtn" class="fa-solid  fa-2x fa-down-long"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
      
        `

    });
    openCloseCards();
}


function openCloseCards() {
    const buttons = document.querySelectorAll(".showButton");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const info = this.closest(".card-body").querySelector(".user-info-details");
            info.classList.toggle("show");
            const iconChange = this.querySelector("i");
            if (iconChange.classList.contains("fa-down-long")) {
                iconChange.classList.remove("fa-down-long");
                iconChange.classList.add("fa-up-long");
            } else if (iconChange.classList.contains("fa-up-long")) {
                iconChange.classList.remove("fa-up-long");
                iconChange.classList.add("fa-down-long");
            }

        });
    });
}
pullUserInformation();