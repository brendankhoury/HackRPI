// Note, I regret writing this but i am tired and this is a hackathon.
// Note2, I WOULD NEVER WRITE THIS IN PRODUCTION

var email = ""
var password = ""

const BadLogin = {
    "getLogin": () => {
        return  {"email": email, "password": password}
    },
    "setLogin": (emailArg, passwordArg) => {
        email = emailArg;
        password = passwordArg
    }
}
Object.freeze(BadLogin)
export default BadLogin