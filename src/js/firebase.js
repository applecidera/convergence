import * as firebase from 'firebase/app';
import 'firebase/database';

export const randomId = () => {
	return '_' + Math.random().toString(36).slice(2);
};
