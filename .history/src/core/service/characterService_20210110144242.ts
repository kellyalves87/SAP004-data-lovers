import HttpClient from "./../http/httpClient";
import { InfoPagination } from "./../../domain/infoPagination";
import { Character } from "./../../domain/character";

class CharacterApi extends HttpClient {
  public constructor() {
    super("https://rickandmortyapi.com/api/");
  }

  public getUsers = () => this.instance.get<InfoPagination[]>("character");

  public getUser = (id: string) =>
    this.instance.get<Character>(`character/${id}`);
}

export default CharacterApi;
