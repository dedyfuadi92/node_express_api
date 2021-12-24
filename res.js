'use strict';
export function ok(values, res) {
    /* var data = {
        'status': 200,
        'values': values
    }; */
    // res.json(data);
    res.json(values);
    res.end();
}