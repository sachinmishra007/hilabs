webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"family-group\">\n  <div class=\"panel\">\n    <div class=\"panel-heading\">\n      New Family Details\n    </div>\n    <div class=\"panel-block\">\n      <table class=\"table\">\n        <tr>\n          <td>Grandparent</td>\n          <td>Parent</td>\n          <td>Children</td>\n        </tr>\n        <tr>\n          <td>\n            <input type=\"text\" [(ngModel)]=\"userGrandparent.firstname\" placeholder=\"firstname\" class=\"input is-primary is-small\"\n            />\n          </td>\n          <td>\n            <input type=\"text\" [(ngModel)]=\"userparent.firstname\" placeholder=\"firstname\" class=\"input is-primary is-small\"/>\n          </td>\n          <td>\n              <input type=\"text\" [(ngModel)]=\"userchild.firstname\" placeholder=\"firstname\" class=\"input is-primary is-small\"/>\n          </td>\n        </tr>\n        <tr>\n            <td>\n              <input type=\"text\" [(ngModel)]=\"userGrandparent.lastname\" placeholder=\"lastname\" class=\"input is-primary is-small\"\n              />\n            </td>\n            <td>\n              <input type=\"text\" [(ngModel)]=\"userparent.lastname\" placeholder=\"lastname\" class=\"input is-primary is-small\"/>\n            </td>\n            <td>\n                <input type=\"text\" [(ngModel)]=\"userchild.lastname\" placeholder=\"lastname\" class=\"input is-primary is-small\"/>\n            </td>\n          </tr>\n          <tr>\n              <td>\n               \n              </td>\n              <td>\n                  <input type=\"button\" class=\"button  is-link\" value=\"+\" (click)=\"Add(userGrandparent,userparent,userchild,1)\" />               </td>\n              <td>\n                  <input type=\"button\" class=\"button  is-link\" value=\"+\" (click)=\"Add(userGrandparent,userparent,userchild,2)\" />                   </td>\n            </tr>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"family-group\">\n  <div class=\"panel \">\n    <div class=\"panel-heading\">\n      Family Group\n    </div>\n\n    <div class=\"panel-block\">\n      <label>Grandparent(s)</label>\n      <select [(ngModel)]=\"GrandParent\" class=\"dropdown\" (change)=\"change(GrandParent)\">\n        <option disabled>\n          <=====Select====>\n        </option>\n        <option *ngFor=\"let gp of familyGroup\" [ngValue]=\"gp\">\n          {{gp.grand_parent.firstname+' '+gp.grand_parent.lastname+' =>'+(gp.grand_parent.id)}}\n        </option>\n      </select>\n    </div>\n    <div *ngIf=\"GrandParent.parent!=undefined;then loadParent \">\n    </div>\n  </div>\n</div>\n\n<ng-template #loadParent>\n  <div class=\"panel-block\">\n    <label>Parent(s)</label>\n    <select [(ngModel)]=\"Parent\" style=\"margin-left: 130px;\" class=\"dropdown\" (change)=\"changParent(Parent)\">\n      <option disabled>\n        <=====Select====>\n      </option>\n      <option *ngFor=\"let gpp of GrandParent.parent\" [ngValue]=\"gpp\">\n        {{gpp.member.firstname+' '+gpp.member.lastname+' =>'+ (gpp.member.id)}}\n      </option>\n    </select>\n  </div>\n  <div *ngIf=\"Parent.children!=undefined;then otherParent\">\n  </div>\n</ng-template>\n\n\n<ng-template #otherParent>\n\n  <div class=\"panel-block\">\n    <label>Children</label>\n    <select [(ngModel)]=\"Children\" style=\"margin-left: 139px;\" class=\"dropdown\">\n      <option disabled>\n        <=====Select====>\n      </option>\n      <option *ngFor=\"let gppp of Parent.children\" [ngValue]=\"gppp\">\n        {{gppp.member.firstname+' '+gppp.member.lastname+' =>'+ (gppp.member.id)}}\n      </option>\n    </select>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_family_group_service__ = __webpack_require__("../../../../../src/app/services/family-group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = (function () {
    function AppComponent(_familyGroup) {
        this._familyGroup = _familyGroup;
        this.familyTemp = [];
        this.userGrandparent = {};
        this.userparent = {};
        this.userchild = {};
        this.GrandParent = {};
        this.Parent = {};
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("inside App");
        this.getFanilyGroupInfo();
    };
    AppComponent.prototype.getFanilyGroupInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._familyGroup
                            .getFamilyGroup()
                            .then(function (_response) {
                            _this.familyGroup = _response;
                            console.log(_response);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.change = function (GrandParent) {
        console.log(GrandParent.parent);
        this.Parent = {};
    };
    AppComponent.prototype.changParent = function (parent) {
        console.log(parent);
    };
    AppComponent.prototype.Add = function (a, b, c, param) {
        var temp = [];
        var gp = {
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
            });
        }
        else {
            this.familyTemp.push({
                "member": {
                    id: this.familyGroup.length + 1,
                    firstname: b.firstname,
                    lastname: b.lastname
                }
            });
        }
        console.log(gp, this.familyTemp);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_family_group_service__["a" /* FamilyGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_family_group_service__["a" /* FamilyGroupService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_family_group_service__ = __webpack_require__("../../../../../src/app/services/family-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_family_group_service__["a" /* FamilyGroupService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/family-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FamilyGroupService = (function () {
    function FamilyGroupService(http) {
        this.http = http;
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
    FamilyGroupService.prototype.getFamilyGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.familyGroup];
            });
        });
    };
    return FamilyGroupService;
}());
FamilyGroupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FamilyGroupService);

var _a;
//# sourceMappingURL=family-group.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map