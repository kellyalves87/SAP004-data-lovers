import HttpClient from "./../http/httpClient";
import { Character } from "./../../domain/character";

class CharacterApi extends HttpClient {
  public constructor() {
    super("https://rickandmortyapi.com/api/");
  }

  public getUsers = () => this.instance.get<Character[]>("character");

  public getUser = (id: string) =>
    this.instance.get<Character>(`character/${id}`);
}

export default CharacterApi;
