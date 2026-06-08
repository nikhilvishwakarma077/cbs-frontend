<<<<<<< HEAD
# Core Banking Service (CBS)

## 📌 Project Overview

Core Banking Service (CBS) is a backend banking system developed using Java Spring Boot.
The project simulates real-world banking operations such as customer onboarding, document handling, KYC verification orchestration, account creation, deposits, withdrawals, fund transfers, and transaction management.

The system follows layered architecture and is designed to simulate a real banking workflow used in modern banking applications.

---

# 🚀 Features

## 👤 Customer Management
- Customer Registration
- Fetch Customer Details
- Customer Status Management
- KYC Status Tracking

## 📄 Document Management
- Upload Aadhaar/PAN Documents
- Store Customer Documents
- Retrieve Uploaded Documents
- Integration-ready for OCR services

## ✅ KYC Verification
- KYC Verification Flow
- Customer Verification Status Update
- Python Service Integration Ready
- REST API-based orchestration

## 🏦 Account Management
- Savings Account Creation
- Current Account Creation
- Unique Account Number Generation
- Balance Inquiry
- Account Status Management

## 💰 Transaction Management
- Deposit Money
- Withdraw Money
- Fund Transfer
- Transaction History
- Insufficient Balance Validation

## 🌐 API Documentation
- Swagger/OpenAPI Integration
- Interactive API Testing UI
- Public API Sharing using ngrok

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Java 17 | Backend Development |
| Spring Boot | REST API Development |
| Spring Data JPA | ORM Framework |
| PostgreSQL | Relational Database |
| Lombok | Boilerplate Reduction |
| Maven | Dependency Management |
| Swagger/OpenAPI | API Documentation |
| Postman | API Testing |
| ngrok | Public API Exposure |
| React.js | Frontend (Separate Team) |
| Python | OCR & KYC Services (Separate Team) |

---

# 🏗️ System Architecture

```text
                +-------------------+
                |   React Frontend  |
                +-------------------+
                          |
                          v
                +-------------------+
                | Spring Boot APIs  |
                +-------------------+
                   |            |
                   |            |
                   v            v
          +---------------+   +----------------+
          | PostgreSQL DB |   | Python Service |
          +---------------+   +----------------+
                                   |
                                   v
                          OCR / KYC Verification
```

---

# 📂 Project Structure

```text
src/main/java/com/bank/cbs
│
├── controller
├── service
├── repository
├── entity
├── dto
├── config
└── exception
```

---

# 🗄️ Database Design

## Customer Table

| Column | Description |
|---|---|
| customer_id | Primary Key |
| first_name | Customer First Name |
| last_name | Customer Last Name |
| mobile | Mobile Number |
| email | Email Address |
| date_of_birth | Date of Birth |
| gender | Gender |
| address | Customer Address |
| city | City |
| state | State |
| pincode | Pincode |
| pan_number | PAN Number |
| aadhaar_number | Aadhaar Number |
| status | KYC Status |

---

## Account Table

| Column | Description |
|---|---|
| account_id | Primary Key |
| account_number | Unique Account Number |
| account_type | SAVINGS/CURRENT |
| balance | Current Balance |
| status | ACTIVE/INACTIVE |
| customer_id | Foreign Key |

---

## Document Table

| Column | Description |
|---|---|
| doc_id | Primary Key |
| doc_type | Aadhaar/PAN |
| file_name | Uploaded File Name |
| file_path | File Storage Path |
| customer_id | Foreign Key |

---

## Transaction Table

| Column | Description |
|---|---|
| txn_id | Primary Key |
| amount | Transaction Amount |
| type | CREDIT/DEBIT |
| timestamp | Transaction Time |
| account_id | Foreign Key |

---

# 🔄 Banking Workflow

```text
Customer Registration
        ↓
Document Upload
        ↓
KYC Verification
        ↓
Account Creation
        ↓
Initial Deposit
        ↓
Withdraw / Transfer
        ↓
Transaction History
```

---

# 🌐 API Endpoints

## 👤 Customer APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/customer | Create Customer |
| GET | /api/customer/{id} | Get Customer By ID |
| GET | /api/customer | Get All Customers |

---

## 📄 Document APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/document/upload | Upload Document |
| GET | /api/document/customer/{customerId} | Get Customer Documents |

---

## ✅ KYC APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/kyc/verify/{customerId} | Verify Customer KYC |

---

## 🏦 Account APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/account/create | Create Account |
| GET | /api/account/{id} | Get Account Details |
| GET | /api/account/balance/{accountId} | Check Account Balance |

---

## 💰 Transaction APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/transaction/deposit | Deposit Money |
| POST | /api/transaction/withdraw | Withdraw Money |
| POST | /api/transaction/transfer | Transfer Money |
| GET | /api/transaction/account/{accountId} | Transaction History |

---

# 📘 API Documentation

The project uses Swagger/OpenAPI for interactive API documentation and API testing.

## 🔹 Swagger UI

Access Swagger UI locally:

```text
http://localhost:8080/swagger-ui/index.html
```

Access Swagger UI using ngrok:

```text
https://ngrok-url/swagger-ui/index.html (not mentioned here due to privacy issues)
```

Swagger UI provides:
- Interactive API testing
- Request/response visualization
- Endpoint categorization
- Request body schemas
- API parameter documentation


---

## 2️⃣ Configure PostgreSQL

Create database:

```sql
CREATE DATABASE bankdb;
```

---

## 3️⃣ Configure application.properties

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/bankdb
spring.datasource.username=postgres
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 4️⃣ Run Application

Using IntelliJ IDEA:
- Open project
- Run main Spring Boot application

OR

Using Maven:

```bash
mvn spring-boot:run
```

---

## 5️⃣ Run ngrok

```bash
ngrok http 8080
```


---

# 🧪 API Testing

Use Postman for API testing.

Example:

```http
POST http://localhost:8080/api/customer
```

---

# 🔐 Banking Rules Implemented

- KYC verification required before account creation
- Insufficient balance validation during withdrawal/transfer
- Customer-to-account relationship maintained
- Transaction history maintained for every operation
- Account number generated uniquely

---

# 📈 Future Enhancements

- JWT Authentication
- Role-Based Access Control
- Global Exception Handling
- Request Validation
- Docker Deployment
- Kafka Integration
- Redis Caching
- Email/SMS Notification
- PDF Statement Generation
- Daily Transaction Limits
- Microservices Architecture

---

# 👨‍💻 Contributors

- Java Backend Team
- React Frontend Team
- Python OCR/KYC Team

---

# 📌 Conclusion

This project demonstrates the implementation of a mini Core Banking System using Spring Boot with real-world banking workflows including customer onboarding, KYC orchestration, account management, and transactional operations.

The project is designed with modular architecture and integration-ready APIs for frontend and Python-based services.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> b1649ab (Initial commit - frontend  setup)
