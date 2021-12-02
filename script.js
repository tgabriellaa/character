function load() {
    const form = document.getElementById("chooseCharacter");

    const inputEvent = (event) => {
        console.log(event.target.id);

        
        let id = event.target.id;
        let content = document.getElementById("showGender");
        
        switch (id) {
            case "name": 
                document.getElementById("showName").innerHTML = event.target.value;
                break;
            case "male":
                content = document.getElementById("showGender").innerHTML = "";
                document.getElementById("showGender").insertAdjacentHTML("beforeend", `<img src="/pictures/male.png" alt="male">`);
                break;
            case "female":
                content = document.getElementById("showGender").innerHTML = "";
                document.getElementById("showGender").insertAdjacentHTML("beforeend", `<img src="/pictures/female.png" alt="female">`);
                break;
            case "dragonborn":
                content = document.getElementById("showRace").innerHTML = "";
                document.getElementById("showRace").insertAdjacentHTML("beforeend", `<img src="/pictures/dragonborn.png" alt="dragonborn">`);
                break;
            case "filborg":
                content = document.getElementById("showRace").innerHTML = "";
                document.getElementById("showRace").insertAdjacentHTML("beforeend", `<img src="/pictures/filborgtoken.png" alt="filborg">`);
                break;
            case "fairy":
                content = document.getElementById("showRace").innerHTML = "";
                document.getElementById("showRace").insertAdjacentHTML("beforeend", `<img src="/pictures/fairy.png" alt="fairy">`);
                break;
            case "elf": 
                content = document.getElementById("showRace").innerHTML = "";
                document.getElementById("showRace").insertAdjacentHTML("beforeend", `<img src="/pictures/elf.png" alt="elf">`);
                break;
            case "fighter":
                content = document.getElementById("showClass").innerHTML = "";
                document.getElementById("showClass").insertAdjacentHTML("beforeend", `<img src="/pictures/fighter.png" alt="fighter">`);
                break;
            case "sorcerer":
                content = document.getElementById("showClass").innerHTML = "";
                document.getElementById("showClass").insertAdjacentHTML("beforeend", `<img src="/pictures/sorcerer.png" alt="sorcerer">`);
                break;
            case "rogue":
                content = document.getElementById("showClass").innerHTML = "";
                document.getElementById("showClass").insertAdjacentHTML("beforeend", `<img src="/pictures/rogue.png" alt="rogue">`);
                break;
            case "paladin":
                content = document.getElementById("showClass").innerHTML = "";
                document.getElementById("showClass").insertAdjacentHTML("beforeend", `<img src="/pictures/paladin.png" alt="paladin">`);
                break;
            
            default:
                console.log("default");
        };




    }
    
    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }
    
}

window.addEventListener("load", load);
