// describe('Search properties for sale', () => {
//     it('Should search properties by area', () => {
//         cy.visit('https://www.rightmove.co.uk/')
//           .contain('input[name=searchLocation]')
//           .type('York') // forcing to type because input field it's covered y another element
//           .get('#typeaheadList').first().click()
//           .get('button:contains("For sale")').click();
//     })
//     it('SHould filter by Search Radius', () => {
//         cy.get('#radius').then( function ($select){
//             $select.val('0.25')
//         })
//         cy.get('select').should('have.value', '0.25')
//     })
//     it('SHould filter by Property Type',() => {
//         cy.get('#displayPropertyType').then( function ($select){
//             $select.val('0.25')
//         })
//         cy.get('select').should('have.value', 'flats')
//     })
//     it('SHould filter by Price Range',() => {
//         cy.get('#radius').then( function ($select){
//             $select.val('0.25')
//         })
//         cy.get('select').should('have.value', '0.25')
//     })
//     it('SHould filter by Added to site',() => {
//         cy.get('#maxDaysSinceAdded').then( function ($select){
//             $select.val('0.25')
//         })
//         cy.get('select').should('have.value', '0.25')
//     })
//     it('SHould filter by No. of bedrooms',() => {
//         cy.get('#radius').then( function ($select){
//             $select.val('1')
//         })
//         cy.get('select').should('have.value', '1')
//     })
//     it('SHould filter by Include under offers',() => {
//         cy.get('#radius').then( function ($select){
//             $select.val('0.25')
//         })
//         cy.get('select').should('have.value', '0.25')
//     })
// })
// - - -

// describe('Search properties for sale', () => {
//     // [
//     //     {
//     //         suburb: 'York',
//     //         radius: ['0.0', '0.25', '0.5', '1', '3', '5'],
//     //         propertyType: ['Flat'],
//     //         addedDate: ['1', '3', '7', '14'],
//     //     }
//     // ]
//         it('Should search properties by area', () => {
//             cy.visit('https://www.rightmove.co.uk/')
//               .get('input[name=searchLocation]')
//               .type('York', {force:true}) // forcing to type because input field it's covered y another element
//               .get('li.typeAheadLocation').should('have.length', 10)
//               .get('#typeaheadList').first().click()
//               .get('button:contains("For sale")').click({force:true});
//         })
//         it('Should filter by Search Radius', () => {
//             cy.get('#radius').then( function ($searchRadius){
//                 $searchRadius.val('5.0')
//             })
//             .get('#radius').select('#radius').should('have.value', '456')
//             cy.get('select#radius').should('have.value', '5.0')
//         })
//         it('Should filter by Property Type',() => {
//             cy.get('#displayPropertyType').then( function ($propertyType){
//                 $propertyType.val('houses')
//             })
//             cy.get('select#displayPropertyType').should('have.value', 'houses')
//         })
//         it('Should filter by Added to site',() => {
//             cy.get('#maxDaysSinceAdded').then( function ($addedToSite){
//                 $addedToSite.val('3')
//             })
//             cy.get('select#maxDaysSinceAdded').should('have.value', '3')
//         })
//         it('Should submit the filter', () => {
//             cy.get('#submit').click({force:true})
//         })
//         // it('Should sort by lowest price first', () => {
//         //     cy.get('[data-test=sort-type]').click()
//         // })
//     })

//     - - -
//     describe('Search properties for sale', () => {

//         it('Should search properties by area', () => {
//             cy.visit('https://www.rightmove.co.uk/')
            
//               .get('input[name=searchLocation]')
//               .should('be.visible') // to check if element is present
//               .type('York', {force:true}) 
//               // forcing to type because input field it's covered by another element
//               // Bug with Cypress. For more information please here https://github.com/cypress-io/cypress/issues/2037
    
//               .get('li.typeAheadLocation').should('have.length', 10)
//               .first().click({force:true})
//               .get('#buy').click({force:true});
//         })
    
//         it('Should filter by Search Radius', () => {
//             cy.get('#radius').then( function ($searchRadius){
//                 $searchRadius.val('5.0')
//             })
//             .get('#radius option').should('have.length', 11)
//            // .get('#radius').should('have.value', '5.0')
//         })
    
//         it('Should filter by Property Type',() => {
//             cy.get('#displayPropertyType').then( function ($propertyType){
//                 $propertyType.val('houses')
//             })
//             .get('#displayPropertyType option').should('have.length', 7)
//             //.get('#displayPropertyType').should('have.value', 'houses')
//         })
    
//         it('Should filter by Added to site',() => {
//             cy.get('#maxDaysSinceAdded').then( function ($addedToSite){
//                 $addedToSite.val('3')
//             })
//             .get('#maxDaysSinceAdded option').should('have.length', 5)
//             //.get('#maxDaysSinceAdded').should('have.value', '3')
//         })
    
//         it('Should submit the filter', () => {
//             cy.get('#submit').click({force:true})
//         })
    
//         it('Should sort by lowest price first', () => {
//            // cy.get('[data-test=sort-type]').should('have.length', 4).select('val:3')
//             cy.get('[data-test=sort-type]').then( function ($sortBy){
//                 $sortBy.val('6')
//             })
//             .get('[data-test=sort-type] option').should('have.length', 4)
//             //.get('[data-test=sort-type]').should('have.value', '6')
//         })
//     })  

//     ---
    describe('Search properties for sale', () => {
        // [
        //     {suburb: 'york'},
        //     {radius: '5.0'},
        //     {type: 'house'},
        //     {time: '3'},
        //     {sort: '4'}
        // ].forEach
        before('Should search properties by area', () => {
            cy.visit('https://www.rightmove.co.uk/')
              .get('#searchLocation') //.get('input[name=searchLocation]')
              .should('be.visible') // to check if element is present
              .type('waterloo', {force:true}) 
                // forcing to type because input field it's covered by another element
                // Bug with Cypress 3. More information can be found here https://github.com/cypress-io/cypress/issues/2037
              .get('li.typeAheadLocation')
              .should('have.length', 10)
              .first().click({force:true})
              .get('#buy').click({force:true});
        })
    
        it('Should filter by Search Radius', () => {
            cy.get('#radius')
              .then( function ($searchRadius){
                $searchRadius.val('5.0')
                })
              .get('#radius option')
              .should('have.length', 11)
        })
    
        it('Should filter by Property Type',() => {
            cy.get('#displayPropertyType')
              .then( function ($propertyType){
                $propertyType.val('houses')
                })
              .get('#displayPropertyType option')
              .should('have.length', 7)
        })
    
        it('Should filter by Added to site',() => {
            cy.get('#maxDaysSinceAdded')
              .then( function ($addedToSite){
                $addedToSite.val('3') 
                })
              .get('#maxDaysSinceAdded option')
              .should('have.length', 5)
        })
    
        it.only('Should submit the filter', () => {
            cy.get('button:contains("Find properties")')
              .click({force:true})
              //cy.get('#propertySearchCriteria').submit()
        })
    
        it('Should sort by lowest price first', () => {
            cy.get('[data-test=sort-type]')
              .then( function ($sortBy){
                $sortBy.val('6')
                })
              .get('[data-test=sort-type] option')
              .should('have.length', 4)
        })
    
        it('Should click on first non featured property', () => {
           cy.get('#l-searchResults')
             .should('be.visible')
             .first()
             .click({force:true})
        })
    
    })  