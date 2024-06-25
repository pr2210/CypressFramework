/// <reference types="Cypress" />
const Papa = require("papaparse");
const Jfix = require("../../fixtures/example.json");
const client = require("../../support/pageObjacts/ClientPage");

describe('Framework Test', () => {

    it('Framework Test-1', () => {
        const country = " India";
        let proName1;
        let proName2;

        cy.LoginAPI().then(function()
        {
            cy.visit(Cypress.env('url') + "client/",
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            });
        });

        client.productName.eq(1).then(function(ele){
            proName1 = ele.text();
            console.log(proName1);
        })

        client.productName.eq(2).then(function(ele){
            proName2 = ele.text();
            console.log(proName2);
        })

        client.addtoCart.eq(1).click();
        client.addtoCart.eq(2).click();
        cy.wait(2000);
        client.cartButton.click();
        client.continueButton.eq(1).click();
        client.countryBox.type(Jfix.Country);
        cy.wait(2000);
        client.countryNames.each(($e1, index, $list)=>{
            if($e1.text() === country){
                cy.wrap($e1).click();
            }
        });
        cy.wait(2000);
        client.placeOrder.click();
        client.downloadFile.eq(0).click();
        cy.wait(30000);
        cy.readFile("cypress/downloads/order-invoice_ganpatil.csv")
            .then((text) => {
                const results = Papa.parse(text, { header: true }); // Parse CSV using PapaParse
                console.log(results.data); // Access parsed CSV data
                
                let proName1Matched = false;
                let proName2Matched = false;

                results.data.forEach((row) => {
                    if (row['Product Name']) {
                        const productName = row['Product Name'].trim();
                        console.log(productName);

                        if (productName === proName1) {
                            proName1Matched = true;
                        }
                        if (productName === proName2) {
                            proName2Matched = true;
                        }
                    }
                });

                // Assert that both product names were found in the CSV data
                expect(proName1Matched).to.be.true;
                expect(proName2Matched).to.be.true;
        });
    });
});
