# BD IntelliHub

BD IntelliHub is a centralized data platform designed to collect, transform, and visualize information from multiple sources in a single workspace.

The project combines automated data ingestion, data transformation pipelines, and interactive dashboards to support operational monitoring, analytical exploration, and informed decision-making.

## Architecture

```text
External Data Sources
        ↓
Data Loaders
        ↓
PostgreSQL
        ↓
Data Transformation Layer
        ↓
Next.js Application
        ↓
Interactive Dashboards
```

## Core Components

### Data Ingestion

Automated loaders collect and synchronize information from external and internal data sources.

Examples include:

- Spreadsheets
- APIs
- CSV exports
- Third-party data providers

### Data Storage

PostgreSQL serves as the central data repository.

Data is organized into:

- Raw datasets
- Processed datasets
- Analytics-ready views

### Data Transformation

The transformation layer is responsible for:

- Data normalization
- Data enrichment
- Business logic implementation
- Analytics table generation

### Application Layer

The web application is built with:

- Next.js
- TypeScript
- Ant Design

The application provides:

- Interactive dashboards
- Data exploration tools
- Search and filtering capabilities
- Reporting interfaces

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Ant Design
- Ant Design Charts

### Backend

- Next.js Server Components
- API Routes
- Scheduled Jobs

### Database

- PostgreSQL

### Infrastructure

- Vercel
- GitHub Actions

### Authentication

- Google OAuth

## Project Structure

```text
├── src
│   ├── app
│   ├── components
│   ├── services
│   ├── lib
│   ├── hooks
│   └── types
│
├── database
│   ├── migrations
│   ├── seeds
│   └── views
│
├── scripts
│   ├── loaders
│   ├── sync
│   └── maintenance
│
└── docs
```

## Key Principles

- Single source of truth
- Automated data collection
- Reproducible transformations
- Modular architecture
- Data-driven workflows
- Scalable deployment model

## Roadmap

- Additional data connectors
- Enhanced analytics capabilities
- Advanced search and filtering
- Automated reporting
- Intelligence and recommendation features
- Expanded dashboard ecosystem

## License

Private internal project.
