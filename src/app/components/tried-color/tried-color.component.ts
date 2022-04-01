import {Component, Input, OnInit} from '@angular/core';
import TriedOption from "../../classes/TriedOption";
import {Result} from "../../enums/result";

@Component({
  selector: 'app-tried-color',
  templateUrl: './tried-color.component.html',
  styleUrls: ['./tried-color.component.scss']
})
export class TriedColorComponent implements OnInit {
  @Input() triedOption: TriedOption | null = null
  resultEnum = Result
  result: Result[] = []

  constructor() {
  }

  ngOnInit(): void {
    if (!this.triedOption) {
      return
    }

    // Randomizing the results
    this.result = this.triedOption.getTryResult().sort(() => 0.5 - Math.random());
  }
}
