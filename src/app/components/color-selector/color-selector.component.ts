import {Component, Input, OnInit} from '@angular/core';
import {ColorOptions} from "../../enums/color-options";

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent implements OnInit {
  @Input() color: ColorOptions = ColorOptions.YELLOW
  @Input() selected: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }
}
