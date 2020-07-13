

class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true 
        this.generate ()
    }

    hunt () {
        this.food += 2
    }

    eat () {
        if (this.food > 0) {
            this.food -=1
        }
        else {
            this.isHealthy = false
        }
    }
    generate () {
        const sectionElement = document.querySelector ('body')
        const travelerElement = document.createElement ('Traveler')
        const nameElement = document.createElement ('Name')
        const foodElement = document.createElement('Food')
        const healthyElement = document.createElement('Healthy')

        sectionElement.append(travelerElement)
        travelerElement.append(nameElement)
        travelerElement.append(foodElement)
        travelerElement.append(healthyElement)

        nameElement.append(this.name) 
        foodElement.append(this.food)
        healthyElement.append(this.isHealthy)
    }
    
}



class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
        this.generate ()
    }

    getAvailableSeatCount () {
        return this.capacity - this.passengers.length

    }

    join(travelers) {
        if (this.capacity !== this.passengers.length) {
            this.passengers.push(travelers)
        }
        else {
            return "Sorry They will have to get on the next Wagon"
        }
    }

    shouldQuarantine () {
        const isUnhealthy = this.passengers.some(i => i.isHealthy == false)
        return isUnhealthy
    }

    totalFood () {
        let foodQuantity = 0
        for (let i = 0; i < this.passengers.length; i ++) {
            foodQuantity += this.passengers[i].food
        }
        return foodQuantity
    }
    generate () {
        const sectionElement = document.querySelector ('body')
        const wagonElement = document.createElement ('Wagon')
        const capacityElement = document.createElement ('Capacity')
        const passengerElement = document.createElement ('Passengers')

        sectionElement.append(wagonElement)
        wagonElement.append(capacityElement)
        wagonElement.append(passengerElement)

        capacityElement.append(this.capacity) 
        passengerElement.append(this.passengers)
    }
}