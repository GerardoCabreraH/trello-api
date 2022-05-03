require("dotenv").config();

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error("No hay configuración con Api Key y con Token");
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(cardTitle, "LaunchX Card Description", "6270afd3d0c5aa563e3107fb",
    function (error, trelloCard) {
        if (error) {
            console.log("Could not add card:", error);
        }
        else {
            console.log("Added card:", trelloCard);
        }
    });
