/*
Типизируйте функцию getPersons, возвращающую массив объектов со следующими свойствами:
- name - строка
- age - число
- gender - 'male' или 'female'
 */
type TPerson = { name: string; age: number; gender: 'male' | 'female' };
type TPersons = TPerson[];
export function getPersons(): TPersons;

/*
Типизируйте функцию personToString, возвращающую строку и принимающую объект одного из следующих форматов:
   1. Пользователь:
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   2. Сотрудник
   - name - строка
   - age - число
   - gender - 'male' или 'female'
   - company- строка
 */
type TUser = { name: string; age: number; gender: 'male' | 'female' };
type TEmployer = TUser & { company: string };
export function personToString(person: TUser | TEmployer): string;
