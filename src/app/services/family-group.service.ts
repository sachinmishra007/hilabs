import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class FamilyGroupService {

  familyGroup:any;
  constructor(private http: Http) {
    this.familyGroup = [
      {
        "grand_parent": {
          "id": "34kit348f7",
          "firstname": "Andrejs",
          "lastname": "Jelisejevs",
          "sex": 1,
          "image": "people/elisej.jpg"
        },
        "parent": [
          {
            "member": {
              "id": "11kit348f1",
              "firstname": "Natalija",
              "lastname": "Tarasova",
              "sex": 2,
              "image": "people/tarasik.jpg"
            }
          },
          {
            "member": {
              "id": "dgkit548f1",
              "firstname": "Inna",
              "lastname": "Adamena",
              "sex": 2,
              "image": "people/inna.jpg"
            }
          }
        ]
      },
      {
        "grand_parent": {
          "id": "666it548f1",
          "firstname": "Darja",
          "lastname": "Petrušina",
          "sex": 2,
          "current": true,
          "image": "people/dasha.jpg"
        },
        "parent": [
          {
            "member": {
              "id": "sdf4fsh544",
              "firstname": "Olegs",
              "lastname": "Jaroševics",
              "sex": 1,
              "image": "people/oleg.jpg"
            },
            "children": [
              {
                "member": {
                  "id": "d5745fg5f1",
                  "firstname": "Andrejs",
                  "lastname": "Silins",
                  "sex": 1,
                  "image": "people/silin.jpg"
                }
              },
              {
                "member": {
                  "id": "435dfdf23",
                  "firstname": "Dmitrijs",
                  "lastname": "Migunovs",
                  "sex": 1,
                  "image": "people/migunov.jpg"
                }
              },
              {
                "member": {
                  "id": "dasdfdgkdf1",
                  "firstname": "Eduards",
                  "lastname": "Plehs",
                  "sex": 1,
                  "image": "people/plehs.jpg"
                }
              },
              {
                "member": {
                  "id": "3434sdf548f1",
                  "firstname": "Ivo",
                  "lastname": "Azirjans",
                  "sex": 1,
                  "image": "people/ivo.jpg"
                }
              }
            ]
          }
        ]
      },
      {
        "grand_parent": {
          "id": "dere343er34",
          "firstname": "Edgars",
          "lastname": "Bokta",
          "sex": 1,
          "image": "people/bokta.jpg"
        },
        "parent": [
          {
            "member": {
              "id": "d45465448f1",
              "firstname": "Anastasija",
              "lastname": "Jevdokimova",
              "sex": 2,
              "image": "people/nastja.jpg"
            },
            "children": [
              {
                "member": {
                  "id": "uu3245ef48f1",
                  "firstname": "Antija",
                  "lastname": "Janševska",
                  "sex": 2,
                  "image": "people/antija.jpg"
                }
              },
              {
                "member": {
                  "id": "32fdf43t548f1",
                  "firstname": "Dina",
                  "lastname": "Konoplova",
                  "sex": 2,
                  "image": "people/dina.jpg"
                }
              }
            ]
          },
          {
            "member": {
              "id": "23ffkit5484",
              "firstname": "Maksims",
              "lastname": "Kondratjevs",
              "sex": 1,
              "image": "people/maks.jpg",
              "alive": false
            }
          },
          {
            "member": {
              "id": "123it5648f1",
              "firstname": "Vitalijs",
              "lastname": "Silins",
              "sex": 1,
              "image": "people/vitalik.jpg"
            }
          }
        ]
      }
    ];
  }

  public async getFamilyGroup() {
     return  this.familyGroup;
      
  }
}
