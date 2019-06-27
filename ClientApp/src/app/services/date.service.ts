import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
    public GetCurrentDate(): Date {
        return new Date();
    }
}