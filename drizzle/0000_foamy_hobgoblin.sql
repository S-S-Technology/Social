CREATE TABLE `users` (
	`id` varchar(100) NOT NULL DEFAULT (uuid()),
	`username` text,
	`password` text,
	`contact` varchar(11),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
