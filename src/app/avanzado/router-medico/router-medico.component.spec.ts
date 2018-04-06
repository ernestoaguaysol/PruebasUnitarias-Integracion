import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Subject } from 'rxjs/Subject';

class FakeRouter {
  navigate(params) {

  }
}

class FakeActivatedRoute {
  // params: Observable<any> = Observable.empty();

  private subject = new Subject();

  // a lo que sea que esté suscripto, va a recibir una vez que hagamos esto
  // Envia un parametro al observable
  push(valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable(); // devuelve un observable
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Bede de redireccionar a médico cuando de guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( ['medico', '123']);
  });


  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo' });

    expect( component.id ).toBe('nuevo');
  });
});
