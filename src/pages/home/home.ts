import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarPage } from '../star/star';
import { ListPage} from '../list/list';
import { FormulairePage } from '../formulaire/formulaire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  starPage = StarPage;
  listPage = ListPage;
  formulairePage = FormulairePage;
  constructor(public navCtrl: NavController) {

  }

}
