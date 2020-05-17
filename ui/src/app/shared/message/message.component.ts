import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@services/notification.service';
import { Message, MessageType } from '@app/common/constants/notification';

@Component({
    selector   : 'app-message',
    templateUrl: './message.component.html',
    styleUrls  : ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    alerts: Message[] = [];

    constructor(private notificationService: NotificationService) { }

    ngOnInit() {
        this.notificationService.getAlert().subscribe((alert: Message) => {
            if (!alert) {
                this.alerts = [];
                return;
            }
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), 3000);
        });
    }

    removeAlert(message: Message) {
        this.alerts = this.alerts.filter(x => x !== message);
    }

    cssClass(message: Message) {
        if (!message) {
            return;
        }
        switch (message.type) {
            case MessageType.Success:
                return 'notification notification-success';
            case MessageType.Error:
                return 'notification notification-error';
        }
    }
}
