

 // Tab toggling logic
 document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove 'active' from all buttons and panes
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add 'active' to clicked button and corresponding pane
            this.classList.add('active');
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab + '-tab').classList.add('active');
        });
    });
});


/* Education modules */
const modules = [
    {
        title: "Earthquake Preparedness",
        description: "Learn how to stay safe before, during, and after an earthquake. Includes evacuation plans, emergency kits, and safety drills.",
        image: "./assets/images/earthquake.jpeg",
        link: "./studentModules.html"
    },
    {
        title: "Flood Safety",
        description: "Understand flood warnings, evacuation routes, and how to protect yourself and your belongings during floods.",
        image: "./assets/images/floods.jpeg",
        link: "#"
    },
    {
        title: "Fire Response",
        description: "Discover fire prevention tips, emergency exits, and how to respond to fire alarms in your institution.",
        image: "./assets/images/wildfire.jpg",
        link: "#"
    },
    {
        title: "Cyclone Awareness",
        description: "Get informed about cyclone alerts, safe shelters, and post-cyclone recovery steps.",
        image: "./assets/images/cyclones.jpg",
        link: "#"
    },
    {
        title: "First Aid Basics",
        description: "Master essential first aid skills for common injuries and emergencies.",
        image: "./assets/images/firstAid.jpg",
        link: "#"
    }
];

function createModuleCard(module) {
    return `
        <div class="module-card">
            <img src="${module.image}" alt="${module.title}" class="module-image">
            <div class="module-info">
                <h4>${module.title}</h4>
                <p>${module.description}</p>
                <a href="${module.link}" class="module-link">Start Learning &rarr;</a>
            </div>
        </div>
    `;
}

// Populate modules grid on page load
document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("modules-grid");
    grid.innerHTML = modules.map(createModuleCard).join('');
});

//Regional alerts

const regionalAlerts = [
    {
        region: "Visakhapatnam",
        type: "Cyclone Warning",
        message: "Cyclone expected to make landfall within 24 hours. Stay indoors and follow official advisories.",
        severity: "high",
        time: "2024-06-10 14:00"
    },
    {
        region: "Andhra Pradesh",
        type: "Flood Alert",
        message: "Heavy rainfall predicted. Avoid low-lying areas and monitor local news for updates.",
        severity: "medium",
        time: "2024-06-09 18:00"
    },
    {
        region: "Hyderabad",
        type: "Heatwave Advisory",
        message: "Temperatures expected to exceed 42°C. Stay hydrated and avoid outdoor activities during peak hours.",
        severity: "low",
        time: "2024-06-08 11:00"
    }
];

function getSeverityColor(severity) {
    switch(severity) {
        case "high": return "#dc2626"; // red
        case "medium": return "#f59e42"; // orange
        case "low": return "#eab308"; // yellow
        default: return "#64748b";
    }
}

function createAlertCard(alert) {
    return `
        <div class="alert-card" style="border-left: 6px solid ${getSeverityColor(alert.severity)};">
            <div class="alert-container"">
                <span class="alert-severity" style="color: ${getSeverityColor(alert.severity)};">${alert.type}</span>
                <span class="alert-location" >${alert.region}</span>
                <span class="alert-time">${alert.time}</span>
            </div>
            <div style="margin-top: 0.5rem; color: #374151; font-size: 1rem;">
                ${alert.message}
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    // Populate regional alerts
    const alertsContainer = document.getElementById("alerts-container");
    if (alertsContainer) {
        if (regionalAlerts.length === 0) {
            alertsContainer.innerHTML = `<p style="color:#64748b;">No current alerts for your region.</p>`;
        } else {
            alertsContainer.innerHTML = regionalAlerts.map(createAlertCard).join('');
        }
    }
});

//virtual drills
const drills = [
    {
        title: "Earthquake Escape Room",
        description: "Navigate a virtual classroom during an earthquake. Find safe spots, avoid hazards, and make quick decisions to earn points!",
        image: "./assets/images/drills/earthquake-drill.jpg",
        link: "#",
        badge: "Gamified"
    },
    {
        title: "Flood Evacuation Simulator",
        description: "Simulate a flood scenario in your neighborhood. Choose the best evacuation route, pack essentials, and help others to score higher.",
        image: "./assets/images/drills/flood-drill.jpg",
        link: "#",
        badge: "Interactive"
    },
    {
        title: "Fire Safety Challenge",
        description: "Test your fire response skills! Identify fire hazards, use extinguishers, and guide classmates to safety in this timed challenge.",
        image: "./assets/images/drills/fire-drill.png",
        link: "#",
        badge: "Timed"
    },
    {
        title: "Cyclone Shelter Quest",
        description: "Race against the clock to reach a safe shelter before a cyclone hits. Make choices about supplies and routes for bonus points.",
        image: "./assets/images/drills/cyclone-drill.jpg",
        link: "#",
        badge: "Adventure"
    }
];

function createDrillCard(drill) {
    return `
        <div class="drill-card">
            <img src="${drill.image}" alt="${drill.title}" class="drill-image">
            <div class="drill-info">
                <h4>${drill.title} <span class="drill-badge">${drill.badge}</span></h4>
                <p>${drill.description}</p>
                <a href="${drill.link}" class="drill-link" target="_blank">Start Simulation &rarr;</a>
            </div>
        </div>
    `;
}

// --- Tab Switching Logic for Student Tabs ---
document.addEventListener("DOMContentLoaded", function() {
    // Populate Drills
    const drillsGrid = document.getElementById("drills-container");
    if (drillsGrid) {
        drillsGrid.innerHTML = drills.map(createDrillCard).join('');
    }

    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove 'active' from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add 'active' to clicked button and corresponding pane
            this.classList.add('active');
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab + '-tab').classList.add('active');
        });
    });
});




function scrollToProfile() {
    const targetElement = document.getElementById('target-profile');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }





         // Emergency numbers data
         const emergencyNumbers = [
            { name: "National Emergency Number", number: "112" },
            { name: "Police", number: "100" },
            { name: "Fire", number: "101" },
            { name: "Ambulance", number: "102" },
            { name: "Disaster Management Services", number: "108" },
            { name: "National Disaster Management Authority (NDMA)", number: "011-26701728" },
            { name: "NDRF (National Disaster Response Force)", number: "011-24363260, 9711077372" },
            { name: "Child Helpline", number: "1098" },
            { name: "Women Helpline", number: "1091" },
            { name: "Railway Enquiry", number: "139" }
        ];

        // Create modal HTML
        function createEmergencyModal() {
            if (document.getElementById('emergency-modal')) return; // Prevent duplicates

            const modal = document.createElement('div');
            modal.id = 'emergency-modal';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            modal.style.background = 'rgba(0,0,0,0.4)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '9999';

            modal.innerHTML = `
                <div style="
                    background: #fff;
                    border-radius: 12px;
                    max-width: 400px;
                    width: 90vw;
                    padding: 2rem 1.5rem 1.5rem 1.5rem;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
                    position: relative;
                    font-family: inherit;
                ">
                    <button id="close-emergency-modal" style="
                        position: absolute;
                        top: 10px;
                        right: 14px;
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        color: #888;
                        cursor: pointer;
                    " title="Close">&times;</button>
                    <h2 style="margin-top:0; color:#d35400; text-align:center;">Emergency Numbers</h2>
                    <ul style="list-style:none; padding:0; margin:1rem 0 0 0;">
                        ${emergencyNumbers.map(item => `
                            <li style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-weight:500;">${item.name}</span>
                                <span style="font-family:monospace; color:#2d3436;">${item.number}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            document.body.appendChild(modal);

            // Close modal on button click or background click
            document.getElementById('close-emergency-modal').onclick = () => {
                modal.remove();
            };
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
        }

        // Attach function to global scope for inline onclick
        function showEmergencyModal() {
            createEmergencyModal();
        }
        window.showEmergencyModal = showEmergencyModal;