import { DepartmentType } from '../types';

export class DepartmentModel implements DepartmentType {
  displayName: string;
  id: string;
  colors: string[];

  constructor(departmentProps: DepartmentType) {
    this.colors = departmentProps.colors;
    this.displayName = departmentProps.displayName;
    this.id = departmentProps.id;
  }
}

export class DepartmentCollection {
  departments: { [key: string]: DepartmentModel };

  constructor({
    departments,
  }: {
    departments: { [key: string]: DepartmentModel };
  }) {
    this.departments = departments;
  }

  getDisplayName(id: string): string {
    return this.departments[id]?.displayName ?? 'Unknown';
  }
}
