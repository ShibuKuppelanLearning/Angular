import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private interValSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.interValSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = new Observable<number>(observer => {
      let count: number = 0;
      setInterval(() => {
        if (count === 12) {
          count++
          observer.error(new Error('count  is greater than 3'));
        } else if (count === 10) {
          observer.complete();
        } else {
          observer.next(count++);
        }
      }, 1000);
    });

    const modifiedCustomIntervalObservable = customIntervalObservable.pipe(filter((data: number) => {
      return data % 2 === 0;
    }), map((data: number) => {
      return 'Round ' + (data);
    }));

    this.interValSubscription = modifiedCustomIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Job Done :)');
    });
  }

  ngOnDestroy(): void {
    this.interValSubscription.unsubscribe();
  }

}
