function scrollToProfile() {
    const targetElement = document.getElementById('target-profile');
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