require("dotenv").config();

if (!process.env.TOKEN && !process.env.KEY) {
  throw new Error("No hay configuración con Api Key y con Token");
}

const Trello = require("trello");

const trello = new Trello(process.env.KEY, process.env.TOKEN);

describe("Probar Trello", () => { 
    test("Probar dependencia Trello", () => {
        const cardTitle = `Card Nueva ${new Date()}`;
        trello.addCard(cardTitle, "LaunchX Card Description", "627014b6b6da99245b02e677",
        function (error, trelloCard) {
            if (error) {
                expect(error).toBe(error);
            }
            else {
                expect(trelloCard.desc).toBe("LaunchX Card Description");
            }
            }
        );
    });
});