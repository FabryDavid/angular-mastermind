import {ColorOptions} from "../enums/color-options";
import {Result} from "../enums/result";

export default class TriedOption {
  private readonly _colors: ColorOptions[];
  private readonly _targetColors: ColorOptions[];

  constructor(colors: ColorOptions[], targetColors: ColorOptions[]) {
    this._colors = colors
    this._targetColors = targetColors
  }

  get colors(): ColorOptions[] {
    return this._colors;
  }

  get targetColors(): ColorOptions[] {
    return this._targetColors;
  }

  get correctTry(): boolean {
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i] !== this.targetColors[i]) {
        return false
      }
    }

    return true
  }

  getTryResult() {
    const result = []
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i] === this.targetColors[i]) {
        result.push(Result.CORRECT_POSITION)
      } else if (this.targetColors.includes(this.colors[i])) {
        result.push(Result.CORRECT_COLOR)
      } else {
        result.push(Result.INCORRECT)
      }
    }

    return result
  }
}
