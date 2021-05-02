import {createComponentFactory, Spectator} from '@ngneat/spectator';
import {DataService} from './data.service';
import {AppComponent} from './app.component';

describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [{provide: DataService, useValue: {name: 'John Doe'}}]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('initial', () => {
    const span = spectator.query('span');
    expect(span).toHaveText('Hello, John Doe');
  });

  it('should be Barry Boe when manipulating data and detectChanges (but it fails, because it is John Doe)', () => {
    spectator.component.data.name = 'Barry Boe';
    spectator.component.ngOnInit(); // this is a anti-pattern.
    spectator.detectChanges();
    const span = spectator.query('span');
    expect(span).toHaveText('Hello, Barry Boe');
  });

  it('should be John Doe again (but it fails, because it is Barry Boe)', () => {
    const span = spectator.query('span');
    expect(span).toHaveText('Hello, John Doe');
  });
});
