import valid_credentials_json from '../assets/valid_users.json'
import invalid_credentials_json from '../assets/invalid_users.json'

export default class data {

    get valid_credentials_testdata() {
        return valid_credentials_json.users.filter((e) => e.env === process.env.Env)
    }

    get invalid_credentials_testdata() {
        return invalid_credentials_json.users.filter((e) => e.env === process.env.Env)
    }
}