import { put } from 'redux-saga/effects';
import { sagaExceptionHandler } from 'utils';
import {
  RequestStatus, ProposalStatus,
} from 'types';
import { 
  proposalSetStatus, proposalGetData, proposalSetState,
} from 'store/proposal/actionCreators';

export function* proposalGetDataSaga({ type }: ReturnType<typeof proposalGetData>) {
  try{
    yield put(proposalSetStatus({ type, status: RequestStatus.REQUEST }));

    const responseVotes: Response = yield fetch('/api/proposals');
    if (responseVotes.ok) {
      const { results }: { results: { 
        id: string;
        creator: string;
        ipfsHash: string;
        title: string,
        content: string,
        startDate: string,
        startTime: string,
        endDate: string,
        endTime: string,
        forTitle: string,
        againstTitle: string,
        status: ProposalStatus,
      }[] } = yield responseVotes.json();
      yield put(proposalSetState({ 
        list: results,
      }));
    }

    yield put(proposalSetStatus({ type, status: RequestStatus.SUCCESS }));
  } catch (e) {
    sagaExceptionHandler(e);
    yield put(proposalSetStatus({ type, status: RequestStatus.ERROR }));
  }
}
