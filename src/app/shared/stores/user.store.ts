import { Store, createState, withProps } from '@ngneat/elf';
import {
  selectAllEntities,
  setEntities,
  withActiveId,
  withActiveIds,
  withEntities,
} from '@ngneat/elf-entities';

import { Profile } from '../models/user.model';

const { state, config } = createState(withEntities<Profile>(), withActiveIds());
export const userStore = new Store({ state, name: 'user', config });

userStore
  .pipe(selectAllEntities())
  .subscribe((data) => console.log('@data', data));

// userStore.update(
//   setEntities([
//     { id: 'test1', name: 'test1' },
//     { id: 'test2', name: 'test2' },
//   ])
// );
