# Contribution Guide

Thank you for considering contributing to the **Web-Posyandu-Data-Management-MultiVersion** project! We value your input and contributions, whether it's code, documentation, bug reports, or suggestions for improvements.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Issues](#issues)
  - [Feature Requests](#feature-requests)
  - [Bug Reports](#bug-reports)
  - [Pull Requests](#pull-requests)
- [Coding Guidelines](#coding-guidelines)
  - [Commit Messages](#commit-messages)
  - [Branching Strategy](#branching-strategy)
  - [Code Formatting](#code-formatting)
- [Testing](#testing)
- [Running the Backend Locally](#running-the-backend-locally)
- [License](#license)

## ⚖️ Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and friendly environment for everyone participating in the project.

## ✨ How to Contribute

### Issues

If you find a bug or have an idea for a new feature, please start by checking the [issue tracker](https://github.com/oskhar/Web-Posyandu-Data-Management-MultiVersion/issues) to see if the issue has already been reported. If not, feel free to open a new issue.

### Feature Requests

We are always looking to improve, and your ideas can help shape the future of the project. If you have a feature request, please describe the feature in detail and provide any relevant use cases or screenshots to help us understand the request better.

### Bug Reports

If you encounter any bugs, please report them using the issue tracker. Provide as much detail as possible, including:

- Steps to reproduce the bug
- The expected behavior
- The actual behavior
- Any relevant error messages or logs

### Pull Requests

We welcome pull requests for bug fixes, new features, and documentation improvements. Before submitting a pull request, please ensure the following:

1. Your code adheres to our [Coding Guidelines](#coding-guidelines).
2. You have thoroughly tested your changes.
3. You have updated the relevant documentation, if applicable.
4. Your commit messages are descriptive and follow our [Commit Message Guidelines](#commit-messages).

To submit a pull request:

1. Fork the repository and create your branch from `main`.
2. Commit your changes to your branch.
3. Push your branch to your forked repository.
4. Open a pull request against the `main` branch.

## 📐 Coding Guidelines

### Commit Messages

To maintain consistency and clarity in your commit messages, please follow the [Conventional Commits](https://www.conventionalcommits.org/) format. This structure not only helps in understanding the changes made but also supports automation tools for versioning and changelog generation.

#### **Commit Message Format**

```
<type>[scope]: <description>
```

- **type**: The type of change being made (e.g., `feat`, `fix`, `docs`).
- **scope**: A short label indicating the part of the codebase affected (optional).
- **description**: A brief description of the change in the present tense.

#### **Types**

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation-only changes.
- `style`: Changes that do not affect the meaning of the code (e.g., white-space, formatting, missing semi-colons).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies (e.g., gulp, npm).
- `ci`: Changes to our CI configuration files and scripts (e.g., GitHub Actions, CircleCI).
- `chore`: Other changes that don't modify src or test files.
- `revert`: Reverts a previous commit.

#### **List Scopes**

For the `Web-Posyandu-Data-Management-MultiVersion` project, these scopes are suggested:

- `ui`: User Interface components or layout changes.
- `styles`: CSS or styling-related changes.
- `state`: State management (e.g., Vuex, Redux).
- `routing`: Changes to client-side routing.
- `components`: Changes or additions to Vue or React components.
- `api`: Interaction with backend APIs.
- `testing`: Frontend testing (e.g., Jest, Cypress).
- `build`: Webpack, Vite, or other build-related changes.
- `docs`: Changes to frontend documentation.
- `config`: Configuration files for the frontend project (e.g., ESLint, Prettier).

#### **Examples**

- `feat[ui]: Add new dashboard layout`
- `fix[api]: Resolve issue with POST request in SiBinggo`
- `style[styles]: Update button color to match branding`
- `docs[documentation]: Add usage instructions for Resleting feature`
- `test[state]: Add unit tests for Vuex store actions`

### Branching Strategy

We use the GitFlow branching strategy. Please create feature branches from `develop` and submit pull requests back to `develop`. For hotfixes, create branches from `main` and submit pull requests to `main`.

### Code Formatting

Please adhere to the following coding standards:

- Use consistent indentation (2 spaces for JavaScript/TypeScript).
- Write clear, descriptive comments where necessary.
- Follow the project's ESLint configuration for code style.

## 🧪 Testing

All contributions must include appropriate unit tests. Ensure that your code passes all existing tests and that your new tests cover any additional functionality you introduce.

### Running the Backend Locally

To develop and test the frontend against a local backend, you can clone and run the stable version of our backend API from the [RestAPI-Posyandu-Data-Management-MultiVersion](https://github.com/oskhar/RestAPI-Posyandu-Data-Management-MultiVersion) repository. Follow the setup instructions provided in the backend repository's README.

For now, only the `laravel-domain-driven-version` is stable. Contributions to the Golang and Express versions are welcome, but please be aware
