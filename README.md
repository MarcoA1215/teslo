# Teslo E-Commerce API 🛒

A robust and secure RESTful API for an e-commerce platform built with **NestJS**, **TypeScript**, and **PostgreSQL**. This project features a modular architecture focusing on scale, complete authentication, and data integrity.

## 🚀 Key Features
* **Full Authentication & Authorization:** Secure login and registration using JWT tokens, custom decorators, and Role-Based Access Control (RBAC).
* **Products Management:** CRUD operations for store items, multiple sizes, tags, and categorized filtering.
* **File Upload System:** Integrated image storage and serving endpoints with strict file format validation.
* **Database & Type Safety:** Managed with **TypeORM**, featuring complex entity relations and automated seeding.
* **Data Validation:** Bulletproof request inputs guarded by global `ValidationPipe` leveraging `class-validator`.

## 🛠️ Tech Stack
* **Backend Framework:** NestJS (v10)
* **Language:** TypeScript
* **Database:** PostgreSQL (with TypeORM)
* **Environment:** Docker & Docker Compose

## 📦 Local Setup

1. Clone this repository.
2. Setup your environment variables by copying `.env.template` into a new `.env` file.
3. Spin up the PostgreSQL database container:
   ```bash
   docker-compose up -d
   ```
4. Install dependencies:
   ```bash
   yarn install
   ```
5. Run the server in development mode:
   ```bash
   yarn start:dev
   ```
