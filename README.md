# Web-Posyandu-Data-Management-MultiVersion

**SiDilan** (Sistem Informasi Posyandu Melati Sembilan) is an innovative information system designed as an enhancement of the previous Posyandu application. Developed in collaboration with the local government, SiDilan integrates advanced features to support Posyandu activities, focusing on child health monitoring, community empowerment, and educational initiatives for stunting prevention.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
  - [Inherited Features](#inherited-features)
  - [New Features in SiDilan](#new-features-in-sidilan)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Introduction

SiDilan is an enhancement over the previous Posyandu application, designed to improve child health monitoring, community empowerment, and education on stunting prevention. The system offers both traditional and innovative features to facilitate and streamline the Posyandu processes.

## 🚀 Features

### Inherited Features

- **CMS for News and Education**: A powerful Content Management System (CMS) to easily manage and publish news and educational content relevant to community health and welfare.
- **Baby Screening Data**: Tools to collect and monitor data for tracking child growth, with specific focus on stunting prevention.

### New Features in SiDilan

1. **Kader Gendong**  
   An innovative feature for issuing task letters to Posyandu cadres across different neighborhoods. This feature ensures that shortages in one area can be supplemented by resources from another, enhancing community resource management.

2. **Resleting**  
   A platform aimed at raising awareness among teenagers about stunting. This feature includes educational activities and consultation support, encouraging creative and engaging participation from youth.

3. **SiBinggo**  
   A service provided by the Livestock Group for Family Income Improvement (UPPKA) Melati 9. SiBinggo focuses on marketing animal nutrient products and other goods from UP2K Nyonya 9, empowering the local economy of RW 09 Kelurahan Periuk by providing broader market opportunities.

## 🛠️ Technologies

- **Frontend**:
  - [Vue (TypeScript)](https://vuejs.org/)
  - [React (TypeScript)](https://reactjs.org/)
- **Backend**:
  - [OpenAPI](https://posyandu-data-management.vercel.app/)
  - [Laravel Domain-Driven Design](https://github.com/oskhar/RestAPI-Posyandu-Data-Management-MultiVersion)

## 📦 Installation

### Prerequisites

- Node.js v16.x or higher
- pnpm v6.x or higher

### Clone the Repository

```bash
git clone https://github.com/oskhar/Web-Posyandu-Data-Management-MultiVersion.git
cd Web-Posyandu-Data-Management-MultiVersion
```

### Install Dependencies

For Vue version:

```bash
cd vue-ts
pnpm install
```

For React version:

```bash
cd react-ts
pnpm install
```

### Running the Application

For Vue & React version:

```bash
pnpm dev
```

## 💻 Usage

Once the application is running, you can access it via `http://localhost:5173/` (Vite). The application will interact with the backend API, which you can also run locally by following the instructions in the [RestAPI-Posyandu-Data-Management-MultiVersion](https://github.com/oskhar/RestAPI-Posyandu-Data-Management-MultiVersion) repository.

## 📚 API Documentation

The API used by this application is documented using OpenAPI standards and is currently accessible at [OpenAPI Documentation](https://posyandu-data-management.vercel.app/). This API is under active development, and we welcome contributions to help enhance and stabilize the API across different versions.

To work with the backend locally, clone the backend repository and follow the setup instructions:

```bash
git clone https://github.com/oskhar/RestAPI-Posyandu-Data-Management-MultiVersion.git
cd RestAPI-Posyandu-Data-Management-MultiVersion
```

> **Note:** Please note that the only stable version at this time is `laravel-domain-driven-version`. Other versions, including those written in Golang and Express, are currently unstable.

## 🤝 Contributing

We welcome contributions from the community! Please refer to our [CONTRIBUTION_GUIDE.md](CONTRIBUTION_GUIDE.md) for detailed instructions on how to contribute to this project. This guide includes information on our code of conduct, pull request process, and coding standards.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
