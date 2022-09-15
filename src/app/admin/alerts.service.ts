import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  successNotification() {
    Swal.fire({
      title: 'Successful',
      text: 'Saved succesfully',
      icon: 'success',
    })
  }

  errorNotification(error:string) {
    Swal.fire({
      title: 'Error',
      text: `Failed. ${error}`  ,
      icon: 'error',
    })
  }

  infoNotification(){
    Swal.fire({
      title: 'Invalid',
      text: `Please fill out all the required fields`  ,
      icon: 'info',
    })
  }
}
