# dualsupply

# Supply Chain Management System

A web-based supply chain management system that focuses on labor shortage management, green optimization for transportation routes, and carbon emission monitoring.

## Features

### 1. Labor Shortage Module
- Display company information in a tabular format
- View detailed company information including:
  - Company ID
  - Company Name
  - Contact Information
  - Working Hours
  - Stipend Details
- Direct contact access to companies

### 2. Green Optimization Module
- Route optimization for transportation
- Input parameters include:
  - Company ID
  - Start Area
  - Destination
  - Transport Type (Truck/Van/Car)
- Generates optimized routes with:
  - Distance calculation
  - Duration estimation
  - Carbon emission prediction

### 3. Carbon Dashboard
- Search companies by ID
- View company-specific carbon emission details
- Comprehensive overview of all companies' environmental impact
- Track transport types and emission data

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)

## Setup Instructions
1. Clone the repository
2. Open `index.html` in a web browser
3. No additional installation required as it's a client-side application

## Usage

### Labor Shortage Module
- Navigate to the Labor Shortage tab
- View available company listings
- Access contact information directly from the table

### Green Optimization Module
1. Navigate to the Green Optimization tab
2. Enter required details:
   - Company ID
   - Start location
   - Destination
   - Select transport type
3. Click "Optimize Route" to get results

### Carbon Dashboard
1. Navigate to the Carbon Dashboard tab
2. Search for specific company using Company ID
3. View comprehensive emission data

## Data Format
The system uses CSV format for data storage with the following structure:

### Labor Data
- Company ID
- Company Name
- Contact Number
- Email
- Start Time
- End Time
- Duration
- Stipend/Hour

### Transport Data
- Company ID
- Company Name
- Start Area
- Destination
- Transport Type
- Distance
- Duration
- Carbon Emission

## Contributing
Feel free to fork this project and submit pull requests for any improvements.

## License
This project is open source and available under the MIT License.
