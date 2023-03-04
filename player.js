class Player{
    constructor(){
     this.name = null;
     this.index = null;
     this.positionX = 0;
     this.positionY = 0;   
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",data =>{
            playerCount = data.val();
        });
    }

    addPlayer(){
        var playerIndex = "players/player"+this.index
        if(this.inex === 1){
            this.positionX = width/2-100;
        }else{
            this.positionX = width/2+100;
        }
        database.ref(playerIndex).set({
            name: this.name,
            positionX:this.positionX,
            positionY: this.positionY
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref(("players"));
        playerInfoRef.on("value",data =>{
            allPayers = data.val();
        })
    }
}