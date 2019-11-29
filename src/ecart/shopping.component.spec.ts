import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingComponent } from './shopping.component';

describe('ShoppingComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShoppingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShoppingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shoppingcart'`, () => {
    const fixture = TestBed.createComponent(ShoppingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('shoppingcart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ShoppingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('shoppingcart app is running!');
  });
});
