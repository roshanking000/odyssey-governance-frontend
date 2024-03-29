import { RequestStatus } from 'types';
import { AuthState } from 'types/store/AuthState';
import { AuthActionTypes } from './actionsTypes';

export const authSetState = (payload: Partial<AuthState>) => ({
  type: AuthActionTypes.SetState,
  payload,
});

export const authSetStatus = (
  payload: { type: AuthActionTypes, status: RequestStatus },
) => ({
  type: AuthActionTypes.SetStatus,
  payload,
});

export const authGetData = () => ({
  type: AuthActionTypes.GetData,
});
