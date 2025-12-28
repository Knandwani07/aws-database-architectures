# 💻 Code Reference

This directory contains the MongoDB shell scripts and setup utilities used in the **CineDB: Building a Movie Catalog with Amazon DocumentDB** project.

The files in this folder represent the core database interaction logic and environment setup required to validate secure connectivity and demonstrate CRUD (Create, Read, Update, Delete) operations against an Amazon DocumentDB cluster.

---

## 📄 File Overview

### 📂 `setup-mongosh-docdb.sh`

This script prepares the EC2 client instance for connecting to Amazon DocumentDB.

**🎯 Purpose:**
- Install the MongoDB Shell (`mongosh`) on an Amazon Linux EC2 instance.
- Download the Amazon DocumentDB TLS certificate.
- Ensure the environment is ready for secure database connections.

**🛠️ Key Responsibilities:**
- Update system packages.
- Download and install the MongoDB Shell RPM.
- Verify successful installation of `mongosh`.
- Download the global TLS certificate required for encrypted connections.

---

### 📂 `movies-crud.js`

This script demonstrates MongoDB-compatible CRUD operations on Amazon DocumentDB using a sample movie catalog.

**🎯 Purpose:**
- Validate application-level interaction with Amazon DocumentDB.
- Demonstrate MongoDB-style database operations using `mongosh`.
- Provide a reusable reference for basic NoSQL workflows.

**🛠️ Key Responsibilities:**
- Switch to the `movieCatalog` database.
- Create a `movies` collection.
- Insert sample movie documents.
- Perform read operations using queries and filters.
- Update single and multiple documents.
- Delete documents and verify results.

---

## 🧪 Usage Notes

- Both files are intended to be executed on the EC2 client instance.
- The setup script must be run before connecting to DocumentDB.
- The CRUD script should be executed inside the `mongosh` shell.
- Secure connectivity requires the TLS certificate downloaded by the setup script.
- Database credentials are provided at connection time and are not hardcoded.

---

## 📚 Related Documentation

For setup instructions and architectural context, refer to:
- `execution-guide.md`
- Root `README.md`
- Project documentation on DEV Community
