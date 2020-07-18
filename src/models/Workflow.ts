interface Comparator {
    
}
export class Workflow {
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

export class WorkflowList {
    public data: Workflow[] = [];
    public lastUpdatedAt: null | Date = null;
}


export class WorkflowInstance {
    public id: number = 0;
    public createdBy: string = '';
    public createdOn: Date = new Date();
    public updatedBy: string = '';
    public updatedOn: Date = new Date();
    public lastRunAt: Date = new Date();
    public executionStatus: string = '';
    public status: string = '';
    public payload: string = '';
    public workflowName: string ='';
    public workflowId: number = 0;
    public schedule: string = '';
}

export class WorkflowDetail extends Workflow {
    public steps: WorkflowStep[] = [];
}

export class WorkflowStep {

}

export interface StepConfiguration {
    label: string;
    children: StepConfiguration[][];
    step: null | WorkflowStep;
    description: string;
}