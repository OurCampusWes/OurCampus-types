import { DocumentSnapshot } from 'firebase/firestore';
import { ModelEnum } from '../enums';
import * as Type from '../types';
import { CourseModel, DepartmentModel } from './';

export const fromSnapshot = ({
  doc,
  modelType,
}: {
  doc: DocumentSnapshot;
  modelType: ModelEnum;
}) => {
  const data = doc.data();

  switch (modelType) {
    case ModelEnum.COURSE:
      return new CourseModel(data as Type.CourseType);
      break;
    case ModelEnum.DEPARTMENTS:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.DISH:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.EVENT:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.MENU:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.ORG:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.PROFESSOR:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.REVIEW:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    case ModelEnum.USER:
      return new DepartmentModel(data as Type.DepartmentType);
      break;
    default:
      console.error('Invalid Model Type');
      break;
  }
};
