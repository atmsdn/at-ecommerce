import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit {
  timeinterval: any;
  ngAfterViewInit(): void {
    /***** SET A VALID END DATE *****/
    const deadline = new Date(Date.parse(String(new Date())) + 15 * 24 * 60 * 60 * 1000);
    // this.initializeClock('clockdiv-1', deadline.toISOString());
  }
  // /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
  // initializeClock(id: string, endtime: string) {
  //   const clock = document.getElementById(id);

  //   const daysSpan = clock?.querySelector('.days');
  //   const hoursSpan = clock?.querySelector('.hours');
  //   const minutesSpan = clock?.querySelector('.minutes');
  //   const secondsSpan = clock?.querySelector('.seconds');

  //   // run function once at first to avoid delay
  //   this.updateClock(endtime, daysSpan, hoursSpan, minutesSpan, secondsSpan);

  //   this.timeinterval = setInterval(this.updateClock, 1000);
  // }

  // updateClock(endtime: any, daysSpan: any, hoursSpan: any, minutesSpan: any, secondsSpan: any) {
  //   const t = this.getTimeRemaining(endtime);
  //   daysSpan.innerHTML = t?.days.toString();
  //   hoursSpan.innerHTML = ('0' + t?.hours).slice(-2);
  //   minutesSpan.innerHTML = ('0' + t?.minutes).slice(-2);
  //   secondsSpan.innerHTML = ('0' + t?.seconds).slice(-2);

  //   if (t.total <= 0) {
  //     clearInterval(this.timeinterval);
  //   }
  // }

  // getTimeRemaining(endtime: string): { total: number, days: number, hours: number, minutes: number, seconds: number } {
  //   const t: number = Date.parse(endtime) - Date.parse(String(new Date()));

  //   /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
  //   const seconds: number = Math.floor((t / 1000) % 60);
  //   const minutes: number = Math.floor((t / 1000 / 60) % 60);
  //   const hours: number = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   const days: number = Math.floor(t / (1000 * 60 * 60 * 24));

  //   /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
  //   return {
  //     total: t,
  //     days: days,
  //     hours: hours,
  //     minutes: minutes,
  //     seconds: seconds
  //   };
  // }

}
