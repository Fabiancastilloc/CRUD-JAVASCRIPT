-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: dbactividad
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contratos`
--

DROP TABLE IF EXISTS `contratos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contratos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fechaFirma` date DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `empresa` varchar(255) DEFAULT NULL,
  `empleado` varchar(255) DEFAULT NULL,
  `funciones` varchar(255) DEFAULT NULL,
  `monto` int DEFAULT NULL,
  `frecuenciaDePago` varchar(50) DEFAULT NULL,
  `usuariocc` int DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_firma` date DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `frecuencia_de_pago` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuariocc` (`usuariocc`),
  CONSTRAINT `contratos_ibfk_1` FOREIGN KEY (`usuariocc`) REFERENCES `usuarios` (`cc`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contratos`
--

LOCK TABLES `contratos` WRITE;
/*!40000 ALTER TABLE `contratos` DISABLE KEYS */;
INSERT INTO `contratos` VALUES (34,'2023-07-11','2023-07-11','2023-08-23','Nike','Fabian','Diseñador',2000000,'Mensual',1001234,NULL,NULL,NULL,NULL),(36,'2023-07-15','2023-07-19','2025-01-24','Nike','Jorge M','OFICIOS VARIOS',2000000,'Quincenal',1001234,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contratos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `cc` int NOT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cc`),
  UNIQUE KEY `unique_email` (`email`),
  KEY `idx_cc` (`cc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1001234,'abc','Fabian','Castillo','M','fabian@correo.com'),(159753852,'contraseña789','Sofía','Vargas','Femenino','sofiavargas@correo.com'),(321654987,'contraseña456','Carlos','Ramírez','Masculino','carlosramirez@correo.com'),(369852147,'123','Elena','Rojas','Femenino','elenarojas@correo.com'),(456789123,'pass123456','Pedro','López','Masculino','pedrolopez@correo.com'),(654321987,'pass987654','Ana','Sánchez','Femenino','anasanchez@correo.com'),(789123456,'password789','Laura','Torres','Femenino','latorres@correo.com'),(852369741,'pass159753','Miguel','García','Masculino','miguelgarcia@correo.com');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'dbactividad'
--

--
-- Dumping routines for database 'dbactividad'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-11 14:28:50
