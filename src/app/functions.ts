import * as moment from 'moment';
import {get, difference, union} from 'lodash-es';

export const deleteAccents = (str: string) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const deleteTagsHTML = (text: string) => {
  return text.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '');
};

export const getFileName = (path: string): string => {
  const regex = new RegExp('/', 'g');
  const pathSplited = path.replace(regex, '').split('uploads');
  return pathSplited[pathSplited.length - 1];
};

export const verifyIfIsEmpty = (value: string): boolean => {
  if (value === null || value === undefined || value === '') {
    return true;
  }
  return false;
};

export const formatterBooleanToString = (value: boolean): string =>
  value === false ? 'Não' : 'Sim';

export const dateTransformer = (
  date: Date | string,
  format: string,
  currentFormat: string = 'YYYY-MM-DD HH:mm:ss'
): string => {
  return moment(date, currentFormat).format(format).toString();
};
export function listUnique(list: Array<any>, includeValues: Array<any>, exceptValues: Array<any>, diff?: any): Array<any> {
  let $list = diff ? list.map(item => get(item, diff).toString()) : list;
  const available = difference($list, exceptValues.filter(e => e).map(e => e.toString()));
  $list = union(available, includeValues.map(i => i?.toString()));
  return list.filter(item => (diff ? $list.indexOf(get(item, diff).toString()) : $list.indexOf(item)) > -1);
}

export const removerAcentos = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

export const escapeRegExp = (str) => str.replace(/[.*+\-?^${}()|[\]\\/]/g, '\\$&');

export const termToSearch = (search) => search

  .split(/\s+/g).map(w => escapeRegExp(w)).join('\\s*')
  .normalize('NFD')
  .replace(/([\u0300-\u036f])/g, "")
  .replace(/([aeiouc])/g, '$1[\u0300-\u036f]?');

export function termMatch(text: string, search: string, caseSensitive = false) {
  if (!caseSensitive) {
    text = text.toLowerCase();
    search = search.toLowerCase();
  }
  text = text.normalize("NFD");
  search = termToSearch(search);
  const reg = new RegExp(search, 'g');
  return text.match(reg);
}

export function wrapTermMatch(text: string, search: string, before = '[', after = ']') {
  text = text.normalize("NFD");
  search = termToSearch(search);
  const reg = new RegExp(`(${search})`, 'gi');
  return text.replace(reg, `${before}$1${after}`);
}

export function sanitizeQuery(query: any) {

  if (typeof query === "object") {
    const urlQuery = new URLSearchParams();
    const keys = Object.keys(query);
    keys.forEach(key => {
      if (query[key]) {
        if(Array.isArray(query[key])) {
          query[key].forEach(v => urlQuery.append(key, v));
        } else{
          urlQuery.append(key, query[key]);
        }
      }
    });
    return `?${urlQuery.toString()}`;
  } else if (typeof query === "string") {
    if (query.trim().substring(0, 1) !== "?") {
      query = `?${query.trim()}`;
    }
    return query.length > 1 ? query : "";
  }
  return "";
}

export function downloadFile(file: string, title: string) {
  var fileLink = document.createElement('a');
  fileLink.href = file;
  fileLink.download = title;
  fileLink.click();
}

