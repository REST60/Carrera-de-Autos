class Form{
    constructor(){
        this.input = createInput("");
        this.playButton = createButton("PLAY");
        this.greeting = createElement("h2");
        this.titleImg = createImg("assets/title.png","titulo del juego");
    }
    setElementsPositions(){
        this.input.position(width/2-110,height/2-80);
        this.playButton.position(width/2-90,height/2-20);
        this.greeting.position(width/2-300,height/2-100);
        this.titleImg.position(120,70);
    }
    display(){
        this.setElementsPositions();
        this.setStyle();
        this.handleMousePressed();
    }
    setStyle(){
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.playButton.hide();
    }

    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var mensaje = ` Hola ${this.input.value()} </br>espera a que otro jugador se una...`;
            this.greeting.html(mensaje);
            playerCount += 1;
            player.name = this.input.value();
            player.index = playerCount
            player.updateCount(playerCount);
            player.addPlayer();
        });
    }
}