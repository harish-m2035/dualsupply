// Sample data (in a real application, this would come from CSV files)
const laborData = [
    {
        company_id: "1",
        company_name: "ABC Corp",
        contact_number: "+1-123-456-7890",
        email: "abc@example.com",
        start_time: "09:00",
        end_time: "17:00",
        duration: "8",
        stipend_per_hour: "25"
    },
    {
        company_id: "2",
        company_name: "XYZ Industries",
        contact_number: "+1-234-567-8901",
        email: "xyz@example.com",
        start_time: "08:00",
        end_time: "16:00",
        duration: "8",
        stipend_per_hour: "30"
    }
];

const transportData = [
    {
        company_id: "1",
        company_name: "ABC Corp",
        start_area: "New York",
        destination: "Boston",
        transport_type: "Truck",
        distance: "215",
        duration: "4.5",
        carbon_emission: "2.3"
    },
    {
        company_id: "2",
        company_name: "XYZ Industries",
        start_area: "Chicago",
        destination: "Detroit",
        transport_type: "Van",
        distance: "280",
        duration: "5.2",
        carbon_emission: "1.8"
    }
];

// Show selected module
function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(module => {
        module.classList.add('hidden');
    });
    document.getElementById(moduleId).classList.remove('hidden');
}

// Labor Shortage Module
function populateLaborTable() {
    const tableBody = document.getElementById('laborTableBody');
    tableBody.innerHTML = '';

    laborData.forEach(company => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${company.company_id}</td>
            <td>${company.company_name}</td>
            <td>${company.contact_number}</td>
            <td>${company.email}</td>
            <td>${company.start_time}</td>
            <td>${company.end_time}</td>
            <td>${company.duration}</td>
            <td>$${company.stipend_per_hour}</td>
            <td><button onclick="showContactPopup('${company.company_id}')">Contact</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function showContactPopup(companyId) {
    const company = laborData.find(c => c.company_id === companyId);
    const popup = document.getElementById('contactPopup');
    const content = document.getElementById('popupContent');
    
    content.innerHTML = `
        <p><strong>Company:</strong> ${company.company_name}</p>
        <p><strong>Phone:</strong> ${company.contact_number}</p>
        <p><strong>Email:</strong> ${company.email}</p>
    `;
    
    popup.classList.remove('hidden');
}

function closePopup() {
    document.getElementById('contactPopup').classList.add('hidden');
}

// Green Optimization Module
document.getElementById('routeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        company_id: document.getElementById('companyId').value,
        start_area: document.getElementById('startArea').value,
        destination: document.getElementById('destination').value,
        transport_type: document.getElementById('transportType').value
    };

    // Simulate route optimization
    const distance = Math.floor(Math.random() * 500) + 100;
    const duration = Math.floor(Math.random() * 8) + 2;
    const emission = (Math.random() * 3).toFixed(2);

    const resultDiv = document.getElementById('routeResult');
    resultDiv.innerHTML = `
        <h3>Optimized Route Results</h3>
        <p><strong>Distance:</strong> ${distance} km</p>
        <p><strong>Duration:</strong> ${duration} hours</p>
        <p><strong>Carbon Emission:</strong> ${emission} tons</p>
        <p><strong>Recommended Route:</strong> ${formData.start_area} → ${formData.destination}</p>
    `;
    resultDiv.classList.remove('hidden');

    // In a real application, you would save this data to the CSV file
});

// Carbon Dashboard Module
function searchCompany() {
    const companyId = document.getElementById('searchCompanyId').value;
    const company = transportData.find(c => c.company_id === companyId);
    const detailsDiv = document.getElementById('companyDetails');

    if (company) {
        detailsDiv.innerHTML = `
            <h3>Company Details</h3>
            <p><strong>Company ID:</strong> ${company.company_id}</p>
            <p><strong>Company Name:</strong> ${company.company_name}</p>
            <p><strong>Carbon Emission:</strong> ${company.carbon_emission} tons</p>
            <p><strong>Transport Type:</strong> ${company.transport_type}</p>
        `;
        detailsDiv.classList.remove('hidden');
    } else {
        detailsDiv.innerHTML = '<p>Company not found</p>';
        detailsDiv.classList.remove('hidden');
    }
}

function displayAllCompanies() {
    const container = document.getElementById('allCompanies');
    container.innerHTML = `
        <h3>All Companies Data</h3>
        <table>
            <thead>
                <tr>
                    <th>Company ID</th>
                    <th>Company Name</th>
                    <th>Transport Type</th>
                    <th>Carbon Emission</th>
                </tr>
            </thead>
            <tbody>
                ${transportData.map(company => `
                    <tr>
                        <td>${company.company_id}</td>
                        <td>${company.company_name}</td>
                        <td>${company.transport_type}</td>
                        <td>${company.carbon_emission} tons</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateLaborTable();
    displayAllCompanies();
    showModule('labor'); // Show labor module by default
});