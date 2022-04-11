const process = require("process");
const fs = require("fs");

const db_filepath = process.cwd() + "/assets/db/users.db";

exports.parse_line = function(line) {
    return line.replaceAll("('", "").replaceAll("')", "").split("','");
}

exports.read_user = function(api_key) {
    let users = fs.readFileSync(this.db_filepath, "utf8").split("\n");

    users.forEach(e => {
        let info = this.parse_line(e);
        if (info[0] == api_key) {

        }
    });
}