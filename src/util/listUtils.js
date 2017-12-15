/**************************************************
* Sorted List
**************************************************/
export const SORT_UNSORTED = 0;
export const SORT_ASCENDING = 1;
export const SORT_DESCENDING = 2;

export const getSortedList = (list, param, sortOrder = SORT_UNSORTED) => {
  list = [...list];
  if (sortOrder === SORT_UNSORTED) return list;
  return list.sort((a, b) => {
    if (a[param] < b[param]) {
      return sortOrder === SORT_ASCENDING ? -1 : 1;
    } else {
      return sortOrder === SORT_ASCENDING ? 1 : -1;
    }
  });
};
