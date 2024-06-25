class Client
{
    get addtoCart()
    {
        return cy.get('button[class="btn w-10 rounded"]');
    }

    get cartButton()
    {
        return cy.get("[routerlink*='cart']");
    }

    get continueButton() {
        return cy.get("[type*='button']");
    }

    get countryBox() {
        return cy.get("[placeholder*='Country']");
    }

    get countryNames() {
        return cy.get('.ta-results button');
    }

    get placeOrder() {
        return cy.get('.action__submit');
    }

    get downloadFile() {
        return cy.contains('Click To Download Order Details in CSV');
    }

    get productName() {
        return cy.get(".card-body b");
    }
}

module.exports = new Client();
