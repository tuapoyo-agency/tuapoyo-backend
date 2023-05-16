export class Job {
  id: number;
  idEmployer: number;
  idCity: number;
  address: string;
  latitude: number;
  longitude: number;
  idWorkSchedule: number;
  childrenCare: boolean;
  petCare: boolean;
  minSalary: number;
  maxSalary: number;
  description: string;
  dateAdded: Date;
  dateModified: Date;
}
