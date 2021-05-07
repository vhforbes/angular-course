import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html',
  styleUrls: ['./databinding-practice.component.css']
})
export class DatabindingPracticeComponent implements OnInit {
  userName = ""
  userCreated = false

  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(event: any) {
    this.userName = event.target.value;
  }

  onClick() {
    this.userCreated = true
  }
}
