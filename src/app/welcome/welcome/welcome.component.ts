import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    document.getElementById("fmain").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/main'",500);
    };
    document.getElementById("fcontents").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/contents'",500);
    };
    document.getElementById("fshow").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/show'",500);
    };
    document.getElementById("fintroduction").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/introduction'",500);
    };
    document.getElementById("fgame").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/game'",500);
    };
    document.getElementById("fshop").onclick = function() {
      setTimeout("location.href='https://zero-fes.web.app/buy'",500);
    };

  }


}
