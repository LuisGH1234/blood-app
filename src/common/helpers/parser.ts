import queryString from 'query-string';

export function parseQuery(search: string) {
    return queryString.parse(search) as any;
}
