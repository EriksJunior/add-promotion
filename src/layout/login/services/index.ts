import ILogin from "../interfaces"
import { http } from '../../../config/axios'

export default {

  async save(dataUser: ILogin): Promise<object> {
    const { data } = await http.post('/login', { login: dataUser.login, senha: dataUser.senha })
    return data
  }
}





