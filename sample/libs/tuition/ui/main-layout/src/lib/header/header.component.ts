import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'sample-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() headerNavToggleEmitter = new EventEmitter<string>();

  constructor(private titleService: Title) {}

  ngOnInit(): void {
  }

  emitDrawerToggleEvent() {
    this.headerNavToggleEmitter.emit('toggle drawer')
  }

  get title() {
    return this.titleService.getTitle();
  }

}
