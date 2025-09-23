function scrollToProfile() {
    const targetElement = document.getElementById('target-profile');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
function scrollToDashboard() {
    const targetElement = document.getElementById('target-dashboard');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }


   // Example student data with roll numbers
   const students = [
    { rollNo: "2024A001", name: "Surya", modulesCompleted: 15, avgScore: 98 },
    { rollNo: "2024A002", name: "Aditi", modulesCompleted: 12, avgScore: 85 },
    { rollNo: "2024A003", name: "Rohan", modulesCompleted: 8, avgScore: 70 },
    { rollNo: "2024A004", name: "Priya", modulesCompleted: 5, avgScore: 60 },
    { rollNo: "2024A005", name: "Vikram", modulesCompleted: 2, avgScore: 40 },
    { rollNo: "2024A006", name: "Meera", modulesCompleted: 0, avgScore: 0 },
    { rollNo: "2024A007", name: "Anjali", modulesCompleted: 13, avgScore: 92 },
    { rollNo: "2024A008", name: "Rahul", modulesCompleted: 10, avgScore: 81 },
    { rollNo: "2024A009", name: "Sana", modulesCompleted: 7, avgScore: 68 },
    { rollNo: "2024A010", name: "Karan", modulesCompleted: 4, avgScore: 55 }
];

function getBadge(modules, score) {
    // Assign badge based on modules completed and avg score
    if (modules === 15 && score >= 95) return "Grandmaster 🏆";
    if (modules >= 13 && score >= 90) return "Ace 💎";
    if (modules >= 10 && score >= 80) return "Diamond 💠";
    if (modules >= 7 && score >= 65) return "Gold 🥇";
    if (modules >= 4 && score >= 50) return "Silver 🥈";
    if (modules >= 1 && score >= 30) return "Bronze 🥉";
    return "No Badge";
}

function renderStudentList() {
    const tbody = document.getElementById('student-list-body');
    tbody.innerHTML = '';
    students.forEach(student => {
        const badge = getBadge(student.modulesCompleted, student.avgScore);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding:0.75rem; border-bottom:1px solid #eee;">${student.rollNo}</td>
            <td style="padding:0.75rem; border-bottom:1px solid #eee;">${student.name}</td>
            <td style="padding:0.75rem; border-bottom:1px solid #eee;">${student.modulesCompleted}/15</td>
            <td style="padding:0.75rem; border-bottom:1px solid #eee;">${student.avgScore}%</td>
            <td style="padding:0.75rem; border-bottom:1px solid #eee;">${badge}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Initial render
renderStudentList();



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