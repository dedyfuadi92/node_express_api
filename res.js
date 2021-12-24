'use strict';
export function ok(values, res) {
    res.json(values);
    res.end();
}