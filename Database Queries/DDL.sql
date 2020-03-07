-- Database Definition/Table Creation

--
-- User Login
--

DROP TABLE IF EXISTS userLogin;

CREATE TABLE `userLogin`(
	`userID` int(11) AUTO_INCREMENT NOT NULL,
	`userName` varchar(255) NOT NULL,
	`userPassword` varchar(255) NOT NULL,
	PRIMARY KEY (`userID`)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Insert Values

INSERT INTO `userLogin` (`userID`, `userName`, `userPassword`) VALUES
(1, 'tremperb', '1234_tremp'),
(2, 'swensonh', '1234_swens'),
(3, 'carlsons', '1234_carl'),
(4, 'raos', '1234_shay'),
(5, 'saechaoj', '1234_saech');