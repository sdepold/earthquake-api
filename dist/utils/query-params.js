"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requestToParams(req) {
    const params = Object.assign({}, req.query);
    if (req.params.id) {
        params.eventid = req.params.id;
    }
    if (!params.endtime) {
        const now = new Date();
        params.endtime = now.toISOString().split("T")[0];
    }
    if (!params.starttime) {
        const time = new Date(params.endtime);
        time.setDate(time.getDate() - 1);
        params.starttime = time.toISOString().split("T")[0];
    }
    return params;
}
exports.requestToParams = requestToParams;
