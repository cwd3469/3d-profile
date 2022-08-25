import { TodoData } from '@components/home/type';

function TodoObjCompare(obj1: TodoData, obj2: TodoData) {
  const Obj1_keys = Object.keys(obj1);
  const Obj2_keys = Object.keys(obj2);
  if (Obj1_keys.length !== Obj2_keys.length) {
    return false;
  }
  for (const k of Obj1_keys) {
    if (obj1[k] !== obj2[k]) {
      return false;
    }
  }
  return true;
}

export { TodoObjCompare };
