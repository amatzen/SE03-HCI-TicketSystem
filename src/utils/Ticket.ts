export interface TicketStatusColumn {
  title: string;
  color: string;
  tickets?: Ticket[];
}

interface Person {
  id: number;
  name: string;
  email: string;
  created_at: Date;
}

type EmployeeRole = "admin" | "support";

export interface Employee extends Person {
  role: EmployeeRole;
}

export interface Customer extends Person {}

export interface Ticket {
  id: number;
  status: TicketStatusColumn;
  title: string;
  created_at: Date;
  updated_at: Date;
  customer: Customer;
  assignee?: Employee;
}
