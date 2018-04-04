import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // Dispara la deteccion de cambios

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');

    });

    it('Debe mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);

        fixture.detectChanges();

        // para que se evalue despues de que el ciclo de deteccion de cambios termine
        fixture.whenStable().then( () => {

            const input = fixture.debugElement.query(By.css('input'));
            const elem = input.nativeElement;
    
            console.log(elem);
            
    
            expect(elem.value).toBe('55');
        });

    });

    it('Debe de incrementar/decrementar en 5, con un clik en el boton', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        // console.log( botones );

        
        botones[0].triggerEventHandler('click', null); // simula el clik en el boton[0]
        expect( component.progreso ).toBe(45);
        
        botones[1].triggerEventHandler('click', null); // simula el clik en el boton[1]
        expect( component.progreso ).toBe(50);


    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null); // simula el clik en el boton[0]
        
        fixture.detectChanges(); // Dispara la deteccion de cambios
        
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45'); // 45 tiene que ser un string

    });


});
