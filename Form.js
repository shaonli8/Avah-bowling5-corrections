class Form{
    constructor(){
        this.title=createElement("h1")
        this.name=createInput("Name")
        //this.button=createButton("Play")
        this.greeting=createElement("h2")
        this.instruction=createElement("h4")
    }
    display(){
        this.title.position(70,150)
        this.title.html("BOWLING")
        this.name.position(70,350)
    }
}