# School Management System

## Project Documentation

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/mazyopa3/school-management-system.git
   ```
2. Navigate into the project directory:
   ```bash
   cd school-management-system
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

### Features
- User authentication
- Course management
- Student enrollment
- Grading system
- Attendance tracking
- Notifications

### Demo Accounts
| Role           | Username     | Password  |
|----------------|--------------|-----------|
| Admin          | admin@test.com | admin123  |
| Teacher        | teacher@test.com | teacher123 |
| Student        | student@test.com | student123 |

### API Endpoints
- **Authentication**
  - `POST /api/auth/login` - Login to the system
  - `POST /api/auth/logout` - Logout from the system
- **Users**
  - `GET /api/users` - List all users
  - `POST /api/users` - Create a new user
- **Courses**
  - `GET /api/courses` - List all courses
  - `POST /api/courses` - Create a new course
- **Students**
  - `GET /api/students` - List all students
  - `POST /api/students` - Enroll a new student

### Architecture Overview
The School Management System is built using a microservices architecture comprising the following components:
- **Frontend**: A React application housed in the `/client` directory.
- **Backend**: An Express.js API housed in the `/server` directory.
- **Database**: A MongoDB database hosted on Atlas.

This architecture allows for scalability and independent service development.