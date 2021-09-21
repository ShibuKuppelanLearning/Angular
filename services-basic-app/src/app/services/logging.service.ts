export class LoggingService {
    logAccountStatusUpdate(serverName: string, newStatus: string) {
        console.log('A server ' + (serverName) + ' status changed, new status : ' + newStatus);
    }

    logNewAccountAdded(serverName: string, newStatus: string) {
        console.log('A new server was added with name : ' + serverName + ' and status : ' + newStatus);
    }
}