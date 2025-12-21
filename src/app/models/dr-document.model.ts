 export interface DrDocument {
  id?: number;

  title: string;

  component: string; // EC2, ALB, RDS, APP

  detection: string;

  immediateAction: string;

  recoverySteps: string;

  notes?: string;

  createdAt?: string;
  updatedAt?: string;
}
