import api from "../../index";
import { IBanda } from "../../../interfaces/Banda.interface"

class BandaData {
  index() {
    return api.get<IBanda[]>('bandas');
  }
}

export default new BandaData();