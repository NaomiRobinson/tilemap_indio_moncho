export default class Instrucciones extends Phaser.Scene {  //terminar escena
  constructor() {
    super("instrucciones");
  }

  preload() {

      this.load.image("cielo", "./public/images/sky.png");
      this.load.image("botonHelp", "./public/images/help.png");
      this.load.image ("flechas", "./public/images/flechas.png");
  }

  create() {

    this.add.image(400, 300, "cielo");

    this.add.image(400, 480, "flechas").setScale(0.5);

    this.add.image(700,265, "star");
    this.add.image(95,265, "star");

    this.add.image(745,178, "star");
    this.add.image(65,178, "star");

    const botonHelp = this.add.image(750, 50, "botonHelp").setInteractive().setScale(1);

    botonHelp.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer"
  });

  botonHelp.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
  });
  
  botonHelp.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("menuprincipal");
  });


  this.titleText = this.add.text(85,170 , "Ayuda al Ninja a pasar por los diferentes laberintos.", {
    fontSize: "20px",
    fill: "#FFFFFF",
    fontStyle: "bold",
  });

  this.titleText = this.add.text(120,250 , "Para desbloquear la salida, debes recolectar 5", {
    fontSize: "20px",
    fill: "#FFFFFF",
    fontStyle: "bold",
  });

  this.titleText = this.add.text(170,270 , "estrellas en cada uno de los niveles.", {
    fontSize: "20px",
    fill: "#FFFFFF",
    fontStyle: "bold",
  });

  this.titleText = this.add.text(350,365 , "CONTROLES:", {
    fontSize: "20px",
    fill: "#FFFFFF",
    fontStyle: "bold", 
  });


  }
    
}