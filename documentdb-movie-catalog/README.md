# 🎥 CineDB: Building a Movie Catalog with Amazon DocumentDB

## 📌 Project Level: Intermediate

This project demonstrates how to deploy and access Amazon DocumentDB (with MongoDB compatibility) inside a custom Amazon VPC and securely connect to it from an Amazon EC2 instance.

The focus of this project is to design a secure network architecture, provision a managed NoSQL database, configure controlled access using security groups and TLS encryption, and perform MongoDB-style CRUD operations using the MongoDB shell (`mongosh`).

---

## 📝 Project Overview

This repository walks through creating a custom Amazon VPC, configuring public and private subnets, deploying an Amazon DocumentDB cluster in private subnets, and launching an EC2 instance as a client machine.

The EC2 instance securely connects to the DocumentDB cluster using TLS certificates and security group rules, allowing database operations to be performed using the MongoDB-compatible shell.

---

## 🎯 Objective

To deploy Amazon DocumentDB in a secure VPC environment, connect to it from an EC2 instance, and perform end-to-end CRUD operations on a sample movie catalog using MongoDB-compatible commands.

---

## 🧰 AWS Services Used

- Amazon VPC — Custom network isolation and routing  
- Amazon EC2 — Client machine for database access  
- Amazon DocumentDB — Managed MongoDB-compatible NoSQL database  
- Security Groups — Controlled network access between EC2 and DocumentDB  
- AWS Identity and Access Management (IAM) — Secure authentication and access control  

---

## 🏗️ Architecture Summary

- Networking:
  - Custom Amazon VPC
  - Public subnet for EC2 client
  - Private subnets for DocumentDB cluster

- Compute:
  - Amazon EC2 (Amazon Linux 2)
  - Acts as the DocumentDB client

- Database:
  - Amazon DocumentDB cluster
  - MongoDB-compatible engine
  - Deployed in private subnets

- Security:
  - Security group–based access control
  - TLS-encrypted communication on port 27017
  - Database access restricted to EC2 client only

---

## 🌟 Key Features

- Secure DocumentDB deployment in a private VPC  
- Controlled access using security groups  
- TLS-encrypted database communication  
- MongoDB-compatible operations using `mongosh`  
- Full CRUD workflow on a movie catalog  
- Explicit cleanup to avoid unnecessary AWS costs  

---

## 🚀 Project Steps (High-Level)

1. Create a custom Amazon VPC and configure subnets  
2. Create a DocumentDB subnet group  
3. Configure security groups for EC2 and DocumentDB  
4. Deploy an Amazon DocumentDB cluster  
5. Launch an EC2 instance as a database client  
6. Install MongoDB shell (`mongosh`) on EC2  
7. Configure TLS certificates for secure access  
8. Connect to DocumentDB from EC2  
9. Perform CRUD operations on a movie collection  
10. Clean up all AWS resources  

---

## 🧠 What This Project Teaches

- Designing secure VPC architectures for databases  
- Deploying managed NoSQL databases on AWS  
- Security group–based access control  
- TLS-encrypted database communication  
- MongoDB-style CRUD operations  
- EC2-based client access patterns  
- AWS resource lifecycle and cost management  

---

## 🧹 Cleanup

To avoid unnecessary charges, ensure the following resources are deleted after completion:

- Amazon DocumentDB cluster and instances  
- EC2 client instance  
- DocumentDB subnet group  
- Security groups  
- EC2 key pair  
- Custom VPC and subnets  

---

## 🏁 Outcome

By completing this project, you gain hands-on experience deploying and securely accessing a managed NoSQL database on AWS.

This project strengthens understanding of cloud networking, database security, MongoDB-compatible operations, and real-world AWS architecture patterns commonly used in production environments.

---

## 🎥 Project Demo Video  
👉 https://www.linkedin.com/posts/khushi-nandwani_aws-documentdb-nosql-activity-7417437928550940672-Qv9U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_UPJEBCVOHK7-Dy5jdozttNcasmFHJYAM

---

## 📄 Full Project Documentation  
👉 https://open.substack.com/pub/knandwani07/p/cinedb-building-a-movie-catalog-with?utm_campaign=post-expanded-share&utm_medium=web

---

## 🤝 Connect

LinkedIn: https://www.linkedin.com/in/khushi-nandwani/  
GitHub: https://github.com/Knandwani07  

---

## 🏷️ Tags

`Amazon DocumentDB` `MongoDB` `AWS VPC` `Amazon EC2` `NoSQL` `Cloud Networking` `Security Groups` `DevOps` `Database` `AWS Project`
