
DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `user_id` varchar(50) DEFAULT NULL,
  `video_id` int DEFAULT NULL,
  `text` varchar(200) DEFAULT NULL,
  KEY `user_gmail` (`user_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `comment` WRITE;

INSERT INTO `comment` VALUES ('564545831575663',89,'cc'),('564545831575663',89,'hola'),('564545831575663',89,'siniorita');

UNLOCK TABLES;

DROP TABLE IF EXISTS `follow`;

CREATE TABLE `follow` (
  `follower_id` varchar(50) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  KEY `user_gmail` (`user_id`),
  KEY `follower_gmail` (`follower_id`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`follower_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `follow` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `likes`;

CREATE TABLE `likes` (
  `user_id` varchar(50) DEFAULT NULL,
  `video_id` int DEFAULT NULL,
  KEY `user_gmail` (`user_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `likes` WRITE;

INSERT INTO `likes` VALUES ('564545831575663',89);

UNLOCK TABLES;


DROP TABLE IF EXISTS `shares`;

CREATE TABLE `shares` (
  `user_id` varchar(50) DEFAULT NULL,
  `video_id` int DEFAULT NULL,
  `target_user_id` varchar(20) DEFAULT NULL,
  KEY `user_gmail` (`user_id`),
  KEY `video_id` (`video_id`),
  KEY `target_user_gmail` (`target_user_id`),
  CONSTRAINT `shares_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `shares_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`),
  CONSTRAINT `shares_ibfk_3` FOREIGN KEY (`target_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `shares` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `name` varchar(20) DEFAULT NULL,
  `tel` varchar(20) DEFAULT NULL,
  `id` varchar(100) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `picture` varchar(1000) DEFAULT NULL,
  `bio` varchar(300) DEFAULT NULL,
  `gmail` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `user` WRITE;

INSERT INTO `user` VALUES ('Houria Alalaoui',NULL,'564545831575663',NULL,NULL,'/user_images/564545831575663.jpg',NULL,NULL);

UNLOCK TABLES;


DROP TABLE IF EXISTS `video`;

CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `video_link` varchar(50) DEFAULT NULL,
  `visibility` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_gmail` (`user_id`),
  CONSTRAINT `video_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `video` WRITE;

INSERT INTO `video` VALUES (89,'cc','cc','564545831575663','../front-end/public/video/video_1628011760043.mp4','Friends');

UNLOCK TABLES;


DROP TABLE IF EXISTS `views`;

CREATE TABLE `views` (
  `user_id` varchar(50) DEFAULT NULL,
  `video_id` int DEFAULT NULL,
  KEY `user_gmail` (`user_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `views_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `views_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8;


LOCK TABLES `views` WRITE;

INSERT INTO `views` VALUES ('564545831575663',89);

UNLOCK TABLES;
