export class Counter{
    ai=0
    ia=0
    aiusercount(){
        this.ai++
        console.log("Active to inactive is :"+this.ai)
    }
    iausercount(){
        this.ia++
        console.log("Inactive to active is :"+this.ia)
    }
}