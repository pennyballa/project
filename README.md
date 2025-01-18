# El Greco - Single Page Application (SPA)

This project is a Single Page Application (SPA) that presents the biography and works of the famous painter, Domenikos Theotokopoulos, also known as El Greco. The application is designed to be dynamic and includes features such as multi-language support and various web technologies.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features and Functionality](#features-and-functionality)
  - [Layout and Structure](#layout-and-structure)
  - [Content](#content)
  - [User Management](#user-management)

## Project Overview

The web application is structured using a dynamic layout that changes based on user interactions. It includes sections such as biography, paintings, exhibitions, and management, as well as authentication for administrative users to manage content.

### Layout and Structure
- **Grid Layout:** The page is organized into sections (`header`, `nav`, `aside`, `main`, and `footer`) using HTML for structure and CSS for styling. The layout is responsive and adapts to different screen sizes.
- **Main Navigation (`nav`):** The navigation menu includes options like Biography, Paintings, Exhibitions, Links, and Management. These options are styled using `float` for layout.
- **Sidebar (`aside`):** Static content that can show or hide depending on the selection made from the main navigation menu.

### Content
- **Biography and Paintings:** Static content displayed in the main section. It provides details about El Greco’s biography and showcases his paintings.
- **Exhibitions and Links:** Dynamic content that is loaded from the server using JSON files. The data is displayed in a table format, allowing for easy updates.

### User Management
- **User Authentication:** A login form for entering credentials (email: `mpl@gmail.com`, password: `12345`). User authentication is managed via a backend system that verifies the user’s credentials against a MySQL database.
- **Admin CRUD Operations:** The application has a "Management" section, where an authenticated admin can add, update, or delete exhibitions and links related to El Greco’s works.

## Technologies Used

This project utilizes the following technologies:

- **Frontend:**
  - HTML for the page structure
  - CSS for layout and styling (with a grid-based design)
  - JavaScript for dynamic behavior and data handling
- **Backend:**
  - Node.js for the server-side environment
  - Express.js for handling HTTP requests and routing
- **Data Handling:**
  - JSON files for storing and transferring exhibition and link data
- **Database:**
  - MySQL for storing user credentials, exhibitions, and links
- **Responsive Design:**
  - The app is fully responsive and optimized for desktop, tablet, and mobile devices.

## Features and Functionality

- **Responsive Web Design:** The application is built to be mobile-friendly and responsive across different devices and screen sizes.
- **User Authentication:** Implements secure user login using authentication methods to verify user credentials.
- **Admin Interface:** Only authenticated administrators can manage content, including adding and editing exhibitions and links related to El Greco.

---

This README provides an overview of the key requirements, technologies, and functionality of the application. It is designed to offer an insightful view into how the project was structured and developed using modern web technologies.
