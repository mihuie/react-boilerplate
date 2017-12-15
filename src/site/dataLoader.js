import { loadStart, loadComplete } from '~/src/actions/data';
import { fetchGeneral } from '~/src/services/fetchGeneral';

export const loadData = store => {
  loadCharacters(store);
};

const loadCharacters = store => {
  const id = 'characters';
  store.dispatch(loadStart(id));
  fetchGeneral('../json/characters.json').then(data => {
    store.dispatch(loadComplete(id, data));
  });
};
