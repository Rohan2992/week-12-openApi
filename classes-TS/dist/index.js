"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpful_decorators_1 = require("helpful-decorators");
class DateClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
    getTime() {
        console.log(" I am inside the get Time Method");
        const date = new Date().toLocaleTimeString("IST", {
            timeZone: this.timeZone
        });
        return date;
    }
    getDate() {
        const date = new Date().toLocaleDateString("IST", {
            timeZone: this.timeZone
        });
        return date;
    }
    getTimezone() {
        return this.timeZone;
    }
    getExpensiveopTime() {
        let ctr = 0;
        const startTime = new Date().getTime();
        console.log(this.getTime());
        for (let i = 0; i < 10000000000; i++) {
            ctr++;
        }
        const endTime = new Date().getTime();
        console.log(this.getTime());
        console.log(ctr, (endTime - startTime) / 1000);
    }
}
__decorate([
    helpful_decorators_1.once,
    helpful_decorators_1.measure
], DateClass.prototype, "getTime", null);
const dateObj = new DateClass("Asia/Kolkata");
// console.log(dateObj.getTimezone());
// console.log(dateObj.getDate());
// dateObj.getExpensiveopTime();
let a = dateObj.getTime();
console.log(a);
