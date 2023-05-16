export class CreateJobDto {
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
}
