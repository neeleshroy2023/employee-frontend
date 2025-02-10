# Employee Management System Frontend

A comprehensive frontend application built with React/TypeScript for interacting with the backend system.
This frontend provides a user interface for managing employee records, including their departments, leave
types, performance reviews, and more.

## Technologies Used

- React/TypeScript for component-based UI
- RESTful API endpoints
- Local storage for state management
- SQL database (using PostgreSQL as default)
- TypeScript for type safety

## Installation

1. Clone the repository:

```bash
git clone https://github.com/neeleshroy2023/employee-frontend.git
cd employee-frontend
```

2. Install dependencies:

1. Get PNPM
   https://pnpm.io/cli/install

```bash
pnpm install
```

3. Configure `package.json` with the following content:

```json
{
  "scripts": {
    "dev": "pnpm run dev",
    "build": "pnpm run build",
    "start": "pnpm start server"
  },
  "npmConfig": {
    "resolveJsonCache": true,
    "strict": true,
    "baseUrl": "//localhost:3000",
    "dotenv": true
  }
}
```

5. Create `.env`:

```text
JWT_SECRET_KEY=your_jwt_secret_key
API_BASE_URL=http://localhost:3000
PORT=3001
```

## Configuration

- This does not include any database

## API Reference

### Employees API (/api/employees)

#### Endpoints

- `/api/employees` - List all employees
- `/api/employees?page=1&pageSize=10` - paginated list of employees
- `/api/employees/department/dept-1` - Filter by department
- `/api/employees?status=ACTIVE` - Filter by employee status

#### Parameters

- `page`: Page number (default: 1)
- `pageSize`: Items per page (default: 10)
- `department`: Employee department ID
- `status`: Employee status (default: ACTIVE)

### Departements API (/api/departments)

#### Endpoints

- `/api/departments` - List all departments
- `/api/departments?page=1&pageSize=10` - paginated list of departments

### Leaves API (/api/leaves)

#### Endpoints

- `/api/leaves` - List all leaves
- `/api/leaves?type=VACATION` - Filter by leave type
- `/api/leaves?employeeId=123` - Filter by employee

### Performance Reviews API (/api/reviews)

#### Endpoints

- `/api/reviews` - List all performance reviews
- `/api/reviews?page=1&pageSize=10` - paginated list of performance reviews
- `/api/reviews?status=DRAFT` - Filter by status

## Sample Code

### Fetching Employees:

```javascript
import fetch from "node-fetch";

const response = await fetch("/api/employees", {
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("Response Status:", response.status);
console.log("Response Body:", await response.json());
```

### Example API Response:

```json
{
  "status": 200,
  "data": [
    {
      "employeeId": 1,
      "department": "Development",
      "firstName": "John",
      "lastName": "Doe",
      "status": "ACTIVE"
    },
    ...
  ]
}
```

## API Response Handling

### Common HTTP Status Codes:

- `200`: Success
- `404`: Not Found (Employee not found)
- `500`: Internal Server Error (Database operation failed)

### Including Response Headers:

```javascript
import fetch from "node-fetch";

const response = await fetch("/api/employees", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic your auth token",
  },
});

console.log("Response:", response);
const data = await response.json();
```

## Contributing

1. Fork and clone the repository
2. Create a `contributing.md` file in the root directory for guidelines
3. Commit changes with descriptive commit messages following `git log -p`

## Building

- Use `pnpm build` to prepare production builds:

```bash
cd src && pnpm run build && cd ..
```

For more details, refer to [the official
documentation](https://github.com/your-repository-name/employee-records).

## Note

This is a basic implementation. You may want to add additional features such as JWT authentication for API
requests or implement a proper state management solution.

## Known Issues

- [ ] Unhandled database connection issues
- [ ] Error handling in API endpoints needs improvement

## Future Features

- Implement JWT authentication
- Add CORS support
- Extend employee records with more fields (Salary, Experience)
- Add admin panel for managing users and permissions
