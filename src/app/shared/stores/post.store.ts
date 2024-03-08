import { Store, createState } from '@ngneat/elf';
import { withActiveId, withEntities } from '@ngneat/elf-entities';
import { Post } from '../models/post.model';

const { state, config } = createState(withEntities<Post>(), withActiveId());
export const postStore = new Store({ state, name: 'posts', config });
