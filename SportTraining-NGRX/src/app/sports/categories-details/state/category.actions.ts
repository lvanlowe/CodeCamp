import { Action } from '@ngrx/store';

export enum CategoryActionTypes {
  LoadCategorys = '[Category] Load Categorys',
  
  
}

export class LoadCategorys implements Action {
  readonly type = CategoryActionTypes.LoadCategorys;
}


export type CategoryActions = LoadCategorys;
