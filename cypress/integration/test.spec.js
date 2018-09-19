describe('Search properties for sale', () => {
    
    [
        {
            suburb: 'york',
            radius: '5.0',
            type:   'house',
            minprice: '180000',
            maxprice: '400000',
            minroom: '1',
            maxroom: '4',
            time:   '3',
            sort:   '6'
        },
        // {
        //      suburb: 'waterloo',
        //      radius: '10.0',
        //      type:   'flats',
        //      minprice: '180000',
        //      maxprice: '400000',
        //      minroom: '1',
        //      maxroom: '4',
        //      time:   '7',
        //      sort:   '6'
        //  }
    ] 
    .forEach(({ suburb, radius, type, time, sort, minprice, maxprice, minroom, maxroom}) => {
       
        it('Should search properties for sale', () => {
            cy.visit('https://www.rightmove.co.uk/')

                .get('#searchLocation') //.get('input[name=searchLocation]')
                .should('be.visible') // to check if element is present
                .type(suburb, {force:true})
                    // forcing to type because input field it's covered by another element
                    // Bug with Cypress 3. More information can be found here https://github.com/cypress-io/cypress/issues/2037
                .get('li.typeAheadLocation')
                .should('have.length', 10)
                .first().click({force:true}) // selecting first from dropdown
                .get('#buy').click({force:true});
        })

        it('Should filter by Search Radius', () => {
            cy.get('#radius')
                .then( function ($searchRadius){
                    $searchRadius.val(radius)
                    })
              .get('#radius option')
              .should('have.length', 11)
        })

        it('Should filter by Property Type',() => {
            cy.get('#displayPropertyType')
                .then( function ($propertyType){
                    $propertyType.val(type)
                    })
              .get('#displayPropertyType option')
              .should('have.length', 7)
        })

        it('Should filter by Added to site',() => {
            cy.get('#maxDaysSinceAdded')
              .then( function ($addedToSite){
                    $addedToSite.val(time) 
                    })
              .get('#maxDaysSinceAdded option')
              .should('have.length', 5)
        })

        it('Should filter by Price-Min',() => {
            cy.get('#minPrice')
              .then( function ($minPrice){
                    $minPrice.val(minprice) 
                    })
              .get('#minPrice option')
              .should('have.length', 57)
        })

        it('Should filter by Price-Max',() => {
            cy.get('#maxPrice')
              .then( function ($maxPrice){
                    $maxPrice.val(maxprice) 
                    })
              .get('#maxPrice option')
              .should('have.length', 57)
        })

        it('Should filter by Min No. of bedrooms',() => {
            cy.get('#minBedrooms')
              .then( function ($maxRoom){
                    $maxRoom.val(minroom) 
                    })
              .get('#minBedrooms option')
              .should('have.length', 7)
        })
        
        it('Should filter by Max No. of bedrooms',() => {
            cy.get('#maxBedrooms')
              .then( function ($maxRoom){
                    $maxRoom.val(maxroom) 
                    })
              .get('#maxBedrooms option')
              .should('have.length', 7)
        })

        it('Should submit the filter', () => {
                cy.get('button:contains("Find properties")')
                  .click({force:true})
                    //cy.get('#propertySearchCriteria').submit()
        })

        it('Should sort by lowest price first', () => {
                cy.get('[data-test=sort-type]')
                  .then( function ($sortBy){
                        $sortBy.val(sort)
                        })
                  .get('[data-test=sort-type] option')
                  .should('have.length', 4)
        })

        it('Should click on first non featured property', () => {
            cy.get('div[data-test=propertyCard-1] a[data-test="property-img"]')
              .click()
        })
     })
})