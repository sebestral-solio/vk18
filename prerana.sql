-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 03:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prerana`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `gender` varchar(7) NOT NULL,
  `salary` decimal(10,0) NOT NULL,
  `designation` varchar(20) NOT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login_demo`
--

CREATE TABLE `login_demo` (
  `username` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` bigint(20) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_demo`
--

INSERT INTO `login_demo` (`username`, `email`, `phone`, `password`) VALUES
('aaaa', 'aaaa@1111', 917899238398, 'QCSPOG7EpPJgmSNMn+1Iaw=='),
('aaaaa', 'aaaa@11111', 9178992383981, 'QCSPOG7EpPJgmSNMn+1Iaw=='),
('abbb', 'bb@sa', 9178992383981, 'QCSPOG7EpPJgmSNMn+1Iaw=='),
('abcd', 'karthikumesh2002@gmail.com', 917899238398, 'QCSPOG7EpPJgmSNMn+1Iaw=='),
('kt', 'karthikumesh2002@gmail.com', 917899238398, 'QCSPOG7EpPJgmSNMn+1Iaw=='),
('mithun', 'ghssed@wrtef', 917899238398, 'QCSPOG7EpPJgmSNMn+1Iaw=='),
('shetty', 'karthikumesh2002@gmail.com', 917899238398, 'QCSPOG7EpPJgmSNMn+1Iaw==');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `semployee`
--

CREATE TABLE `semployee` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(7) NOT NULL,
  `salary` decimal(10,0) NOT NULL,
  `designation` varchar(20) NOT NULL,
  `mail` varchar(50) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sprojects`
--

CREATE TABLE `sprojects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `classs` varchar(50) DEFAULT NULL,
  `subjects` varchar(255) DEFAULT NULL,
  `timings` varchar(100) DEFAULT NULL,
  `fee` decimal(10,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `parent_name` varchar(100) DEFAULT NULL,
  `parent_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student9`
--

CREATE TABLE `student9` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `classs` varchar(20) DEFAULT NULL,
  `subjects` varchar(20) DEFAULT NULL,
  `timings` varchar(20) DEFAULT NULL,
  `fee` decimal(10,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `parent_name` varchar(20) DEFAULT NULL,
  `parent_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student11`
--

CREATE TABLE `student11` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `classs` varchar(20) DEFAULT NULL,
  `subjects` varchar(20) DEFAULT NULL,
  `timings` varchar(20) DEFAULT NULL,
  `fee` decimal(10,2) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `parent_name` varchar(20) DEFAULT NULL,
  `parent_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sworks_on`
--

CREATE TABLE `sworks_on` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `start_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `works_on`
--

CREATE TABLE `works_on` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `start_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_demo`
--
ALTER TABLE `login_demo`
  ADD PRIMARY KEY (`username`),
  ADD KEY `email` (`email`),
  ADD KEY `phone` (`phone`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `semployee`
--
ALTER TABLE `semployee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sprojects`
--
ALTER TABLE `sprojects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student9`
--
ALTER TABLE `student9`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student11`
--
ALTER TABLE `student11`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sworks_on`
--
ALTER TABLE `sworks_on`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Indexes for table `works_on`
--
ALTER TABLE `works_on`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `project_id` (`project_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sworks_on`
--
ALTER TABLE `sworks_on`
  ADD CONSTRAINT `sworks_on_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `semployee` (`id`),
  ADD CONSTRAINT `sworks_on_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `sprojects` (`id`);

--
-- Constraints for table `works_on`
--
ALTER TABLE `works_on`
  ADD CONSTRAINT `works_on_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  ADD CONSTRAINT `works_on_ibfk_2` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
