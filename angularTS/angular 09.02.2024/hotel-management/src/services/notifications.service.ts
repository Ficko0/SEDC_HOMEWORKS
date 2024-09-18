import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationType } from '../types/notifications.type';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  showNotification(
    message: string,
    action: string = '',
    type = NotificationType.Success,
    duration: number = 5000
  ) {
    return this.snackBar.open(message, action, {
      panelClass: `${type}-snackbar`,
      duration,
    });
  }
}
