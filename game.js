class Game {
    constructor() {
        this.reseteo = createElement("h2");
        this.resetButton = createButton("Reiniciar");
        this.reseteo.html("reiniciar juego");
        this.reseteo.position(width / 2 + 200, 400);
        this.resetButton.position(width / 2 + 230, 400);
    }
    start() {
        player = new Player();
        playerCount = player.getCount();
        form = new Form();
        form.display();

        car1 = createSprite(width / 2 - 50, height - 100);
        car1.addImage("coche1", car1_img);
        car1.scale = 0.07;
        car2 = createSprite(width / 2 + 50, height - 100);
        car2.addImage("coche2", car2_img);
        car2.scale = 0.07;

        cars = [car1, car2];
        this.handleResetButton();

        var posiciones = [
            { x: width / 2 + 250, y: height - 800, image: obstacle2Image },
            { x: width / 2 - 150, y: height - 1300, image: obstacle1Image },
            { x: width / 2 + 250, y: height - 1800, image: obstacle1Image },
            { x: width / 2 - 180, y: height - 2300, image: obstacle2Image },
            { x: width / 2, y: height - 2800, image: obstacle2Image },
            { x: width / 2 - 180, y: height - 3300, image: obstacle1Image },
            { x: width / 2 + 250, y: height - 3800, image: obstacle2Image },
        ];

        fuels = new Group();
        coins = new Group();

        this.addSprites(fuels, 10, fuel_img, 0.02);
        this.addSprites(coins, 20, goldCoin_img, 0.09);

        obstacless1 = new Group();
        obstacless2 = new Group();
        this.addSprites(obstacless1, 7, obstacle1_img, 0.04,posiciones);
        this.addSprites(obstacless2, 7, obstacle2_img, 0.04,posiciones);

    }

    getState() {
        var gameStateRef = database.ref("gameSate");
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }
    update(state) {
        database.ref("/").update({
            gameState: state
        })
    }
    play() {
        this.handleElements();
        this.handleResetButton();
        Player.getPlayerInfo();
        console.log(allPlayers);
        if (allPlayers !== undefined) {
            image(track_img, 0, -height - 5, width, height * 6);
            drawSprites();
        }
    }

    handleElements() {
        form.hide();

    }

    handleResetButton() {
        this.resetButton.mousePressed(() => {
            database.ref("/").set({
                gameState: 0,
                playerCount: 0,
                players: {}
            });
            window.location.reload()
        });
    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, spriteScale,position = []) {
        for (var i = 0; i < numberOfSprites; i++) {
            if(posicion.length>0){
                var x = posiciones[i].x;
                var y = posiciones[i].y;
            }   else{
                var x = random(width / 2 + 150, width / 2 - 150);
                var y = random(-height * 4.5, height - 400);
            }


            var sprite = createSprite(x, y);
            sprite.addImage("sprite", spriteImage);
            sprite.scale = spriteScale;
            spriteGroup.add(sprite);
        }
    }

} 