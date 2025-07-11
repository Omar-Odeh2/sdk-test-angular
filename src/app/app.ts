import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sdk-test-angular');

  runRecoveryScript() {
    (window as any).churnSolution?.checkFailedPayment(
      '1142e6676c5d4337d6b3be9b248f61615379313fd1e2023f8871b531f2525116',
      'sub_1RjmcFGKID6HxEjkAicMNUmR',
      'ak_9bb38d6a23acc14b',
      {
        record: true, // enable recording flag, is true by default
        layoutSelector: 'div#main-layout', // the layout in which the banner is displayed, defaults to the body
        bannerType: 'sticky', // banner positioning type, can be either "sticky" or "fixed", defaults to "sticky"
        bannerTopPosition: 0, // banner top coordinate (in pixels), set to 0 by default
      }
    );
  }

  onChurnSolutionLoad(callback = () => {}, timeout = 10000, interval = 100) {
    const startTime = Date.now();

    const check = () => {
      if ((window as any).churnSolution) {
        callback();
      } else if (Date.now() - startTime < timeout) {
        setTimeout(check, interval);
      } else {
        console.warn('Churn Solution script did not load in time.');
      }
    };

    check();
  }

  ngOnInit() {
    this.onChurnSolutionLoad(() => this.runRecoveryScript());
  }
}
