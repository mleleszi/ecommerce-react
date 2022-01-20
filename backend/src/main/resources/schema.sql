DROP TABLE IF EXISTS product_size;
DROP TABLE IF EXISTS product_color;
DROP TABLE IF EXISTS Size;
DROP TABLE IF EXISTS Color;
DROP TABLE IF EXISTS Product;

CREATE TABLE Product
(
    id      INT          NOT NULL,
    name    VARCHAR(50)  NOT NULL,
    desc    VARCHAR(500) NOT NULL,
    price   FLOAT        NOT NULL,
    stock   INT          NOT NULL,
    img_url VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Color
(
    id    INT         NOT NULL,
    color VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product_color
(
    pid INT NOT NULL,
    cid INT NOT NULL,
    FOREIGN KEY (pid) REFERENCES Product (id),
    FOREIGN KEY (cid) REFERENCES Color (id)
);

CREATE TABLE Size
(
    id   INT        NOT NULL,
    size VARCHAR(5) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product_size
(
    sid INT NOT NULL,
    pid INT NOT NULL,
    FOREIGN KEY (sid) REFERENCES Size (id),
    FOREIGN KEY (pid) REFERENCES Product (id)
);