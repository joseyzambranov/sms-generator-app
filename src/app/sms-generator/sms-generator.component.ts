import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray ,transferArrayItem} from '@angular/cdk/drag-drop';
import { SmsData } from '../sms-data.model';
import { from, of } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sms-generator',
  templateUrl: './sms-generator.component.html',
  styleUrls: ['./sms-generator.component.css']
})
export class SmsGeneratorComponent implements OnInit {
/*
  availableSmsList: SmsData[] = [
    { id: 1, phoneNumber: '123456789', message: 'Hola, ¿cómo estás?' },
    { id: 2, phoneNumber: '987654321', message: '¡Hola desde Angular!' }
  ];

  selectedSmsList: SmsData[] = [
    
  ];

  drop(event: CdkDragDrop<SmsData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.selectedSmsList, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  enviarSMS() {
    from(this.selectedSmsList).pipe(
      mergeMap((sms: SmsData) => this.enviarSMSIndividual(sms))
    ).subscribe(
      () => console.log('SMS enviado exitosamente.'),
      (error) => console.error('Error al enviar SMS:', error)
    );
  }

  enviarSMSIndividual(sms: SmsData) {
    return of(sms); // En este ejemplo, simplemente retornamos el SMS.
  }
*/
availableSmsList: SmsData[] = [
  { id: 1, phoneNumber: '123456789', message: 'Hola, ¿cómo estás?' },
  { id: 2, phoneNumber: '987654321', message: '¡Hola desde Angular!' }
];

done: SmsData[] = [];
 

  drop(event: CdkDragDrop<SmsData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  enviarSMS() {
    from(this.done).pipe(
      mergeMap((sms: SmsData) => this.enviarSMSIndividual(sms))
    ).subscribe(
      () => console.log('SMS enviado exitosamente.'),
      (error) => console.error('Error al enviar SMS:', error)
    );
  }

  enviarSMSIndividual(sms: SmsData) {
    // Aquí puedes implementar la lógica para enviar el SMS.
    // Puedes usar HTTP para enviar el SMS a través de un servicio real.
    // Por ahora, simplemente marcamos el SMS como enviado exitosamente después de un retraso simulado de 2 segundos.
    return of(sms).pipe(
      delay(2000),
      tap(() => {
        sms.envioExitoso = true;
        sms.mensajeRespuesta = 'El SMS fue enviado exitosamente.';
      })
  )}
  constructor() { }

  ngOnInit(): void {
  }

}
