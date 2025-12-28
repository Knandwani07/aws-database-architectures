
<img width="1376" height="768" alt="AWS_EC2_Aurora_Architecture_Diagram" src="https://github.com/user-attachments/assets/2c3c818e-b956-452c-862a-08236ac24e3e" />

## 📦 Deploying PHP Web Applications with Amazon EC2 and Aurora MySQL

## 📘 Introduction

This project demonstrates the deployment of a PHP-based web application on Amazon EC2 and its integration with an Amazon Aurora (MySQL-compatible) database.

The objective is to provision compute and database resources, configure secure connectivity, install a web application stack, and validate database interaction using PHP. The project follows AWS best practices using free-tier eligible resources and focuses on clarity, reproducibility, and proper cleanup.

---

## 🏗️ Architecture Overview

The architecture consists of an Amazon EC2 instance hosting an Apache web server with PHP, connected to an Amazon Aurora MySQL-compatible database cluster within the same VPC.

The EC2 instance handles application logic, while Aurora manages persistent data storage. Communication between services is controlled using security groups, ensuring secure and private connectivity.

---

## 🧩 Architecture Components

- Amazon EC2  
  - Amazon Linux AMI  
  - Apache HTTP Server  
  - PHP application runtime  

- Amazon Aurora (MySQL Compatible)  
  - Managed relational database  
  - Dev/Test configuration  
  - Single writer instance  

- Apache HTTP Server  
  - Serves PHP web pages  

- PHP  
  - Handles database connectivity and logic  

- MySQL Client (MariaDB)  
  - Used to validate database access  

- VPC & Security Groups  
  - Default VPC  
  - HTTP access enabled  
  - Database access restricted to EC2  

- Key Pair  
  - Secure EC2 authentication  

---

## 🎯 Why This Project?

- To understand real-world EC2–RDS integration  
- To gain hands-on experience with Amazon Aurora  
- To deploy a functional web application stack  
- To practice AWS resource lifecycle management  
- To build a portfolio-ready cloud project  

---

## ✨ Key Features

- End-to-end AWS service integration  
- Secure database connectivity  
- PHP-based application logic  
- Free-tier compatible setup  
- Structured cleanup to prevent unnecessary costs  

---

## 🛠️ Execution Workflow

### I. EC2 Instance Setup

- Launch an EC2 instance with Amazon Linux AMI  
- Select a free-tier eligible instance type (t2.micro / t3.micro)  
- Create and download an RSA key pair (.pem)  
- Allow HTTP traffic in the security group  
- Launch and verify the instance  

---

### II. Amazon Aurora Database Setup

- Create an Amazon Aurora (MySQL Compatible) database  
- Select Dev/Test template  
- Configure DB cluster identifier and credentials  
- Use Aurora Standard storage  
- Select burstable instance class  
- Do not create Aurora read replicas  
- Connect the database to the existing EC2 instance  
- Use default subnet group and VPC security group  
- In additional configuration, provide a database name to initialize  
- Create the database and wait for provisioning  

---

### III. Connect to EC2 Instance

- Open EC2 Dashboard  
- Select the instance and click **Connect**  
- Choose **EC2 Instance Connect**  

---

### IV. Install and Configure Apache Web Server

- sudo dnf update -y  
- sudo dnf install -y httpd  
- sudo systemctl start httpd  
- sudo systemctl enable httpd  

---

### V. Install PHP and Required Extensions

- sudo dnf install -y php php-mysqlnd  
- sudo systemctl restart httpd  
- sudo systemctl status httpd  
- php --version  

---

### VI. Install MySQL Client (MariaDB)

- sudo dnf install -y mariadb105  
- mysql --version  

---

### VII. Configure Database Environment Variables

- export USERNAME=admin  
- export PASSWORD=newadmin12345  
- export DATABASE=myapp  

---

### VIII. Create PHP Application Files

- Create a PHP page to establish database connectivity  
- Create a PHP page to count total page views stored in the database  

---

### IX. Restart Web Server

- sudo systemctl restart httpd  

---

### X. Application Validation

- Access the EC2 public IP address in a browser  
- Confirm that the page view count increments correctly  

---

### XI. Resource Cleanup

- Delete the DB instance  
- Delete the Aurora database cluster  
- Terminate the EC2 instance  
- Delete the key pair  
- Verify all resources are removed  

---

## ✅ Conclusion

This project demonstrates a complete workflow for deploying a PHP web application backed by Amazon Aurora.

It provides practical experience with AWS compute, managed databases, security configurations, and application-level integration. The structured approach ensures clarity, scalability, and cost awareness, making this project suitable for learning, portfolio use, and interview discussions.
