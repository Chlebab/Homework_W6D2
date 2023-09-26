const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('FutureOilRig', 500)
    dinosaur1 = new Dinosaur("T-Rex", "carnivore", "10")
    dinosaur2 = new Dinosaur("Triceraptops", "omnivore", "50")
    dinosaur3 = new Dinosaur("Stegosaurus", "omnivore", "30")
    dinosaur4 = new Dinosaur("Stegosaurus", "herbivore", "30")
    dinosaur5 = new Dinosaur("T-Rex", "carnivore", "10")
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'FutureOilRig')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 500)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.aCollectionOfDinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = dinosaur1.species 
    assert.deepStrictEqual(actual, "T-Rex")
  });
  

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1)
    park.removeDinosaur(dinosaur1)
    const actual = park.aCollectionOfDinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.guestsDinosaur()
    assert.strictEqual(actual, dinosaur2)
    })
  
  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.findStegosauruses()
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur4])
  });

  it('should be able to calculate the total number of visitors per day',function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.totalVisitors()
    assert.strictEqual(actual, 130)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.totalVisitors()*365
    assert.strictEqual(actual, 130*365)

  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.totalVisitors()*365*park.ticketPrice
    assert.strictEqual(actual, 130*365*500)

  });

  it('should be able to Remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.deleteTs()
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3, dinosaur4])

  });

  it('should be able to Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    const actual = park.dietType()
    assert.deepStrictEqual(actual, {'carnivore': 2, 'herbivore': 1, 'omnivore': 2})

  });

});
