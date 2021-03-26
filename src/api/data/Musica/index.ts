import api from "../../index";
import { IMusica } from "../../../interfaces/Musica.interface"

class MusicaData {
  show(bandaId: string) {
    return api.get<IMusica[]>(`musicas/${bandaId}/bandas`);
  }
}

export default new MusicaData();