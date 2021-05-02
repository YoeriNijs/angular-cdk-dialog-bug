import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('AppComponent TestBed', () => {
  let fixture: ComponentFixture<AppComponent>;

  const createComponent = () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: {name: 'John Doe'} }],
    });

    return TestBed.createComponent(AppComponent);
  };

  beforeEach(() => {
    fixture = createComponent();
    fixture.detectChanges();
  });

  it('initial', () => {
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.innerHTML).toBe('Hello, John Doe');
  });

  it('should be Barry Boe when manipulating data and detectChanges (but it fails, because it is John Doe)', () => {
    fixture.componentInstance.data.name = 'Barry Boe';
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.innerHTML).toBe('Hello, Barry Boe');
  });

  it('should be John Doe again (but it fails, because it is Barry Boe)', () => {
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.innerHTML).toBe('Hello, John Doe');
  });
});

