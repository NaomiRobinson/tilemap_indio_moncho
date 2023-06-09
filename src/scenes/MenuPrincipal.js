export default class Menuprincipal extends Phaser.Scene {
  constructor() {
    super("menuprincipal");
  }

  preload() {

      this.load.image("botonPlay", "./public/images/play.png");
      this.load.image("cielo", "./public/images/sky.png");
  }

  create() {

    this.add.image(400, 300, "cielo");
    const botonPlay = this.add.image(400, 400, "botonPlay").setInteractive().setScale(1.5);

    const botonHelp = this.add.image(400, 600, "botonPlay").setInteractive().setScale(1.5);

  
    botonPlay.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer"
  });

  botonPlay.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
  });
  
  botonPlay.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("nivel1");
  });


  
  botonHelp.on("pointerover", () => {
    this.game.canvas.style.cursor = "pointer"
});

botonHelp.on("pointerout", () => {
    this.game.canvas.style.cursor = "default";
});

botonHelp.on("pointerdown", () => {
    this.game.canvas.style.cursor = "default";
    this.scene.start("instrucciones");
});

    this.titleText = this.add.text(115,200 , "NINJA MONCHO", {
      fontSize: "80px",
      fill: "#E6DE35",
      fontStyle: "bold",
    });

  this.titleText = this.add.text(140,270 , "CAZANDO ESTRELLAS ", {
    fontSize: "50px",
    fill: "#FFFFFF",
    fontStyle: "bold",
  });

  }


  update() {
  }
}