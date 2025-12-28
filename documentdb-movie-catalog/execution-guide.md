
<img width="1376" height="768" alt="AWS_DocumentDB_Architecture_Diagram" src="https://github.com/user-attachments/assets/842d30f2-ea10-4657-99c7-5554674d2da9" />

## 🎥 CineDB: Building a Movie Catalog with Amazon DocumentDB

## 📘 Introduction

This project demonstrates how to deploy Amazon DocumentDB (with MongoDB compatibility) inside a custom Amazon VPC and securely connect to it from an Amazon EC2 instance.

The objective is to design a secure network, provision a managed NoSQL database, configure controlled access using security groups and TLS encryption, and perform end-to-end CRUD (Create, Read, Update, Delete) operations using the MongoDB shell (`mongosh`). The project follows AWS best practices and focuses on security, clarity, reproducibility, and proper cleanup.

---

## 🏗️ Architecture Overview

The architecture consists of a private Amazon DocumentDB cluster deployed inside a custom Amazon VPC and an EC2 instance placed in a public subnet acting as the database client.

The EC2 instance connects securely to the DocumentDB cluster using security groups and TLS encryption over port 27017. The database remains isolated within private subnets, ensuring it is not directly accessible from the internet.

---

## 🧩 Architecture Components

- Amazon VPC  
  - Custom VPC for network isolation  

- Subnets  
  - Public subnet for EC2 client  
  - Private subnets for DocumentDB cluster  

- Amazon DocumentDB Cluster  
  - MongoDB-compatible NoSQL database  
  - Deployed in private subnets  

- Subnet Group  
  - Defines eligible subnets for DocumentDB  

- Security Groups  
  - DocumentDB cluster security group  
  - EC2 client security group  

- Amazon EC2 (Amazon Linux 2)  
  - Client machine for database access  

- MongoDB Shell (mongosh)  
  - Used to perform CRUD operations  

- TLS Certificate  
  - Ensures encrypted communication  

---

## 🎯 Why This Project?

- To understand how Amazon DocumentDB works in a secure VPC setup  
- To learn AWS networking concepts such as VPCs, subnets, and security groups  
- To practice MongoDB-style CRUD operations on a managed AWS service  
- To gain hands-on experience relevant to cloud, DevOps, and database roles  

---

## ✨ Key Features

- Secure DocumentDB cluster deployment  
- Controlled access using security groups  
- TLS-encrypted communication  
- MongoDB-compatible operations using `mongosh`  
- Full CRUD workflow on a movie catalog  
- Structured cleanup to prevent unnecessary costs  

---

## 🛠️ Execution Workflow

### I. VPC and Subnet Configuration

- Open the AWS Management Console  
- Search for **VPC** and open the VPC Dashboard  
- Click **Create VPC**  
- Set VPC name as `documentdb-demo-vpc`  
- Keep all other settings as default  
- Create the VPC and click **View VPC**  
- Navigate to **Subnets**  
- Select **Public Subnet 1** and edit subnet settings  
- Enable **Auto-assign public IPv4 address**  
- Save the subnet settings  

---

### II. DocumentDB Subnet Group Creation

- Open the **Amazon DocumentDB** dashboard  
- From the left menu, click **Subnet groups**  
- Click **Create subnet group**  
- Configure the following:
  - Name: `documentdb-subnet-group`  
  - Description: Subnet group for DocumentDB  
  - VPC: `documentdb-demo-vpc`  
- Add all subnets associated with the VPC  
- Create the subnet group  

---

### III. Security Group Configuration

#### A. DocumentDB Cluster Security Group

- Open **EC2 → Security Groups**  
- Click **Create security group**  
- Configure:
  - Name: `documentdb-sg`  
  - Description: Security group for DocumentDB cluster  
  - VPC: `documentdb-demo-vpc`  
- Create the security group  

#### B. DocumentDB Client Security Group

- Create another security group  
- Configure:
  - Name: `documentdb-client-sg`  
  - Description: Security group for DocumentDB clients  
  - VPC: `documentdb-demo-vpc`  
- Add inbound rule:
  - Type: SSH  
  - Port: 22  
  - Source: Anywhere-IPv4  
- Create the security group  

#### C. Inbound Rule Configuration

- Open `documentdb-sg`  
- Edit inbound rules  
- Add rule:
  - Type: Custom TCP  
  - Port: 27017  
  - Source: `documentdb-client-sg`  
- Save the rule  

---

### IV. Amazon DocumentDB Cluster Creation

- Open **Amazon DocumentDB**  
- Click **Create cluster** and select **Instance-based cluster**  
- Configure:
  - Cluster identifier: `movie-catalog-cluster`  
  - Engine version: 5.0  
- Choose DB instance class: Memory optimized  
- Keep storage and connectivity settings as default  
- Under Authentication:
  - Username: `docdbadmin`  
  - Enable self-managed passwords  
- Enable **Advanced settings**  
- Configure Network settings:
  - VPC: `documentdb-demo-vpc`  
  - Subnet group: `documentdb-subnet-group`  
  - Security group: `documentdb-sg`  
- Disable deletion protection  
- Create the cluster and wait for provisioning  

---

### V. EC2 Client Instance Setup

- Open **Amazon EC2** dashboard  
- Click **Launch instance**  
- Configure:
  - Name: `documentdb-client-ec2`  
  - AMI: Amazon Linux 2  
  - Instance type: t2.micro or t3.micro  
- Create a key pair:
  - Name: `documentdb-client`  
  - Type: RSA  
  - Format: `.pem`  
- Network settings:
  - VPC: `documentdb-demo-vpc`  
  - Subnet: Public subnet  
  - Security group: `documentdb-client-sg`  
- Launch the instance  

---

### VI. Connect to EC2 Instance

- Wait for instance status checks to pass  
- Click **Connect**  
- Choose **EC2 Instance Connect**  

---

### VII. MongoDB Shell Installation

- Download MongoDB shell  
- Install `mongosh`  
- Verify installation using:
  - `mongosh --version`  
- Download DocumentDB TLS certificate  

---

### VIII. Connect to DocumentDB

- Open **Amazon DocumentDB → Clusters**  
- Copy the `mongosh` connection string  
- Paste it into the EC2 terminal  
- Enter the database password  

---

### IX. Database Operations (CRUD)

- Switch database:
  - `use movieCatalog`  
- Create collection:
  - `db.createCollection("movies")`  
- Insert sample movie documents  
- Read all documents:
  - `db.movies.find()`  
- Query by genre  
- Update movie ratings  
- Delete a movie document  
- Verify deletion and document count  

---

### X. Resource Cleanup

- Delete DocumentDB cluster instance and cluster  
- Delete subnet group  
- Terminate EC2 instance  
- Delete key pair  
- Delete security groups  
- Delete custom VPC  

---

## ✅ Conclusion

This project demonstrates a complete, production-style workflow for deploying and accessing Amazon DocumentDB securely within AWS.

It provides practical experience with VPC networking, managed NoSQL databases, security group–based access control, TLS encryption, and MongoDB-compatible operations. The structured approach makes this project suitable for learning, portfolio use, and interview discussions.
