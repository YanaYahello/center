import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message, MessageType } from '@app/common/constants/notification';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private subject = new Subject<Message>();

    constructor() { }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string) {
        this.alert(MessageType.Success, message);
    }

    error(message: string) {
        this.alert(MessageType.Error, message);
    }

    alert(type: MessageType, message: string) {
        this.subject.next({
            type,
            message
        });
    }

    clear() {
        this.subject.next();
    }
}
