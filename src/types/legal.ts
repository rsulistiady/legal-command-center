export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';
export type MatterStatus = 'Open' | 'In Progress' | 'Pending Approval' | 'Completed' | 'Blocked';
export type WorkflowStage =
  | 'Request Submitted'
  | 'Under Review'
  | 'Drafting'
  | 'Internal Review'
  | 'Revision'
  | 'Approval'
  | 'Execution'
  | 'Archive / Monitoring';

export interface LegalMatter {
  id: string;
  title: string;
  category: string;
  entity: string;
  businessUnit: string;
  status: MatterStatus;
  priority: 'P1' | 'P2' | 'P3';
  riskLevel: RiskLevel;
  owner: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  workflowStage: WorkflowStage;
  completion: number;
  tags: string[];
  relatedDocuments: string[];
  summary: string;
  nextAction: string;
  blockers: string[];
}

export interface LegalDocument {
  id: string;
  title: string;
  type: string;
  version: string;
  linkedMatterId: string;
  validationStatus: 'Pass' | 'Warning' | 'Critical';
  readinessScore: number;
  lastReviewedBy: string;
  lastReviewedAt: string;
  signatoryStatus: 'Ready' | 'Pending Authority' | 'Pending Signature';
  fileStatus: 'Draft' | 'Review' | 'Final';
  notes: string;
}

export interface ValidationChecklistItem {
  id: string;
  label: string;
  category: string;
  status: 'Pass' | 'Warning' | 'Critical';
  severity: 'Low' | 'Medium' | 'High';
  recommendation: string;
  required: boolean;
}

export interface PresentationDeck {
  id: string;
  title: string;
  audienceType: 'Board' | 'Management' | 'Legal Team';
  mode: 'Executive' | 'Detailed';
  sections: string[];
  selectedMatterIds: string[];
  selectedDocumentIds: string[];
  createdAt: string;
  updatedAt: string;
}
