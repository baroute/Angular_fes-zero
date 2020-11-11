import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("checked-push").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/'",300);
    };

  }

}
