export abstract class BaseApi {
  private _baseUrl: string = "https://ya-praktikum.tech/api/v2/";

  restUrl(path: string) {
    return this._baseUrl + path;
  }
}
