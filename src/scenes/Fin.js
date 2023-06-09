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
    this.load.image("cielo", "./public/images/fondo.png");
    this.load.image("volver", "./public/images/volver.png");
}

  create() {

    this.add.image(400, 300, "cielo").setScale(0.55);

    const botonVolver = this.add.image(330, 355, "volver").setInteractive().setScale(1);

    const botonReplay = this.add.image(450, 355, "botonReplay").setInteractive().setScale(1);

        this.winnerText1 = this.add.text(140,165 , "¡Felicitaciones!", {
            fontSize: "56px",
            fill: "#E6DE35",
            fontStyle: "bold",
            
        });


        this.cantidadEstrellasTexto = this.add.text(
          180,
          250,
          "Estrellas recolectadas: " + this.cantidadEstrellas,
          { fontSize: "25px", fill: "#FFFFFF" }
        );

      botonReplay.on("pointerover", () => {
          this.game.canvas.style.cursor = "pointer"
      });
    
      botonReplay.on("pointerout", () => {
          this.game.canvas.style.cursor = "default";
      });
      
      botonReplay.on("pointerdown", () => {
          this.game.canvas.style.cursor = "default";
          this.scene.start("nivel1");
      });

      botonVolver.on("pointerover", () => {
        this.game.canvas.style.cursor = "pointer"
    });
  
    botonVolver.on("pointerout", () => {
        this.game.canvas.style.cursor = "default";
    });
    
    botonVolver.on("pointerdown", () => {
        this.game.canvas.style.cursor = "default";
        this.scene.start("menuprincipal");
    });

  }
}
