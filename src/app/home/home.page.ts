import { Component, OnInit } from '@angular/core';
import { PluginService } from '../plugin.service';

//declare cordova:any

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public param1;
  public param2;

  constructor(public pluginService: PluginService) {
  }

  ngOnInit() {
    console.log('**** ngOnInit');
  }

  add() {
    this.pluginService.add(this.param1, this.param2).then(
      (data) => console.log("Add", data)).catch((error) => console.error(error))
  }

  substract() {
    this.pluginService.substract(this.param1, this.param2).then(
      (data) => console.log("Substract", data)).catch((error) => console.error(error))
  }

}
