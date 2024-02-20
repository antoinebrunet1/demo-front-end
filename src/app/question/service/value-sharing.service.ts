import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ValueSharingService {
    constructor() {}

    public submissionIsSuccessful: boolean;
}