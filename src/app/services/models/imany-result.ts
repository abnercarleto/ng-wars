export interface IManyResult<ResultType> {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: ResultType[];
}
