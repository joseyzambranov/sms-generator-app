import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray ,transferArrayItem} from '@angular/cdk/drag-drop';
import { SmsData } from '../sms-data.model';
import { from, of } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { NgxGraphModule } from '@swimlane/ngx-graph'; 



@Component({
  selector: 'app-sms-generator',
  templateUrl: './sms-generator.component.html',
  styleUrls: ['./sms-generator.component.css']
})
export class SmsGeneratorComponent implements OnInit {
  
availableSmsList: SmsData[] = [
  { id: 1, phoneNumber: '123456789', message: 'Hola, ¿cómo estás?' },
  { id: 2, phoneNumber: '987654321', message: '¡Hola desde Angular!' }
];

done: SmsData[] = [];

graphLinks = [
  { source: 'node1', target: 'node2' },
  { source: 'node2', target: 'node3' },
  // Agrega más enlaces aquí según tus necesidades
];

// Definir la propiedad graphNodes
graphNodes = [
  { id: 'node1', label: 'Nodo 1' },
  { id: 'node2', label: 'Nodo 2' },
  { id: 'node3', label: 'Nodo 3' },
  // Agrega más nodos aquí según tus necesidades
];
 

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
