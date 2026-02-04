# 📦 Deploying PHP Web Applications with Amazon EC2 and Aurora PostgreSQL

## 📌 Project Level: Intermediate

This project demonstrates the deployment of a PHP-based web application on Amazon EC2 and its integration with an Amazon Aurora PostgreSQL-compatible database.

The focus of this project is to provision compute and database resources, configure secure connectivity, install a PHP–Apache application stack, and validate database interaction using PostgreSQL. The setup follows AWS best practices and emphasizes clarity, reproducibility, and cost awareness.

---

## 📝 Project Overview

This repository walks through provisioning an Amazon EC2 instance, installing and configuring an Apache web server with PHP, creating an Amazon Aurora PostgreSQL database cluster, and securely connecting the application layer to the database layer.

The PHP application performs real database operations using PostgreSQL, validating end-to-end communication while AWS manages database availability, durability, and scalability.

---

## 🎯 Objective

To deploy a stateful PHP web application on Amazon EC2, integrate it securely with an Amazon Aurora PostgreSQL database, and validate application-to-database connectivity using AWS-managed services.

---

## 🧰 AWS Services Used

- Amazon EC2 — Virtual server hosting the PHP application  
- Amazon Aurora (PostgreSQL Compatible) — Managed relational database  
- Amazon VPC — Networking and service isolation  
- Security Groups — Controlled access between EC2 and database  

---

## 🏗️ Architecture Summary

- EC2 instance running:
  - Amazon Linux AMI
  - Apache HTTP Server
  - PHP runtime

- Aurora PostgreSQL database:
  - Dev/Test configuration
  - Single writer instance

- Networking and security:
  - Default VPC
  - HTTP access enabled via security groups
  - Database access restricted to EC2 instance only

---

## 🌟 Key Features

- PHP application hosted on Amazon EC2  
- Secure PostgreSQL database connectivity  
- Environment-variable-based configuration handling  
- Database-backed application logic  
- Free-tier aware resource selection  
- Explicit cleanup workflow to prevent unnecessary costs  

---

## 🚀 Project Steps (High-Level)

1. Launch an Amazon EC2 instance using Amazon Linux  
2. Configure security groups to allow HTTP traffic  
3. Create an Amazon Aurora PostgreSQL database cluster  
4. Install and configure Apache and PHP on EC2  
5. Install PostgreSQL client utilities for validation  
6. Configure database connection variables  
7. Deploy PHP application files  
8. Validate database connectivity through browser testing  
9. Clean up all AWS resources  

---

## 🧠 What This Project Teaches

- EC2 provisioning and Linux server configuration  
- Apache and PHP setup on AWS infrastructure  
- Aurora PostgreSQL cluster creation and integration  
- Secure EC2-to-database networking using security groups  
- PHP-to-PostgreSQL database interactions  
- Application validation and basic observability  
- AWS resource lifecycle and cost management  

---

## 🧹 Cleanup

To avoid unnecessary charges, ensure the following resources are deleted after completion:

- Amazon EC2 instance  
- Amazon Aurora PostgreSQL DB instance and cluster  
- Unused security groups  
- EC2 key pair  

---

## 🏁 Outcome

By completing this project, you gain hands-on experience deploying a PHP web application backed by a managed PostgreSQL database on AWS.

This project strengthens understanding of traditional web application architectures, relational database integration, and secure cloud infrastructure design.

---

## 🎥 Project Demo Video  
👉 https://www.linkedin.com/posts/khushi-nandwani_aws-aurorapostgresql-ec2-activity-7419249980076490752-1f9y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_UPJEBCVOHK7-Dy5jdozttNcasmFHJYAM

---

## 📄 Full Project Documentation  
👉 https://open.substack.com/pub/knandwani07/p/deploying-php-web-applications-with?utm_campaign=post-expanded-share&utm_medium=web

## 🤝 Connect

LinkedIn: https://www.linkedin.com/in/khushi-nandwani/  
GitHub: https://github.com/Knandwani07  

---

## 🏷️ Tags

`Amazon EC2` `Amazon Aurora PostgreSQL` `PostgreSQL` `PHP` `Apache` `AWS Networking` `Cloud Architecture` `DevOps` `Backend` `Beginner AWS Project` `Web Application Deployment`

