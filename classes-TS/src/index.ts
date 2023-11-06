import { once, measure } from "helpful-decorators";

class DateClass {
  //   name: string;
  private timeZone: string;
  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  @once
  @measure
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

const dateObj = new DateClass("Asia/Kolkata");
// console.log(dateObj.getTimezone());
// console.log(dateObj.getDate());
// dateObj.getExpensiveopTime();

let a = dateObj.getTime();
console.log(a);
