class Park{ 
    constructor(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.aCollectionOfDinosaurs = [];
}

    addDinosaur(dinosaur){
        this.aCollectionOfDinosaurs.push(dinosaur)
        return this.aCollectionOfDinosaurs
    }

    removeDinosaur(dinosaur){
        const indexOfDinosaur = this.aCollectionOfDinosaurs.indexOf(dinosaur)
        if (indexOfDinosaur === -1){
            return
        }
        this.aCollectionOfDinosaurs.splice(indexOfDinosaur, 1)
    }
    guestsDinosaur(){
        let highestValue = 0
        let mostVisitors = null
        for(const dinosaur of this.aCollectionOfDinosaurs){
            if(dinosaur.guestsAttractedPerDay > highestValue){
                highestValue = dinosaur.guestsAttractedPerDay
                mostVisitors = dinosaur
            }
        }
        return mostVisitors
    }

    findStegosauruses(){
        const stegoTable = []
        for(const dinosaur of this.aCollectionOfDinosaurs){
            if(dinosaur.species == "Stegosaurus"){
                stegoTable.push(dinosaur)
            }
        }
        return stegoTable
    }

    totalVisitors(){
        let total = 0
        for(const dinosaur of this.aCollectionOfDinosaurs){
            total += Number(dinosaur.guestsAttractedPerDay)
        }
        return total

    }

    deleteTs(){
        let noTsTable = []
        for(const dinosaur of this.aCollectionOfDinosaurs){
            if(dinosaur.species != "T-Rex"){
                noTsTable.push(dinosaur)
            }
        }  
        return noTsTable
    }


    dietType(){
        const diets = {
            carnivore:0,
            omnivore:0,
            herbivore:0
        }
        for(const dinosaur of this.aCollectionOfDinosaurs){
            if(dinosaur.diet == "carnivore") {
                diets.carnivore +=1
            
            }else if(dinosaur.diet == "omnivore") {
                diets.omnivore +=1
            
            }else if(dinosaur.diet == "herbivore") {
                diets.herbivore +=1
            }
        }  
        return diets
    }

}
module.exports = Park;