import { Component } from '@angular/core';
import { FamilyGroupService } from './services/family-group.service';

interface details {
  firstname: string;
  lastname: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  familyGroup: any;
  familyTemp: any = [];
  selectedValue: any;
  userGrandparent: details = {} as any;
  userparent: details = {} as any;
  userchild: details = {} as any;
  GrandParent: any = {};
  Parent: any = {};
  constructor(private _familyGroup: FamilyGroupService) {

  }

  ngOnInit() {
    console.log("inside App");
    this.getFanilyGroupInfo();
  }
  public async getFanilyGroupInfo() {
    await this._familyGroup
      .getFamilyGroup()
      .then((_response) => {
        this.familyGroup = _response;
        console.log(_response);

      });
  }
  public change(GrandParent) {
    console.log(GrandParent.parent);
    this.Parent = {};
  }

  public changParent(parent) {
    console.log(parent);
  }

  public Add(a, b, c, param) {
    let temp = [];
    let gp: any = {
      "grand_parent": {
        id: this.familyGroup.length + 1,
        firstname: a.firstname,
        lastname: a.lastname
      }
    };

    if (param == 1) {
      this.familyTemp.push({
        "member": {
          id: this.familyGroup.length + 1,
          firstname: b.firstname,
          lastname: b.lastname
        }
      })
    }
    else{
      this.familyTemp.push({
        "member": {
          id: this.familyGroup.length + 1,
          firstname: b.firstname,
          lastname: b.lastname
        }
      })
    }
    console.log(gp, this.familyTemp);


  }
}
