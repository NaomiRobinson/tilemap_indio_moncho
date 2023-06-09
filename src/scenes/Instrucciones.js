export default class Instrucciones extends Phaser.Scene {
  constructor() {
    super("instrucciones");
  }

  preload() {

      this.load.image("cielo", "./public/images/sky.png");
      this.load.image("botonPlay", "./public/images/play.png");
  }

  create() {

    this.add.image(400, 300, "cielo");

    const botonVolver = this.add.image(400, 600, "botonVolver").setInteractive().setScale(1.5);

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