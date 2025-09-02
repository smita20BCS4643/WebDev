class Bird{

    fly()
    {
        return `Flying....`
    }
}

class Pengunine extends Bird {
    fly()
    {
        return `Pengunies Can not Fly...`
    }
}

let bird = new Bird()
let peng = new Pengunine()

console.log(bird.fly());
console.log(peng.fly());

// polymorphism - method name is exactly same but behaviour of the method is different in bird and pengine class