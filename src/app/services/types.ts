export interface CreateTaskParams {
  token: string;
  title: string;
  description: string;
  tags: string;
  budget_from: number;
  budget_to: number;
  deadline: number;
  reminds: number;
  all_auto_responses: boolean;
  rules?: string;
}