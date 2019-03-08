import { createSelector } from 'reselect';

const list = store => store.dogs.list;
const details = store => store.dogs.details;

export const dogListSelector = createSelector(
    list,
    list => list
);

export const dogDetailsSelector = createSelector(
    details,
    details => details
);
