-- Up

CREATE TABLE source (
    id INTEGER PRIMARY KEY,
    name TEXT REQUIRED,
    url TEXT REQUIRED
);

-- Down

DROP TABLE source;