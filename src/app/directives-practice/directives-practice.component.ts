import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css']
})
export class DirectivesPracticeComponent implements OnInit {
  displayParagraph = false
  clicks = []

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.displayParagraph = !this.displayParagraph
    this.clicks.push(new Date().toString())
  }
}
