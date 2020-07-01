export class LogEvent {
    public id: number = 0;
    public createdBy: string = '';
    public createdOn: Date = new Date();
    public updatedBy: string = '';
    public updatedOn: Date = new Date();
    public activeInstanceCount: number = 0;
    public errorInstancesCount: number = 0;
    public lastRunAt: Date = new Date();
    public name: string = '';
    public status: string = '';
}

export class LogEventList {
    public data: LogEvent[] = [];
    public lastUpdatedAt: null | Date = null;
}