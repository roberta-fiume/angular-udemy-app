import { Component } from '@angular/core';

@Component({
    // selector: '[app-servers]',
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = "No server was created";
    serverName = "test server";
    serverCreated = false;
    servers = ['Testserver', 'Testserver 2'];

    constructor() {}

    ngOnInit() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    }

    onUpdateServerName(event: any) {
        console.log("This is the event",event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}