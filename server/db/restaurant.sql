-- Active: 1681424617799@@127.0.0.1@3306@restaurant

-- DB creation
DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

-- Tables creation

-- role
DROP TABLE IF EXISTS role;
CREATE TABLE IF NOT EXISTS role(
    role_id TINYINT(2) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(25) NOT NULL,
    role_description VARCHAR(255)
) ENGINE = InnoDB;

-- user
DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user(
    user_id INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_password2 VARCHAR(255) NOT NULL,
    user_firstname VARCHAR(255) NOT NULL,
    user_lastname VARCHAR(255) NOT NULL,
    user_phone_numer INTEGER(10),
    role_id TINYINT(2) NOT NULL,
    CONSTRAINT fk_user_role_id FOREIGN KEY (role_id) REFERENCES role (role_id)
) ENGINE = InnoDB;

-- admin
DROP TABLE IF EXISTS admin;
CREATE TABLE IF NOT EXISTS admin(
    admin_id TINYINT(2) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_admin_user_id FOREIGN KEY (user_id) REFERENCES user (user_id)
) ENGINE = InnoDB;

-- client 
DROP TABLE IF EXISTS client;
CREATE TABLE IF NOT EXISTS client(
    client_id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    client_allergies VARCHAR(255),
    user_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_client_user_id FOREIGN KEY (user_id) REFERENCES user (user_id)
) ENGINE = InnoDB;

-- slot.
DROP TABLE IF EXISTS slot;
CREATE TABLE IF NOT EXISTS slot(
    slot_id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    slot_day DATE NOT NULL,
    slot_hour TIME NOT NULL
) ENGINE = InnoDB;

-- reservation.
DROP TABLE IF EXISTS reservation;
CREATE TABLE IF NOT EXISTS reservation(
    reservation_id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    reservation_date DATE NOT NULL,
    reservation_quantity INT(2) NOT NULL,
    reservation_max_capacity INT(2) NOT NULL DEFAULT 60,
    client_id INT(11) NOT NULL,
    slot_id INT(11) NOT NULL,
    CONSTRAINT fk_reservation_client_id FOREIGN KEY (client_id) REFERENCES client (client_id),
    CONSTRAINT fk_reservation_slot_id FOREIGN KEY (slot_id) REFERENCES slot (slot_id)
) ENGINE = InnoDB;

-- permission
DROP TABLE IF EXISTS permission;
CREATE TABLE IF NOT EXISTS permission(
    permission_id INTEGER(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    admin_id TINYINT(2) NOT NULL,
    CONSTRAINT fk_permission_admin_id FOREIGN KEY (admin_id) REFERENCES admin (admin_id)
) ENGINE = InnoDB;

-- category
DROP TABLE IF EXISTS category;
CREATE TABLE IF NOT EXISTS category(
    category_id TINYINT(1) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL,
    permission_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_category_permission_id FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
) ENGINE = InnoDB;

-- Dish
DROP TABLE IF EXISTS dish;
CREATE TABLE IF NOT EXISTS dish(
    dish_id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dish_title VARCHAR(100) NOT NULL,
    dish_description TEXT NOT NULL,
    dish_price FLOAT(2,2) UNSIGNED NOT NULL,
    category_id TINYINT(1) NOT NULL,
    permission_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_dish_category_id FOREIGN KEY (category_id) REFERENCES category (category_id),
    CONSTRAINT fk_dish_permission_id FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
) ENGINE = InnoDB;

-- image
DROP TABLE IF EXISTS image;
CREATE TABLE IF NOT EXISTS image(
    image_id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_title VARCHAR(100) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    dish_id INT(4) NOT NULL,
    permission_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_photo_dish_id FOREIGN KEY (dish_id) REFERENCES dish (dish_id),
    CONSTRAINT fk_photo_permission_id FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
) ENGINE = InnoDB;

-- opening.
DROP TABLE IF EXISTS opening;
CREATE TABLE IF NOT EXISTS opening(
    opening_id INT(3) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    opening_day VARCHAR(20) NOT NULL,
    opening_midiTimeFrom TIME NOT NULL,
    opening_midiTimeTo TIME NOT NULL,
    opening_soirTimeFrom TIME NOT NULL,
    opening_soirTimeTo TIME NOT NULL,
    is_open BOOLEAN NOT NULL,
    permission_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_opening_permission_id FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
) ENGINE = InnoDB;

-- menu.
DROP TABLE IF EXISTS menu;
CREATE TABLE IF NOT EXISTS menu(
    menu_id INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    menu_title VARCHAR(50) NOT NULL,
    permission_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_menu_permission_id FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
) ENGINE = InnoDB;

-- formula.
DROP TABLE IF EXISTS formula;
CREATE TABLE IF NOT EXISTS formula(
    formula_id INT(3) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    formula_name VARCHAR(100) NOT NULL,
    formula_description TEXT,
    formula_price FLOAT(2,2) UNSIGNED NOT NULL, 
    permission_id INTEGER(11) NOT NULL,
    CONSTRAINT fk_formula_permission_id FOREIGN KEY (permission_id) REFERENCES permission (permission_id)
) ENGINE = InnoDB;

-- menu_formula.
DROP TABLE IF EXISTS menu_formula;
CREATE TABLE IF NOT EXISTS menu_formula(
    menu_formula_id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    menu_id INT(5) NOT NULL,
    formula_id INT(3) NOT NULL,
    CONSTRAINT fk_menu_formula_menu_id FOREIGN KEY (menu_id) REFERENCES menu (menu_id),
    CONSTRAINT fk_menu_formula_formula_id FOREIGN KEY (formula_id) REFERENCES formula (formula_id)
) ENGINE = InnoDB; 
