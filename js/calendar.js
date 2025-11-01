// Academic Calendar Data
const academicEvents = [
    // Tahun Ajaran 2024/2025 - Semester Ganjil
    {
        date: '2024-07-15',
        title: 'Awal Tahun Ajaran 2024/2025',
        description: 'Hari pertama masuk sekolah untuk tahun ajaran baru',
        category: 'activity'
    },
    {
        date: '2024-07-15',
        endDate: '2024-07-20',
        title: 'Masa Pengenalan Lingkungan Sekolah (MPLS)',
        description: 'Kegiatan orientasi untuk siswa baru',
        category: 'activity'
    },
    {
        date: '2024-08-17',
        title: 'Hari Kemerdekaan RI',
        description: 'Upacara dan kegiatan memperingati HUT RI ke-79',
        category: 'holiday'
    },
    {
        date: '2024-09-16',
        title: 'Hari Ozon Internasional',
        description: 'Kegiatan peduli lingkungan',
        category: 'activity'
    },
    {
        date: '2024-09-23',
        endDate: '2024-09-27',
        title: 'Penilaian Tengah Semester (PTS) Ganjil',
        description: 'Ujian tengah semester untuk semua kelas',
        category: 'exam'
    },
    {
        date: '2024-10-28',
        title: 'Hari Sumpah Pemuda',
        description: 'Upacara dan kegiatan memperingati Sumpah Pemuda',
        category: 'holiday'
    },
    {
        date: '2024-11-10',
        title: 'Hari Pahlawan',
        description: 'Upacara memperingati Hari Pahlawan',
        category: 'holiday'
    },
    {
        date: '2024-12-02',
        endDate: '2024-12-13',
        title: 'Penilaian Akhir Semester (PAS) Ganjil',
        description: 'Ujian akhir semester ganjil',
        category: 'exam'
    },
    {
        date: '2024-12-16',
        endDate: '2024-12-20',
        title: 'Porsenitas',
        description: 'Pekan Olahraga dan Seni',
        category: 'activity'
    },
    {
        date: '2024-12-21',
        title: 'Pembagian Rapor Semester Ganjil',
        description: 'Penerimaan rapor semester ganjil',
        category: 'activity'
    },
    {
        date: '2024-12-23',
        endDate: '2025-01-05',
        title: 'Libur Semester Ganjil',
        description: 'Libur akhir semester ganjil',
        category: 'holiday'
    },
    {
        date: '2024-12-25',
        title: 'Hari Natal',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-01-01',
        title: 'Tahun Baru 2025',
        description: 'Hari libur nasional',
        category: 'holiday'
    },

    // Tahun Ajaran 2024/2025 - Semester Genap
    {
        date: '2025-01-06',
        title: 'Awal Semester Genap',
        description: 'Hari pertama masuk semester genap',
        category: 'activity'
    },
    {
        date: '2025-01-29',
        title: 'Tahun Baru Imlek 2576',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-02-12',
        title: 'Isra Miraj Nabi Muhammad SAW',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-03-03',
        endDate: '2025-03-07',
        title: 'Penilaian Tengah Semester (PTS) Genap',
        description: 'Ujian tengah semester genap',
        category: 'exam'
    },
    {
        date: '2025-03-22',
        title: 'Hari Raya Nyepi',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-03-29',
        endDate: '2025-03-31',
        title: 'Hari Raya Idul Fitri 1446 H',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-03-24',
        endDate: '2025-04-05',
        title: 'Libur Hari Raya Idul Fitri',
        description: 'Libur bersama Idul Fitri',
        category: 'holiday'
    },
    {
        date: '2025-04-18',
        title: 'Wafat Isa Almasih',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-05-01',
        title: 'Hari Buruh Internasional',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-05-12',
        title: 'Kenaikan Isa Almasih',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-05-20',
        title: 'Hari Kebangkitan Nasional',
        description: 'Upacara memperingati Harkitnas',
        category: 'activity'
    },
    {
        date: '2025-05-29',
        title: 'Hari Raya Waisak 2569',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-06-01',
        title: 'Hari Lahir Pancasila',
        description: 'Upacara memperingati Hari Pancasila',
        category: 'activity'
    },
    {
        date: '2025-06-02',
        endDate: '2025-06-13',
        title: 'Penilaian Akhir Semester (PAS) Genap',
        description: 'Ujian akhir semester genap',
        category: 'exam'
    },
    {
        date: '2025-06-05',
        title: 'Hari Raya Idul Adha 1446 H',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-06-16',
        endDate: '2025-06-20',
        title: 'Porsenitas',
        description: 'Pekan Olahraga dan Seni',
        category: 'activity'
    },
    {
        date: '2025-06-21',
        title: 'Pembagian Rapor Semester Genap',
        description: 'Penerimaan rapor semester genap dan kenaikan kelas',
        category: 'activity'
    },
    {
        date: '2025-06-23',
        endDate: '2025-07-13',
        title: 'Libur Kenaikan Kelas',
        description: 'Libur akhir tahun ajaran',
        category: 'holiday'
    },
    {
        date: '2025-06-26',
        title: 'Tahun Baru Islam 1447 H',
        description: 'Hari libur nasional',
        category: 'holiday'
    },

    // Tahun Ajaran 2025/2026 - Semester Ganjil
    {
        date: '2025-07-14',
        title: 'Awal Tahun Ajaran 2025/2026',
        description: 'Hari pertama masuk sekolah tahun ajaran baru',
        category: 'activity'
    },
    {
        date: '2025-07-14',
        endDate: '2025-07-19',
        title: 'Masa Pengenalan Lingkungan Sekolah (MPLS)',
        description: 'Kegiatan orientasi untuk siswa baru',
        category: 'activity'
    },
    {
        date: '2025-08-17',
        title: 'Hari Kemerdekaan RI',
        description: 'Upacara dan kegiatan memperingati HUT RI ke-80',
        category: 'holiday'
    },
    {
        date: '2025-09-05',
        title: 'Maulid Nabi Muhammad SAW',
        description: 'Hari libur nasional',
        category: 'holiday'
    },
    {
        date: '2025-09-22',
        endDate: '2025-09-26',
        title: 'Penilaian Tengah Semester (PTS) Ganjil',
        description: 'Ujian tengah semester ganjil',
        category: 'exam'
    },
    {
        date: '2025-10-28',
        title: 'Hari Sumpah Pemuda',
        description: 'Upacara dan kegiatan memperingati Sumpah Pemuda',
        category: 'holiday'
    },
    {
        date: '2025-11-10',
        title: 'Hari Pahlawan',
        description: 'Upacara memperingati Hari Pahlawan',
        category: 'holiday'
    },
    {
        date: '2025-12-01',
        endDate: '2025-12-12',
        title: 'Penilaian Akhir Semester (PAS) Ganjil',
        description: 'Ujian akhir semester ganjil',
        category: 'exam'
    },
    {
        date: '2025-12-15',
        endDate: '2025-12-19',
        title: 'Porsenitas',
        description: 'Pekan Olahraga dan Seni',
        category: 'activity'
    },
    {
        date: '2025-12-20',
        title: 'Pembagian Rapor Semester Ganjil',
        description: 'Penerimaan rapor semester ganjil',
        category: 'activity'
    },
    {
        date: '2025-12-22',
        endDate: '2026-01-04',
        title: 'Libur Semester Ganjil',
        description: 'Libur akhir semester ganjil',
        category: 'holiday'
    },
    {
        date: '2025-12-25',
        title: 'Hari Natal',
        description: 'Hari libur nasional',
        category: 'holiday'
    }
];

// Calendar State
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Initialize Calendar
document.addEventListener('DOMContentLoaded', function() {
    initializeCalendar();
    renderCalendar();
    renderEventsList();
    
    // Event Listeners
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
        renderEventsList();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
        renderEventsList();
    });
    
    document.getElementById('monthSelect').addEventListener('change', (e) => {
        currentMonth = parseInt(e.target.value);
        renderCalendar();
        renderEventsList();
    });
    
    document.getElementById('yearSelect').addEventListener('change', (e) => {
        currentYear = parseInt(e.target.value);
        renderCalendar();
        renderEventsList();
    });
});

function initializeCalendar() {
    // Populate year select
    const yearSelect = document.getElementById('yearSelect');
    const startYear = 2024;
    const endYear = 2026;
    
    for (let year = startYear; year <= endYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) {
            option.selected = true;
        }
        yearSelect.appendChild(option);
    }
    
    // Set current month
    document.getElementById('monthSelect').value = currentMonth;
}

function renderCalendar() {
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                       'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    
    // Update header
    document.getElementById('currentMonthYear').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Get calendar data
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    // Add day headers
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Add previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const dayElement = createDayElement(day, currentMonth - 1, currentYear, true);
        calendarGrid.appendChild(dayElement);
    }
    
    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = createDayElement(day, currentMonth, currentYear, false);
        calendarGrid.appendChild(dayElement);
    }
    
    // Add next month days
    const totalCells = calendarGrid.children.length - 7; // Subtract day headers
    const remainingCells = 42 - totalCells; // 6 rows * 7 days
    for (let day = 1; day <= remainingCells; day++) {
        const dayElement = createDayElement(day, currentMonth + 1, currentYear, true);
        calendarGrid.appendChild(dayElement);
    }
}

function createDayElement(day, month, year, isOtherMonth) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    
    if (isOtherMonth) {
        dayElement.classList.add('other-month');
    }
    
    // Adjust month and year for overflow
    let adjustedMonth = month;
    let adjustedYear = year;
    if (month < 0) {
        adjustedMonth = 11;
        adjustedYear--;
    } else if (month > 11) {
        adjustedMonth = 0;
        adjustedYear++;
    }
    
    const dateString = `${adjustedYear}-${String(adjustedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // Check if today
    const today = new Date();
    if (day === today.getDate() && adjustedMonth === today.getMonth() && adjustedYear === today.getFullYear()) {
        dayElement.classList.add('today');
    }
    
    // Check for events
    const dayEvents = getEventsForDate(dateString);
    if (dayEvents.length > 0) {
        dayElement.classList.add('has-event');
    }
    
    // Create day content
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayElement.appendChild(dayNumber);
    
    if (dayEvents.length > 0 && !isOtherMonth) {
        const eventCount = document.createElement('div');
        eventCount.className = 'day-event-count';
        eventCount.textContent = `${dayEvents.length} kegiatan`;
        dayElement.appendChild(eventCount);
    }
    
    // Add click event
    if (!isOtherMonth) {
        dayElement.addEventListener('click', () => {
            showDayEvents(dateString, dayEvents);
        });
    }
    
    return dayElement;
}

function getEventsForDate(dateString) {
    return academicEvents.filter(event => {
        if (event.endDate) {
            return dateString >= event.date && dateString <= event.endDate;
        }
        return event.date === dateString;
    });
}

function showDayEvents(dateString, events) {
    if (events.length === 0) return;
    
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    
    const date = new Date(dateString);
    const dateStr = date.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    const header = document.createElement('h4');
    header.textContent = `Kegiatan pada ${dateStr}`;
    header.style.marginBottom = '20px';
    header.style.color = 'var(--primary-color)';
    eventsList.appendChild(header);
    
    events.forEach(event => {
        const eventItem = createEventElement(event);
        eventsList.appendChild(eventItem);
    });
    
    // Scroll to events list
    eventsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderEventsList() {
    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';
    
    // Filter events for current month
    const monthEvents = academicEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    if (monthEvents.length === 0) {
        eventsList.innerHTML = '<p style="text-align: center; color: var(--text-color);">Tidak ada kegiatan pada bulan ini.</p>';
        return;
    }
    
    monthEvents.forEach(event => {
        const eventItem = createEventElement(event);
        eventsList.appendChild(eventItem);
    });
}

function createEventElement(event) {
    const eventItem = document.createElement('div');
    eventItem.className = `event-item ${event.category}`;
    
    const eventDate = document.createElement('div');
    eventDate.className = 'event-date';
    
    const startDate = new Date(event.date);
    let dateText = startDate.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    if (event.endDate) {
        const endDate = new Date(event.endDate);
        dateText += ` - ${endDate.toLocaleDateString('id-ID', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })}`;
    }
    
    eventDate.innerHTML = `<i class="fas fa-calendar"></i> ${dateText}`;
    
    const eventTitle = document.createElement('div');
    eventTitle.className = 'event-title';
    eventTitle.textContent = event.title;
    
    const eventDescription = document.createElement('div');
    eventDescription.className = 'event-description';
    eventDescription.textContent = event.description;
    
    const eventCategory = document.createElement('span');
    eventCategory.className = `event-category ${event.category}`;
    
    const categoryNames = {
        'holiday': 'Libur/Hari Besar',
        'exam': 'Ujian/Penilaian',
        'activity': 'Kegiatan Sekolah'
    };
    eventCategory.textContent = categoryNames[event.category];
    
    eventItem.appendChild(eventDate);
    eventItem.appendChild(eventTitle);
    eventItem.appendChild(eventDescription);
    eventItem.appendChild(eventCategory);
    
    return eventItem;
}

console.log('Academic Calendar loaded successfully');
