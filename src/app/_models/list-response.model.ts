export class ListResponse<T> {
  data: T;
  current_page: number;
  from: number;
  to: number;
  total: number;
  per_page: number;
}
