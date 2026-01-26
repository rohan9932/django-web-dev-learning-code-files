-- Active: 1765124918347@@127.0.0.1@3306@ecommerce_db
SELECT * FROM `Products`

CREATE DATABASE ecommerce_db;

CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES

INSERT INTO Products (name, description, price, stock) VALUES
('Wireless Mechanical Keyboard', 'Compact 60% layout with tactile brown switches, Bluetooth 5.0 and USB-C.', 129.99, 50),
('High-Resolution Webcam', '4K Ultra HD streaming with autofocus and built-in privacy shutter.', 89.50, 120),
('Noise-Cancelling Headphones', 'Over-ear design with 40-hour battery life and superior sound clarity.', 199.95, 85),
('Portable SSD 1TB', 'USB 3.1 Gen 2 external solid-state drive with up to 550MB/s read speed.', 79.00, 200),
('Ergonomic Mouse', 'Vertical design mouse to reduce wrist strain, customizable DPI settings.', 35.75, 150),
('Smart Home Hub', 'Central controller for all smart devices, supports Zigbee and Wi-Fi.', 149.99, 60),
('Organic Coffee Beans 1kg', 'Medium roast, single-origin Arabica beans from Ethiopia.', 18.50, 300),
('Adjustable Standing Desk', 'Electric height-adjustable desk with memory presets (48-inch top).', 399.00, 30),
('Power Bank 20000mAh', 'High-capacity portable charger with dual USB-A and one USB-C port.', 45.99, 180),
('Gaming Monitor 27"', '27-inch QHD (2560x1440) display with 144Hz refresh rate and 1ms response.', 275.50, 45);

SELECT name, price, stock FROM `Products` ORDER BY stock ASC;

UPDATE `Products` SET price = 255 WHERE price = 129.99;

UPDATE `Product Details`
SET category_id =
    CASE
        WHEN name LIKE '%Keyboard%' OR name LIKE '%Webcam%' OR name LIKE '%Headphones%' OR name LIKE '%SSD%' OR name LIKE '%Mouse%' OR name LIKE '%Hub%' OR name LIKE '%Power Bank%' OR name LIKE '%Monitor%' OR name LIKE '%Desk%' OR name LIKE '%Motherboard%' OR name LIKE
        '%Laptop%'
            THEN 2
        WHEN name LIKE '%Coffee Beans%'
            THEN 4
        ELSE NULL
    END
WHERE category_id IS NULL;

DELETE FROM `Products` WHERE stock = 30;

ALTER TABLE `Products` ADD COLUMN category_id INT;

ALTER TABLE `Products` ADD FOREIGN KEY (category_id) REFERENCES `Categories`(category_id)
ON DELETE SET NULL ON UPDATE CASCADE;

INSERT INTO `Products`(name, description, price, stock, category_id) VALUES
('Marvo Niro 40', '12000 DPI Mouse', 16.9, 500, 2);

SELECT category_id, SUM(stock) AS Total_stock
FROM `Products`
GROUP BY category_id;

CREATE TABLE Categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `Categories`(category_name) VALUES ('Books'), ('Electronics'), ('Clothing'), ('Foods');

SELECT * FROM `Categories`;


-- Rename column table
ALTER TABLE `Products` CHANGE COLUMN name product_name VARCHAR(255); 
ALTER TABLE `Product Details` CHANGE COLUMN product_name name VARCHAR(255); 
-- Rename table
ALTER TABLE `Products` RENAME TO `Product Details`;
SELECT * FROM `Product Details`

-- delete
ALTER TABLE `Product Details` DROP COLUMN stock;

