export class PagedResults<ResultType> {
  constructor(
    public nextUrl: string | null,
    public previousUrl: string | null,
    public results: ResultType[]
  ) {}
}
