// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Fin extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("fin");
  }

  init(data) {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
    console.log(data);
    this.cantidadEstrellas = data.cantidadEstrellas;
  }

  preload() {

    this.load.image("botonReplay", "./public/images/replay.png");
    this.load.image("fondo", "./public/images/sky.png");
}

  create() {

    this.add.image(400, 300, "fondo");

        this.winnerText1 = this.add.text(140,255 , "¡Felicitaciones!", {
            fontSize: "56px",
            fill: "#E6DE35",
            fontStyle: "bold",
            
        });

        this.winnerText2 = this.add.text(290,350 , "", {
            fontSize: "60px",
            fill: "#fff",
        });

        this.cantidadEstrellasTexto = this.add.text(
          160,
          350,
          "Estrellas recolectadas: " + this.cantidadEstrellas,
          { fontSize: "25px", fill: "#FFFFFF" }
        );

        this.playAgainText = this.add.text(280,430 , "<SPACE> jugar de nuevo", {
            fontSize: "20px",
            fill: "#fff",
        });

  }
}
