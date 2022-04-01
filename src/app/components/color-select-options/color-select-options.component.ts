import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorOptions} from "../../enums/color-options";

@Component({
  selector: 'app-color-select-options',
  templateUrl: './color-select-options.component.html',
  styleUrls: ['./color-select-options.component.scss']
})
export class ColorSelectOptionsComponent implements OnInit {
  @Input() selectedColor: ColorOptions | null = null
  @Output() onColorSelect = new EventEmitter<ColorOptions>()

  colorOptions = ColorOptions

  constructor() {
  }

  ngOnInit(): void {
  }

  selectColor(color: ColorOptions) {
    this.onColorSelect.emit(color)
  }
}
