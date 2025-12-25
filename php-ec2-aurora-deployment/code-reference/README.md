# 💻 Code Reference

This directory contains the PHP source code used in the **Deploying PHP Web Applications with Amazon EC2 and Aurora** project.

The files in this folder represent the core application logic used to validate database connectivity and demonstrate basic read and write operations against an Amazon Aurora database.

---

## 📄 File Overview

### 📂 `index.php`

This file validates connectivity between the PHP application and the Aurora database.

**🎯 Purpose:**
- Establish a database connection using environment variables.
- Verify successful communication with the database.
- Display a confirmation message in the browser.

**🛠️ Key Responsibilities:**
- Read database credentials from environment variables.
- Create a database connection using the `mysqli` extension.
- Handle connection failures gracefully.

---

### 📂 `visit-counter.php`

This file demonstrates persistent database interaction by tracking page visits.

**🎯 Purpose:**
- Validate read and write operations on the Aurora database.
- Store page visit data in a database table.
- Display the total number of visits.
- 
**🛠️ Key Responsibilities:**
- Create a database table if it does not exist.
- Insert a new record for each page visit.
- Retrieve and display the visit count.

---

## 🧪 Usage Notes

- Both files must be placed in the web server document root (`/var/www/html/`).
- Database credentials are passed using environment variables and are not hardcoded.
- The Apache web server must be restarted after deploying or updating these files.

---

## 📚 Related Documentation

For setup instructions and architectural context, refer to:
- `execution-guide/`
- `project-overview/`
- Root `README.md`


