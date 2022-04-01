import {Component} from '@angular/core';
import {ColorOptions} from "./enums/color-options";
import TriedOption from "./classes/TriedOption";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly maxTry = 10;
  title = 'angular-mastermind';
  selectedIndex = -1
  targetColors: ColorOptions[] = []
  triedVariations: TriedOption[] = []
  gameEnded = false
  gameOver = false
  private baseOptions = [ColorOptions.YELLOW, ColorOptions.ORANGE, ColorOptions.PINK, ColorOptions.BLUE]
  selectedColors = this.baseOptions.slice()

  constructor() {
    this.initializeGame()
  }

  initializeGame() {
    this.selectedColors = this.baseOptions.slice()
    this.selectedIndex = -1
    this.triedVariations = []
    this.targetColors = []
    this.gameEnded = false
    this.gameOver = false

    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * 4);
      this.targetColors.push(this.baseOptions[index])
    }
  }

  selectItem(index: number) {
    this.selectedIndex = index
  }

  tryColors() {
    const triedOption = new TriedOption(this.selectedColors.slice(), this.targetColors.slice())
    this.triedVariations.push(triedOption)

    if (this.triedVariations.length >= this.maxTry) {
      this.gameEnded = true
      this.gameOver = true
    } else if (triedOption.correctTry) {
      this.gameEnded = true
      this.gameOver = false
    }
  }
}
