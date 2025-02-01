# GIBWORK API EXAMPLE APP

A Next.js application demonstrating integration with GibWork's API for creating and exploring tasks with Solana wallet authentication.

## Overview

This application serves as an example implementation of GibWork's task management API with Solana wallet integration. It features two main routes:
- `/createTasks`: For authenticated users to create new tasks
- `/exploreTasks`: To browse and view all listed tasks

## Prerequisites

- Node.js (v16 or higher)
- npm 
- Solana Wallet

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd gibwork-api-example
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Features

### Wallet Authentication
- Application requires users to connect their Solana wallet before creating tasks
- Implemented using Solana Web3.js library

### Create Tasks (`/createTasks`)
Authenticated users can create tasks by providing:
- Title
- Description
- Token Mint Address
- Token Amount
- Tags

Endpoint used: `POST https://api2.gib.work/tasks/public/transaction`

### Explore Tasks (`/exploreTasks`)
Browse all listed tasks with features including:
- View all tasks: `GET https://api2.gib.work/explore`
- View individual task details: `GET https://api2.gib.work/tasks/{id}`


## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request
