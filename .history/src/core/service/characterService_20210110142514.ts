import HttpClient from "./../http/httpClient"
import { character } from "./../../domain/character"

class CharacterApi extends HttpClient {
    public constructor() {
      super("https://rickandmortyapi.com/api/character");
    }
  
    public getUsers = () => this.instance.get<User[]>('/users');
    
    public getUser = (id: string) => this.instance.get<User>(`/users/${id}`);
  }