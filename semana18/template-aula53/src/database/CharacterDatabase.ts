import { BaseDateBase } from "./BaseDataBase"
import { Character } from "../entities/Character"

export class CharacterDatabase extends BaseDateBase {

  async create(character: Character) {
    await BaseDateBase.connection("character")
         .insert(character)
  }
  
  async getAll() {
    return BaseDateBase.connection("character").select()
  }
}
