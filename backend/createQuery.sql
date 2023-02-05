-- create database
CREATE DATABASE dummy_db;

-- use database
USE dummy_db;

-- create table
CREATE TABLE gps_data (
  DeviceId NVARCHAR(255),
  DeviceType NVARCHAR(255),
  Timestamp DATETIME,
  location NVARCHAR(255)
);

-- insert data
INSERT INTO gps_data (DeviceId, DeviceType, Timestamp, location)
VALUES
('D-1567', 'Aircraft', '2022-08-31 10:05:00', 'L1'),
('D-1567', 'Aircraft', '2022-08-31 10:10:00', 'L1'),
('D-1567', 'Aircraft', '2022-08-31 10:15:00', 'L1'),
('D-1567', 'Aircraft', '2022-08-31 10:20:00', 'L1'),
('D-1567', 'Aircraft', '2022-08-31 10:25:00', 'L2'),
('D-1568', 'Personal', '2022-08-31 10:05:00', 'L3'),
('D-1568', 'Personal', '2022-08-31 10:10:00', 'L3'),
('D-1568', 'Personal', '2022-08-31 10:15:00', 'L3'),
('D-1568', 'Personal', '2022-08-31 10:20:00', 'L3'),
('D-1568', 'Personal', '2022-08-31 10:25:00', 'L3'),
('D-1569', 'Asset', '2022-08-31 10:15:00', 'L4'),
('D-1569', 'Asset', '2022-08-31 10:20:00', 'L4'),
('D-1569', 'Asset', '2022-08-31 10:25:00', 'L1'),
('D-1569', 'Asset', '2022-08-31 10:30:00', 'L1'),
('D-1569', 'Asset', '2022-08-31 10:35:00', 'L2'),
('D-1570', 'Personal', '2022-08-31 10:35:00', 'L5'),
('D-1571', 'Asset', '2022-08-31 10:35:00', 'L6');

-- create table
CREATE TABLE Users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(255),
  email NVARCHAR(255),
  password NVARCHAR(255)
);