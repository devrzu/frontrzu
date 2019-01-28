import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Output() updateKeyword = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const search_keyword = form.value["search-input"];
    // this.updateKeyword.emit(search_keyword);
    this.getCommentList(search_keyword);
    // this.feedComponent.getCommentList(search_keyword);
  }

  getCommentList(search_keyword: string) {
    this.router.navigate(["/feeds", search_keyword]);
  }
  onSearchChange(search_keyword: string) {
    if (search_keyword.length >= 2) {
      this.getCommentList(search_keyword);
    }
  }
}
