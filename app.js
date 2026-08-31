const indiaStatesDistricts = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
    "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang"],
    "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon"],
    "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    "Goa": ["North Goa", "South Goa"],
    "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum"],
    "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"],
    "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "SAS Nagar", "Tarn Taran"],
    "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"],
    "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
};

// Application State
const state = {
    currentView: 'dashboard',
    registrationStep: 1, // 1: Login, 2: Phone, 3: Username, 4: Land Details, 5: Location
    user: JSON.parse(localStorage.getItem('agri_user')) || null,
    isSellerMode: localStorage.getItem('agri_seller_mode') === 'true' || false,
    sellerProducts: JSON.parse(localStorage.getItem('agri_seller_products')) || []
};

window.populateStates = function() {
    const stateSelect = document.getElementById('reg-state');
    if (!stateSelect) return;
    
    // Clear and set default
    stateSelect.innerHTML = '<option value="">Select State</option>';
    
    // Add states
    for (const st in indiaStatesDistricts) {
        let opt = document.createElement('option');
        opt.value = st;
        opt.textContent = st;
        stateSelect.appendChild(opt);
    }
};

window.updateDistricts = function() {
    const stateSelect = document.getElementById('reg-state');
    const districtSelect = document.getElementById('reg-district');
    if (!stateSelect || !districtSelect) return;
    
    const selectedState = stateSelect.value;
    // Clear and set default
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (selectedState && indiaStatesDistricts[selectedState]) {
        districtSelect.disabled = false;
        const districts = indiaStatesDistricts[selectedState];
        districts.forEach(dist => {
            let opt = document.createElement('option');
            opt.value = dist;
            opt.textContent = dist;
            districtSelect.appendChild(opt);
        });
    } else {
        districtSelect.disabled = true;
    }
};


// Simplified Registration Logic

function validateStep1AndNext() {
    const name = document.getElementById('reg-name')?.value;
    const email = document.getElementById('reg-email')?.value;
    const phone = document.getElementById('reg-phone')?.value;
    const password = document.getElementById('reg-password')?.value;
    const stateLoc = document.getElementById('reg-state')?.value;
    const district = document.getElementById('reg-district')?.value;

    if (name && email && phone && password && stateLoc && district) {
        state.tempUser = { name, email, phone, password, stateLoc, district };
        nextRegStep();
    } else {
        alert("Please fill all details to proceed.");
    }
}

function validateStep2AndComplete() {
    const areaSoil = document.getElementById('reg-area-soil')?.value;
    const landSoil = document.getElementById('reg-land-soil')?.value;
    const acres = document.getElementById('reg-acres')?.value;

    if (areaSoil && landSoil && acres) {
        state.tempUser = { ...state.tempUser, areaSoil, landSoil, acres };
        completeRegistration();
    } else {
        alert("Please fill all details to proceed.");
    }
}

function nextRegStep() {
    state.registrationStep++;
    renderRegistration();
}

function showSignUp() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if(email && password) {
        state.user = { email: email, name: 'Farmer' };
        localStorage.setItem('agri_user', JSON.stringify(state.user));
        navigateTo('dashboard');
    } else {
        alert("Please enter both email and password.");
    }
}


function completeRegistration() {
    state.user = state.tempUser || { name: 'Farmer' };
    localStorage.setItem('agri_user', JSON.stringify(state.user));
    navigateTo('dashboard');
}

function renderRegistration() {
    const steps = [
        `
        <div class="auth-card">
            <h1>Welcome to AgriNova360°</h1>
            <p>Your AI farming partner</p>
            
            <div id="login-section">
                <h3 style="margin-bottom: 15px;">Login</h3>
                <input type="email" id="login-email" placeholder="Email ID" style="margin-bottom: 10px;">
                <input type="password" id="login-password" placeholder="Password" style="margin-bottom: 15px;">
                <button class="primary-btn" onclick="loginUser()">Login</button>
                <p style="margin-top: 15px; font-size: 0.9rem;">New User? <a href="#" onclick="showSignUp(); return false;" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Create an account</a></p>
            </div>

            <div id="signup-section" style="display: none;">
                <h3 style="margin-bottom: 15px;">Create Account</h3>
                <input type="text" id="reg-name" placeholder="Full Name" style="margin-bottom: 10px;">
                <input type="email" id="reg-email" placeholder="Email ID" style="margin-bottom: 10px;">
                <input type="tel" id="reg-phone" placeholder="Mobile Number" style="margin-bottom: 10px;">
                <input type="password" id="reg-password" placeholder="Create Password" style="margin-bottom: 10px;">
                <select id="reg-state" onchange="updateDistricts()" style="margin-bottom: 10px; width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 0.95rem;">
                    <option value="">Select State</option>
                </select>
                <select id="reg-district" disabled style="margin-bottom: 15px; width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 0.95rem;">
                    <option value="">Select District</option>
                </select>
                <button class="primary-btn" onclick="validateStep1AndNext()">Next</button>
                <p style="margin-top: 15px; font-size: 0.9rem;">Already have an account? <a href="#" onclick="showLogin(); return false;" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Login</a></p>
            </div>
        </div>
        `,
        `
        <div class="auth-card">
            <h3 style="margin-bottom: 15px;">Farm Details</h3>
            <select id="reg-area-soil" style="margin-bottom: 10px; width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 0.95rem;">
                <option value="">Types of soil in your area</option>
                <option value="Alluvial Soil">Alluvial Soil</option>
                <option value="Black Soil">Black Soil</option>
                <option value="Red and Yellow Soil">Red and Yellow Soil</option>
                <option value="Laterite Soil">Laterite Soil</option>
                <option value="Arid/Desert Soil">Arid/Desert Soil</option>
                <option value="Forest/Mountain Soil">Forest/Mountain Soil</option>
                <option value="Saline/Alkaline Soil">Saline/Alkaline Soil</option>
                <option value="Peaty/Marshy Soil">Peaty/Marshy Soil</option>
            </select>
            <select id="reg-land-soil" style="margin-bottom: 10px; width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Outfit', sans-serif; font-size: 0.95rem;">
                <option value="">Types of soil in your land</option>
                <option value="Alluvial Soil">Alluvial Soil</option>
                <option value="Black Soil">Black Soil</option>
                <option value="Red and Yellow Soil">Red and Yellow Soil</option>
                <option value="Laterite Soil">Laterite Soil</option>
                <option value="Arid/Desert Soil">Arid/Desert Soil</option>
                <option value="Forest/Mountain Soil">Forest/Mountain Soil</option>
                <option value="Saline/Alkaline Soil">Saline/Alkaline Soil</option>
                <option value="Peaty/Marshy Soil">Peaty/Marshy Soil</option>
            </select>
            <input type="number" id="reg-acres" placeholder="How many acres you are having?" style="margin-bottom: 15px;">
            <button class="primary-btn" onclick="validateStep2AndComplete()">Complete & Start</button>
        </div>
        `
    ];

    document.getElementById('main-content').innerHTML = `
        <section class="auth-view">
            ${steps[state.registrationStep - 1]}
            <div class="reg-progress">
                <div class="progress-dot ${state.registrationStep >= 1 ? 'active' : ''}"></div>
                <div class="progress-dot ${state.registrationStep >= 2 ? 'active' : ''}"></div>
            </div>
        </section>
    `;
    
    if (state.registrationStep === 1) {
        populateStates();
    }
}

// View Definitions
const views = {
    'dashboard': `
        <section class="dashboard">
            <div class="card weather-widget" onclick="navigateTo('weather-details')" style="cursor: pointer;">
                <div class="weather-main">
                    <div class="temp-info">
                        <h2>28°C</h2>
                        <p>Partly Cloudy</p>
                    </div>
                    <i class="fas fa-cloud-sun weather-icon"></i>
                </div>
                <div class="weather-stats">
                    <span><i class="fas fa-tint"></i> 65% Humidity</span>
                    <span><i class="fas fa-cloud-rain"></i> 10% Rain</span>
                </div>
            </div>
            <div class="feature-grid">
                <div class="feature-card" onclick="navigateTo('disease-detection')">
                    <div class="icon-box disease"><i class="fas fa-vial"></i></div>
                    <h3>Disease Detector</h3>
                </div>
                <div class="feature-card" onclick="navigateTo('market')">
                    <div class="icon-box market"><i class="fas fa-chart-line"></i></div>
                    <h3>Market Forecast</h3>
                </div>
                <div class="feature-card" onclick="navigateTo('soil-test')">
                    <div class="icon-box soil"><i class="fas fa-flask"></i></div>
                    <h3>Soil Testing</h3>
                </div>
                <div class="feature-card" onclick="navigateTo('reminders')">
                    <div class="icon-box reminders"><i class="fas fa-bell"></i></div>
                    <h3>Smart Reminders</h3>
                </div>
                <div class="feature-card" onclick="navigateTo('video-center')">
                    <div class="icon-box" style="background: rgba(155, 89, 182, 0.1); color: #9b59b2"><i class="fas fa-play-circle"></i></div>
                    <h3>Agri Media</h3>
                </div>
                <div class="feature-card" onclick="navigateTo('iot-devices')">
                    <div class="icon-box" style="background: rgba(52, 152, 219, 0.1); color: #3498db"><i class="fas fa-microchip"></i></div>
                    <h3>IoT Devices</h3>
                </div>

            </div>

            <!-- Tools Section -->
            <div class="section-title" style="margin-top: 25px; margin-bottom: 15px;">
                <h3 style="font-size: 1.2rem; font-weight: 700; color: #1e293b;">Tools</h3>
            </div>
            <div class="tools-grid">
                <div class="tool-card" onclick="navigateTo('fertilizer-calc')">
                    <div class="tool-icon"><i class="fas fa-leaf"></i></div>
                    <p>Fertilizer<br>calculator</p>
                </div>
                <div class="tool-card" onclick="navigateTo('pesticide-calc')">
                    <span class="badge-new">New</span>
                    <div class="tool-icon"><i class="fas fa-spray-can"></i></div>
                    <p>Pesticide<br>calculator</p>
                </div>
                <div class="tool-card" onclick="navigateTo('farming-calc')">
                    <span class="badge-new">New</span>
                    <div class="tool-icon"><i class="fas fa-calculator"></i></div>
                    <p>Farming<br>calculator</p>
                </div>
            </div>

            <div class="section-title" style="margin-top: 25px; margin-bottom: 15px;">
                <h3 style="font-size: 1.2rem; font-weight: 700; color: #1e293b;">Library</h3>
            </div>
            <div class="library-grid">
                <div class="lib-card" onclick="navigateTo('library', 'Crops')">
                    <div class="lib-icon"><i class="fas fa-leaf"></i></div>
                    <p>Crops<br>Library</p>
                </div>
                <div class="lib-card" onclick="navigateTo('library', 'Pests & Diseases')">
                    <div class="lib-icon"><i class="fas fa-bug"></i></div>
                    <p>Pests &<br>Diseases</p>
                </div>
                <div class="lib-card" onclick="navigateTo('library', 'Cultivation Tips')">
                    <div class="lib-icon"><i class="fas fa-lightbulb"></i></div>
                    <p>Cultivation<br>Tips</p>
                </div>
                <div class="lib-card" onclick="navigateTo('library', 'Soil')">
                    <div class="lib-icon"><i class="fas fa-flask-vial"></i></div>
                    <p>Soil<br>Library</p>
                </div>
            </div>

            <!-- Ads Slideshow Section -->
            <div class="ads-container">
                <div class="ads-wrapper" id="ads-wrapper">
                    <div class="ad-slide" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80')">
                        <div class="ad-content">
                            <span>Special Offer</span>
                            <h4>Get 20% Off on Organic Seeds</h4>
                            <button class="ad-btn">Shop Now</button>
                        </div>
                    </div>
                    <div class="ad-slide" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80')">
                        <div class="ad-content">
                            <span>Soil Expert</span>
                            <h4>Free Soil Testing This Week</h4>
                            <button class="ad-btn">Book Now</button>
                        </div>
                    </div>
                    <div class="ad-slide" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=600&q=80')">
                        <div class="ad-content">
                            <span>New Tech</span>
                            <h4>Smart Irrigation System V2</h4>
                            <button class="ad-btn">Learn More</button>
                        </div>
                    </div>
                </div>
                <div class="ads-dots" id="ads-dots">
                    <span class="ad-dot active"></span>
                    <span class="ad-dot"></span>
                    <span class="ad-dot"></span>
                </div>
            </div>

            <!-- Governmental Schemes Section -->
            <div class="section-title" style="margin-top: 25px; margin-bottom: 15px;">
                <h3 style="font-size: 1.2rem; font-weight: 700; color: #1e293b;">Governmental Schemes</h3>
            </div>
            <div class="govt-scheme-banner" onclick="navigateTo('govt-schemes')">
                <div class="govt-banner-icon"><i class="fas fa-landmark"></i></div>
                <div class="govt-banner-text">
                    <h4>Explore Government Schemes</h4>
                    <p>Select your state to view applicable schemes</p>
                </div>
                <i class="fas fa-chevron-right govt-arrow"></i>
            </div>
        </section>
    `,
    'profile': `
        <section class="profile-view" style="padding: 20px;">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>My Profile</h2>
            </div>
            <div class="card" style="text-align: center; margin-top: 20px;">
                <i class="fas fa-user-circle" style="font-size: 5rem; color: var(--primary-color); margin-bottom: 15px;"></i>
                <h3 id="profile-name">Farmer Name</h3>
                <p id="profile-email" style="color: var(--text-muted); margin-bottom: 20px;">Email details here</p>
                <div style="text-align: left;">
                    <p><strong>Mobile:</strong> <span id="profile-phone">-</span></p>
                    <p><strong>Location:</strong> <span id="profile-loc">-</span></p>
                    <p><strong>Land Acreage:</strong> <span id="profile-acres">-</span></p>
                </div>
                <button class="primary-btn" style="width: 100%; margin-top: 20px; border-radius: 10px;" onclick="logOut()">Log Out</button>
            </div>
        </section>
    `,
    'settings': `
        <section class="settings-view" style="padding: 20px;">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Settings</h2>
            </div>
            <div class="card" style="margin-top: 20px;">
                <div style="padding: 15px 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                    <span>Notifications</span>
                    <input type="checkbox" checked>
                </div>
                <div style="padding: 15px 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                    <span>Location Services</span>
                    <input type="checkbox" checked>
                </div>
                 <div style="padding: 15px 0; display: flex; justify-content: space-between;">
                    <span>Dark Mode (Coming Soon)</span>
                    <input type="checkbox" disabled>
                </div>
            </div>
        </section>
    `,
    'quick-start': `
        <section class="quick-start-view" style="padding: 20px;">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Quick Start Guide</h2>
            </div>
            <div class="card" style="margin-top: 20px;">
                <h3 style="margin-bottom: 10px;">Welcome to AgriNova360!</h3>
                <p style="margin-bottom: 15px;">Here is how you can use the app:</p>
                <ul style="padding-left: 20px; color: var(--text-dark);">
                    <li style="margin-bottom: 10px;">Check <b>Smart Reminders</b> to stay updated on farm tasks.</li>
                    <li style="margin-bottom: 10px;">Use the <b>Disease Detector</b> by snapping a photo of your crop.</li>
                    <li style="margin-bottom: 10px;">Visit the <b>Market Forecast</b> for up-to-date prices.</li>
                    <li style="margin-bottom: 10px;">Explore the <b>Agri Shop</b> to buy seeds, fertilizers, and tools.</li>
                </ul>
                <button class="primary-btn" style="width: 100%; margin-top: 20px; border-radius: 10px;" onclick="navigateTo('dashboard')">Got it!</button>
            </div>
        </section>
    `,
    'govt-schemes': `
        <section class="govt-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Govt. Schemes</h2>
            </div>
            <p style="font-size:0.9rem; color:#64748b; margin-bottom:18px;">Select your state to view applicable government schemes for farmers.</p>

            <div class="states-grid">
                <div class="state-card" onclick="showStateSchemes('Andhra Pradesh')"><i class="fas fa-map-pin"></i><span>Andhra Pradesh</span></div>
                <div class="state-card" onclick="showStateSchemes('Arunachal Pradesh')"><i class="fas fa-map-pin"></i><span>Arunachal Pradesh</span></div>
                <div class="state-card" onclick="showStateSchemes('Assam')"><i class="fas fa-map-pin"></i><span>Assam</span></div>
                <div class="state-card" onclick="showStateSchemes('Bihar')"><i class="fas fa-map-pin"></i><span>Bihar</span></div>
                <div class="state-card" onclick="showStateSchemes('Chhattisgarh')"><i class="fas fa-map-pin"></i><span>Chhattisgarh</span></div>
                <div class="state-card" onclick="showStateSchemes('Goa')"><i class="fas fa-map-pin"></i><span>Goa</span></div>
                <div class="state-card" onclick="showStateSchemes('Gujarat')"><i class="fas fa-map-pin"></i><span>Gujarat</span></div>
                <div class="state-card" onclick="showStateSchemes('Haryana')"><i class="fas fa-map-pin"></i><span>Haryana</span></div>
                <div class="state-card" onclick="showStateSchemes('Himachal Pradesh')"><i class="fas fa-map-pin"></i><span>Himachal Pradesh</span></div>
                <div class="state-card" onclick="showStateSchemes('Jharkhand')"><i class="fas fa-map-pin"></i><span>Jharkhand</span></div>
                <div class="state-card" onclick="showStateSchemes('Karnataka')"><i class="fas fa-map-pin"></i><span>Karnataka</span></div>
                <div class="state-card" onclick="showStateSchemes('Kerala')"><i class="fas fa-map-pin"></i><span>Kerala</span></div>
                <div class="state-card" onclick="showStateSchemes('Madhya Pradesh')"><i class="fas fa-map-pin"></i><span>Madhya Pradesh</span></div>
                <div class="state-card" onclick="showStateSchemes('Maharashtra')"><i class="fas fa-map-pin"></i><span>Maharashtra</span></div>
                <div class="state-card" onclick="showStateSchemes('Manipur')"><i class="fas fa-map-pin"></i><span>Manipur</span></div>
                <div class="state-card" onclick="showStateSchemes('Meghalaya')"><i class="fas fa-map-pin"></i><span>Meghalaya</span></div>
                <div class="state-card" onclick="showStateSchemes('Mizoram')"><i class="fas fa-map-pin"></i><span>Mizoram</span></div>
                <div class="state-card" onclick="showStateSchemes('Nagaland')"><i class="fas fa-map-pin"></i><span>Nagaland</span></div>
                <div class="state-card" onclick="showStateSchemes('Odisha')"><i class="fas fa-map-pin"></i><span>Odisha</span></div>
                <div class="state-card" onclick="showStateSchemes('Punjab')"><i class="fas fa-map-pin"></i><span>Punjab</span></div>
                <div class="state-card" onclick="showStateSchemes('Rajasthan')"><i class="fas fa-map-pin"></i><span>Rajasthan</span></div>
                <div class="state-card" onclick="showStateSchemes('Sikkim')"><i class="fas fa-map-pin"></i><span>Sikkim</span></div>
                <div class="state-card" onclick="showStateSchemes('Tamil Nadu')"><i class="fas fa-map-pin"></i><span>Tamil Nadu</span></div>
                <div class="state-card" onclick="showStateSchemes('Telangana')"><i class="fas fa-map-pin"></i><span>Telangana</span></div>
                <div class="state-card" onclick="showStateSchemes('Tripura')"><i class="fas fa-map-pin"></i><span>Tripura</span></div>
                <div class="state-card" onclick="showStateSchemes('Uttar Pradesh')"><i class="fas fa-map-pin"></i><span>Uttar Pradesh</span></div>
                <div class="state-card" onclick="showStateSchemes('Uttarakhand')"><i class="fas fa-map-pin"></i><span>Uttarakhand</span></div>
                <div class="state-card" onclick="showStateSchemes('West Bengal')"><i class="fas fa-map-pin"></i><span>West Bengal</span></div>
                <div class="state-card" onclick="showStateSchemes('Delhi')"><i class="fas fa-map-pin"></i><span>Delhi (UT)</span></div>
            </div>

            <!-- Schemes Result Panel -->
            <div id="state-schemes-result" style="margin-top: 20px;"></div>
        </section>
    `,
    'iot-devices': `
        <section class="iot-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>IoT Devices</h2>
            </div>
            <p style="font-size:0.9rem;color:#64748b;margin-bottom:18px;">Monitor your farm sensors and connected devices in real-time.</p>

            <!-- Device Status Banner -->
            <div class="iot-status-banner">
                <div class="iot-dot active"></div>
                <span>3 Devices Connected</span>
                <button class="iot-add-btn" onclick="alert('Scanning for new devices...')"><i class="fas fa-plus"></i> Add Device</button>
            </div>

            <!-- Sensor Cards -->
            <div class="iot-grid">
                <div class="iot-card">
                    <div class="iot-icon" style="background:rgba(52,152,219,0.1);color:#3498db"><i class="fas fa-droplet"></i></div>
                    <div class="iot-info">
                        <p class="iot-label">Soil Moisture</p>
                        <h3 class="iot-value">72<span>%</span></h3>
                        <div class="iot-bar"><div class="iot-fill" style="width:72%;background:#3498db"></div></div>
                    </div>
                    <span class="iot-status ok">Normal</span>
                </div>

                <div class="iot-card">
                    <div class="iot-icon" style="background:rgba(231,76,60,0.1);color:#e74c3c"><i class="fas fa-temperature-high"></i></div>
                    <div class="iot-info">
                        <p class="iot-label">Temperature</p>
                        <h3 class="iot-value">34<span>°C</span></h3>
                        <div class="iot-bar"><div class="iot-fill" style="width:68%;background:#e74c3c"></div></div>
                    </div>
                    <span class="iot-status warn">High</span>
                </div>

                <div class="iot-card">
                    <div class="iot-icon" style="background:rgba(39,174,96,0.1);color:#27ae60"><i class="fas fa-wind"></i></div>
                    <div class="iot-info">
                        <p class="iot-label">Humidity</p>
                        <h3 class="iot-value">58<span>%</span></h3>
                        <div class="iot-bar"><div class="iot-fill" style="width:58%;background:#27ae60"></div></div>
                    </div>
                    <span class="iot-status ok">Normal</span>
                </div>

                <div class="iot-card">
                    <div class="iot-icon" style="background:rgba(243,156,18,0.1);color:#f39c12"><i class="fas fa-flask"></i></div>
                    <div class="iot-info">
                        <p class="iot-label">NPK Level</p>
                        <h3 class="iot-value">N:40 <span style="font-size:0.75rem;">P:25 K:35</span></h3>
                        <div class="iot-bar"><div class="iot-fill" style="width:55%;background:#f39c12"></div></div>
                    </div>
                    <span class="iot-status ok">Balanced</span>
                </div>

                <div class="iot-card">
                    <div class="iot-icon" style="background:rgba(52,152,219,0.15);color:#2980b9"><i class="fas fa-water"></i></div>
                    <div class="iot-info">
                        <p class="iot-label">Water Level</p>
                        <h3 class="iot-value">85<span>%</span></h3>
                        <div class="iot-bar"><div class="iot-fill" style="width:85%;background:#2980b9"></div></div>
                    </div>
                    <span class="iot-status ok">Good</span>
                </div>

                <div class="iot-card offline">
                    <div class="iot-icon" style="background:rgba(148,163,184,0.1);color:#94a3b8"><i class="fas fa-sun"></i></div>
                    <div class="iot-info">
                        <p class="iot-label">Solar Panel</p>
                        <h3 class="iot-value" style="color:#94a3b8">--<span>W</span></h3>
                        <div class="iot-bar"><div class="iot-fill" style="width:0%;background:#94a3b8"></div></div>
                    </div>
                    <span class="iot-status offline-tag">Offline</span>
                </div>
            </div>

            <!-- Last Updated -->
            <p style="text-align:center;font-size:0.8rem;color:#94a3b8;margin-top:20px;"><i class="fas fa-circle-info"></i> Last updated: Just now</p>
        </section>
    `,
    'ai-assistant': `
        <section class="ai-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>AI Assistant</h2>
            </div>
            <div class="chat-container" id="chat-messages">
                <div class="msg bot">Hello Farmer! I am your AI assistant. How can I help you with your crops today?</div>
            </div>
            <div class="suggestion-chips">
                <button onclick="fillAndSend('Best crop for current weather?')">Best crops?</button>
                <button onclick="fillAndSend('How to increase wheat yield?')">Wheat yield?</button>
                <button onclick="fillAndSend('Organic fertilizer for Paddy?')">Organic tips?</button>
            </div>

            <div class="center-camera-container">
                <div class="center-camera-btn" onclick="scanAndAnalyzeAI()">
                    <i class="fas fa-robot"></i>
                </div>
            </div>

            <div class="chat-input-area">
                <input type="text" id="user-input" placeholder="Ask anything...">
                <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </section >
    `,
    'library': `
    <section class="library-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Knowledge Center</h2>
            </div>
            <div class="category-scroll">
                <button class="cat-chip active">All</button>
                <button class="cat-chip">Crops</button>
                <button class="cat-chip">Pests & Diseases</button>
                <button class="cat-chip">Cultivation Tips</button>
                <button class="cat-chip">Soil</button>
            </div>
            <div class="doc-list">
                <div class="card doc-card">
                    <i class="fas fa-file-pdf pdf-icon"></i>
                    <div class="doc-info">
                        <h4>Paddy Cultivation Guide</h4>
                        <p>1.2 MB • PDF</p>
                    </div>
                </div>
                <div class="card doc-card">
                    <i class="fas fa-file-word word-icon"></i>
                    <div class="doc-info">
                        <h4>Organic Fertilizer Recipes</h4>
                        <p>850 KB • DOCX</p>
                    </div>
                </div>
            </div>
        </section >
    `,
    'quiz': `
    <section class="quiz-view">
            <div class="view-header" style="margin-bottom: 20px;">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Farming Quiz</h2>
            </div>
            
            <div class="card" style="margin-bottom: 20px; text-align: center; padding: 15px; border-radius: 15px;">
                <h3 style="color: var(--text-dark); margin-bottom: 5px; font-size: 1rem;">Past Score</h3>
                <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);" id="past-score-display">-</div>
            </div>

            <div class="card quiz-card" id="quiz-container">
                <div class="quiz-progress" id="quiz-progress" style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">Question 1 of 5</div>
                <h3 class="quiz-q" id="quiz-question" style="margin-bottom:15px; font-weight:600; font-size:1.1rem;">Loading...</h3>
                <div class="quiz-options" id="quiz-options" style="display:flex; flex-direction:column; gap:10px;">
                    <!-- Options injected here via JS -->
                </div>
                
                <button id="next-q-btn" class="primary-btn" style="display:none; margin-top:20px; width:100%; border-radius:10px;" onclick="nextQuizQuestion()">Next Question</button>
            </div>
        </section>
    `,
    'market': `
    < section class="market-view" >
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Market Forecast</h2>
            </div>
            <div class="card market-card">
                <div class="market-header">
                    <div>
                        <h3>Paddy (Basmati)</h3>
                        <small>Current: ₹3,250/qtl</small>
                    </div>
                    <span class="price-up"><i class="fas fa-chevron-up"></i> +5.2%</span>
                </div>
                <div class="chart-container-market">
                    <div class="chart-bar" style="height: 40%"><span>Jan</span></div>
                    <div class="chart-bar" style="height: 60%"><span>Feb</span></div>
                    <div class="chart-bar current" style="height: 85%"><span>Mar</span></div>
                    <div class="chart-bar forecast" style="height: 95%"><span>Apr</span></div>
                </div>
                <div class="market-prediction">
                    <p><i class="fas fa-lightbulb"></i> AI Prediction: <strong>Prices likely to peak in 2 weeks.</strong></p>
                    <button class="secondary-btn" style="margin-top:10px">Sell Decision: HOLD</button>
                </div>
            </div>
        </section >
    `,
    'climate': `
    < section class="climate-view" >
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Climate Forecast</h2>
            </div>
            <div class="card climate-main">
                <div class="forecast-7day">
                    <div class="day-item active"><span>Today</span><i class="fas fa-sun"></i><strong>32°</strong></div>
                    <div class="day-item"><span>Wed</span><i class="fas fa-cloud-sun"></i><strong>30°</strong></div>
                    <div class="day-item"><span>Thu</span><i class="fas fa-cloud-showers-heavy"></i><strong>26°</strong></div>
                    <div class="day-item"><span>Fri</span><i class="fas fa-cloud-sun"></i><strong>29°</strong></div>
                </div>
                <div class="climate-chart">
                    <div class="chart-line-bg">
                        <svg viewBox="0 0 100 40" class="sparkline">
                            <path d="M0,30 Q25,10 50,25 T100,5" fill="none" stroke="var(--primary-color)" stroke-width="2" />
                        </svg>
                    </div>
                    <div class="chart-labels"><span>Temp</span><span>Rain</span><span>Humidity</span></div>
                </div>
            </div>
            <div class="card advice-card">
                <h4><i class="fas fa-seedling"></i> Crop Suggestion</h4>
                <p>Based on high humidity and upcoming rain, this is the best time for <strong>Paddy transplantation</strong>.</p>
            </div>
        </section >
    `,
    'video-center': `
    < section class="video-center" >
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Agri Media</h2>
            </div>
            
            <div class="search-bar-inline" style="margin-bottom:20px">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search videos, tutorials...">
            </div>

            <div class="video-tabs">
                <button class="v-tab active">Reels</button>
                <button class="v-tab">Long Videos</button>
            </div>

            <!--Integrated Video Compose Strip-- >
            <div class="compose-strip">
                <div class="compose-item" onclick="alert('Recording started...')">
                    <div class="comp-icon" style="background: rgba(231, 76, 60, 0.1); color: #e74c3c;">
                        <i class="fas fa-video"></i>
                    </div>
                    <span>Record</span>
                </div>
                <div class="compose-item" onclick="alert('Opening gallery...')">
                    <div class="comp-icon" style="background: rgba(52, 152, 219, 0.1); color: #3498db;">
                        <i class="fas fa-upload"></i>
                    </div>
                    <span>Upload</span>
                </div>
                <div class="compose-item" onclick="alert('Preparing live stream...')">
                    <div class="comp-icon" style="background: rgba(155, 89, 182, 0.1); color: #9b59b2;">
                        <i class="fas fa-broadcast-tower"></i>
                    </div>
                    <span>Go Live</span>
                </div>
            </div>

            <div class="video-feed">

                <!-- Demo Video 1: Organic Farming -->
                <div class="card video-card">
                    <div class="yt-embed-wrap">
                        <iframe src="https://www.youtube.com/embed/sVYFQBpVHQw" title="Organic Farming Tips" frameborder="0" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="video-info">
                        <h4>Organic Farming – Tips & Techniques</h4>
                        <p>Krishi TV • Demo</p>
                        <div class="video-stats">
                            <span><i class="far fa-eye"></i> 120k</span>
                            <span><i class="far fa-heart"></i> 8.4k</span>
                            <span><i class="far fa-comment"></i> 320</span>
                        </div>
                    </div>
                </div>

                <!-- Demo Video 2: Paddy Farming -->
                <div class="card video-card">
                    <div class="yt-embed-wrap">
                        <iframe src="https://www.youtube.com/embed/3YHKGHqUgWU" title="Paddy Farming Guide" frameborder="0" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="video-info">
                        <h4>Smart Paddy Farming – Full Guide</h4>
                        <p>Agri Academy • Demo</p>
                        <div class="video-stats">
                            <span><i class="far fa-eye"></i> 85k</span>
                            <span><i class="far fa-heart"></i> 5.1k</span>
                            <span><i class="far fa-comment"></i> 210</span>
                        </div>
                    </div>
                </div>

                <!-- Demo Video 3: Soil Health -->
                <div class="card video-card">
                    <div class="yt-embed-wrap">
                        <iframe src="https://www.youtube.com/embed/rXIkh0aVHqo" title="Soil Health Tips" frameborder="0" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="video-info">
                        <h4>Complete Soil Health Management</h4>
                        <p>Farmer Academy • Demo</p>
                        <div class="video-stats">
                            <span><i class="far fa-eye"></i> 45k</span>
                            <span><i class="far fa-heart"></i> 3.2k</span>
                            <span><i class="far fa-comment"></i> 180</span>
                        </div>
                    </div>
                </div>

                <!-- Demo Video 4: Fertilizer Tips -->
                <div class="card video-card">
                    <div class="yt-embed-wrap">
                        <iframe src="https://www.youtube.com/embed/8PmM6SUn7Es" title="Fertilizer Application" frameborder="0" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="video-info">
                        <h4>How to Apply Fertilizers Correctly</h4>
                        <p>Krishi Tips • Demo</p>
                        <div class="video-stats">
                            <span><i class="far fa-eye"></i> 32k</span>
                            <span><i class="far fa-heart"></i> 2.1k</span>
                            <span><i class="far fa-comment"></i> 95</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    `,
    'community': `
        <section class="community-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Farmer Community</h2>
            </div>

            <!-- Ads Slideshow Section -->
            <div class="ads-container">
                <div class="ads-wrapper" id="ads-wrapper">
                    <div class="ad-slide" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80')">
                        <div class="ad-content">
                            <span>Special Offer</span>
                            <h4>Get 20% Off on Organic Seeds</h4>
                            <button class="ad-btn">Shop Now</button>
                        </div>
                    </div>
                    <div class="ad-slide" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80')">
                        <div class="ad-content">
                            <span>Soil Expert</span>
                            <h4>Free Soil Testing This Week</h4>
                            <button class="ad-btn">Book Now</button>
                        </div>
                    </div>
                    <div class="ad-slide" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=600&q=80')">
                        <div class="ad-content">
                            <span>New Tech</span>
                            <h4>Smart Irrigation System V2</h4>
                            <button class="ad-btn">Learn More</button>
                        </div>
                    </div>
                </div>
                <div class="ads-dots" id="ads-dots">
                    <span class="ad-dot active"></span>
                    <span class="ad-dot"></span>
                    <span class="ad-dot"></span>
                </div>
            </div>

            <div class="search-bar-inline" style="margin-bottom:20px">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Find nearby farmers...">
            </div>
            <div class="member-list">
                <div class="card member-card">
                    <img src="https://i.pravatar.cc/150?u=f1" class="member-avatar">
                    <div class="member-info">
                        <h4>Rajesh Kumar</h4>
                        <p>Focus: Paddy & Wheat • <span class="member-location">2.5km away</span></p>
                    </div>
                    <button class="chat-btn-sm"><i class="fas fa-comment"></i></button>
                </div>
                <div class="card member-card">
                    <img src="https://i.pravatar.cc/150?u=f2" class="member-avatar">
                    <div class="member-info">
                        <h4>Suresh Patel</h4>
                        <p>Focus: Cotton & Maize • <span class="member-location">4.1km away</span></p>
                    </div>
                    <button class="chat-btn-sm"><i class="fas fa-comment"></i></button>
                </div>
                <div class="card member-card">
                    <img src="https://i.pravatar.cc/150?u=f3" class="member-avatar">
                    <div class="member-info">
                        <h4>Anita Devi</h4>
                        <p>Focus: Organic Vegetable • <span class="member-location">1.8km away</span></p>
                    </div>
                    <button class="chat-btn-sm"><i class="fas fa-comment"></i></button>
                </div>
                <div class="card member-card">
                    <img src="https://i.pravatar.cc/150?u=f4" class="member-avatar">
                    <div class="member-info">
                        <h4>Vikram Singh</h4>
                        <p>Focus: Sugarcane • <span class="member-location">5.2km away</span></p>
                    </div>
                    <button class="chat-btn-sm"><i class="fas fa-comment"></i></button>
                </div>
            </div>
        </section>
    `,
    'reels': `
        <section class="reels-player">
            <button class="close-reels" onclick="navigateTo('dashboard')"><i class="fas fa-times"></i></button>
            <div class="reel-video">
                <div class="reel-overlay">
                    <div class="reel-user">
                        <img src="https://i.pravatar.cc/150?u=farmer1" alt="user">
                        <span>@EcoFarmer</span>
                        <button class="follow-btn">Follow</button>
                    </div>
                    <p class="reel-desc">How to prepare organic pesticide in 5 minutes! #OrganicFarming #AgriTips</p>
                    <div class="reel-actions">
                        <div class="action-btn"><i class="fas fa-heart"></i><span>1.2k</span></div>
                        <div class="action-btn"><i class="fas fa-comment"></i><span>45</span></div>
                        <div class="action-btn"><i class="fas fa-share"></i><span>20</span></div>
                    </div>
                </div>
            </div>
        </section>
    `,
    'disease-detection': `
        <section class="detection-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Disease Detection</h2>
            </div>
            <div id="upload-zone" style="display: flex; gap: 15px; margin-bottom: 20px;">
                <div class="card upload-card" onclick="simulateUpload()" style="flex: 1; margin: 0; padding: 30px 10px; text-align: center;">
                    <i class="fas fa-camera" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                    <p style="font-weight: 600; font-size: 0.95rem; margin-bottom: 5px; color: var(--text-dark);">Camera</p>
                    <small>Take a photo</small>
                </div>
                <div class="card upload-card" onclick="simulateUpload()" style="flex: 1; margin: 0; padding: 30px 10px; text-align: center;">
                    <i class="fas fa-image" style="font-size: 2.5rem; margin-bottom: 10px;"></i>
                    <p style="font-weight: 600; font-size: 0.95rem; margin-bottom: 5px; color: var(--text-dark);">Upload</p>
                    <small>From gallery</small>
                </div>
            </div>
            <div id="detection-result"></div>
        </section>
    `,
    'reminders': `
        <section class="reminders-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Smart Reminders</h2>
            </div>
            <div class="reminder-list">
                <div class="card reminder-item active">
                    <div class="reminder-check" onclick="toggleReminder(this)"><i class="fas fa-circle"></i></div>
                    <div class="reminder-text">
                        <h4>Cultivate Paddy Field</h4>
                        <p>Scheduled for Tomorrow</p>
                    </div>
                    <div class="reminder-img-thumb" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=100&q=80')"></div>
                </div>
                <div class="card reminder-item">
                    <div class="reminder-check" onclick="toggleReminder(this)"><i class="fas fa-circle"></i></div>
                    <div class="reminder-text">
                        <h4>Check Soil Moisture</h4>
                        <p>Scheduled for March 15</p>
                    </div>
                </div>
            </div>
            <button class="primary-btn" style="margin-top:20px" onclick="openAddReminderModal()">+ Add Reminder</button>

            <!-- Add Reminder Modal -->
            <div id="add-reminder-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:2000; align-items:center; justify-content:center;">
                <div style="background:white; width:90%; max-width:400px; border-radius:20px; padding:25px; animation: slideUp 0.3s ease-out; display:flex; flex-direction:column; gap:15px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="margin:0; color:#1e293b;">New Reminder</h3>
                        <i class="fas fa-times" onclick="closeAddReminderModal()" style="font-size:1.2rem; color:#94a3b8; cursor:pointer;"></i>
                    </div>
                    
                    <div>
                        <label style="font-size:0.9rem; font-weight:600; color:#475569; margin-bottom:5px; display:block;">What do you want to add?</label>
                        <input type="text" id="rem-title" placeholder="e.g., Water the plants, Apply fertilizer" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.95rem;">
                    </div>
                    
                    <div style="display:flex; gap:10px;">
                        <div style="flex:1;">
                            <label style="font-size:0.9rem; font-weight:600; color:#475569; margin-bottom:5px; display:block;">Date</label>
                            <input type="date" id="rem-date" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.95rem;">
                        </div>
                        <div style="flex:1;">
                            <label style="font-size:0.9rem; font-weight:600; color:#475569; margin-bottom:5px; display:block;">Time</label>
                            <input type="time" id="rem-time" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.95rem;">
                        </div>
                    </div>
                    
                    <div>
                        <label style="font-size:0.9rem; font-weight:600; color:#475569; margin-bottom:5px; display:block;">How many times to remind?</label>
                        <select id="rem-repeat" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.95rem;">
                            <option value="1">Once</option>
                            <option value="2">Twice a day</option>
                            <option value="3">Three times a day</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                        </select>
                    </div>
                    
                    <button class="primary-btn" style="width:100%; border-radius:12px; margin-top:10px;" onclick="saveReminder()">Save Reminder</button>
                </div>
            </div>
        </section>
    `,
    'experts': `
        <section class="experts-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Agriculture Experts</h2>
            </div>
            <div class="card expert-card">
                <div class="expert-profile">
                    <img src="https://i.pravatar.cc/150?u=expert1" alt="exp">
                    <div class="expert-info">
                        <h4>Dr. Rajesh Kumar</h4>
                        <p>Soil Scientist • 15 Yrs Exp</p>
                        <span class="online-status"><i class="fas fa-circle"></i> Online</span>
                    </div>
                </div>
                <div class="expert-actions">
                    <button class="primary-btn sm"><i class="fas fa-comment"></i> Consultant</button>
                    <button class="secondary-btn sm"><i class="fas fa-video"></i> Video Call</button>
                </div>
            </div>
            <div class="card expert-card">
                <div class="expert-profile">
                    <img src="https://i.pravatar.cc/150?u=expert2" alt="exp">
                    <div class="expert-info">
                        <h4>Dr. Anita Singh</h4>
                        <p>Crop Pathologist • 10 Yrs Exp</p>
                        <span class="online-status offline"><i class="fas fa-circle"></i> Away</span>
                    </div>
                </div>
                <div class="expert-actions">
                    <button class="primary-btn sm"><i class="fas fa-comment"></i> Consultant</button>
                    <button class="secondary-btn sm"><i class="fas fa-calendar"></i> Book Slot</button>
                </div>
            </div>
        </section>
    `,
    'soil-test': `
        <section class="soil-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Soil Testing</h2>
            </div>
            <div class="card soil-main-card">
                <div class="soil-grid">
                    <div class="soil-stat-card">
                        <i class="fas fa-flask" style="color:#9b59b2"></i>
                        <span>pH Level</span>
                        <strong>6.8</strong>
                        <small>Healthy</small>
                    </div>
                    <div class="soil-stat-card">
                        <i class="fas fa-tint" style="color:#3498db"></i>
                        <span>Moisture</span>
                        <strong>45%</strong>
                        <small>Sufficient</small>
                    </div>
                </div>
                <div class="meter-label">Nitrogen (N)</div>
                <div class="soil-meter"><div class="meter-bar" style="width: 70%; background: #27ae60"></div></div>
                <div class="meter-label" style="margin-top:10px">Phosphorus (P)</div>
                <div class="soil-meter"><div class="meter-bar" style="width: 40%; background: #f1c40f"></div></div>
            </div>
            
            <div class="card report-upload" onclick="simulateSoilReport()">
                <i class="fas fa-file-medical"></i>
                <p>Upload Soil Test Report</p>
                <span>AI will analyze and suggest fertilizers</span>
            </div>
            <div id="soil-report-result"></div>
        </section>
    `,
    'shops': `
        <section class="shops-view">
            <div class="view-header" style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <button onclick="navigateTo('dashboard')" class="back-btn" style="margin:0;"><i class="fas fa-arrow-left"></i></button>
                    <h2 style="margin:0;">Agri Shop</h2>
                </div>
                <div class="cart-icon" style="position:relative; cursor:pointer;" onclick="toggleCart()">
                    <i class="fas fa-shopping-basket" style="font-size:1.5rem; color:var(--primary-color);"></i>
                    <span id="cart-count" style="position:absolute; top:-8px; right:-8px; background:#e74c3c; color:white; font-size:0.7rem; font-weight:bold; border-radius:50%; width:18px; height:18px; display:flex; align-items:center; justify-content:center; opacity:0; transition:0.3s;">0</span>
                </div>
            </div>

            <!-- Cart Modal -->
            <div id="cart-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:2000; align-items:flex-end;">
                <div style="background:white; width:100%; max-height:80%; border-radius:25px 25px 0 0; padding:25px; overflow-y:auto; animation: slideUp 0.3s ease-out; display:flex; flex-direction:column;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h3 style="font-weight:800; color:#1e293b;">Your Bucket <i class="fas fa-shopping-basket" style="color:var(--primary-color); margin-left:5px;"></i></h3>
                        <i class="fas fa-times" onclick="toggleCart()" style="font-size:1.2rem; color:#94a3b8; cursor:pointer;"></i>
                    </div>
                    <div id="cart-items-container" style="flex:1; overflow-y:auto; margin-bottom:20px;">
                        <p style="text-align:center; color:#94a3b8; margin-top:20px;">Your bucket is empty</p>
                    </div>
                    <div style="border-top:1px solid #eee; padding-top:15px;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-weight:700; font-size:1.1rem;">
                            <span>Total:</span>
                            <span id="cart-total-price">₹0</span>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:10px;">
                            <button class="primary-btn" style="width:100%; border-radius:12px;" onclick="checkoutCart()">Checkout</button>
                            <button style="width:100%; border-radius:12px; padding:15px; background:#f1f5f9; color:#64748b; font-weight:600; border:none; cursor:pointer;" onclick="toggleCart()">More Shopping</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Buy Now Modal -->
            <div id="buy-now-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:2500; align-items:flex-end;">
                <div style="background:white; width:100%; max-height:90%; border-radius:25px 25px 0 0; overflow-y:auto; animation: slideUp 0.3s ease-out; display:flex; flex-direction:column;">
                    <div style="padding:20px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center;">
                        <h2 style="font-weight:800; color:var(--primary-color); margin:0; font-size:1.5rem; letter-spacing:-0.5px;">AgriNova</h2>
                        <i class="fas fa-times" onclick="closeBuyNow()" style="font-size:1.5rem; color:#94a3b8; cursor:pointer;"></i>
                    </div>
                    <div style="padding:20px;">
                        <h3 style="font-size:1.2rem; margin-bottom:15px; color:#1e293b;">Order Summary</h3>
                        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
                            <div id="buy-now-img" style="width:60px; height:60px; background-size:cover; background-position:center; border-radius:8px;"></div>
                            <div>
                                <h4 id="buy-now-title" style="font-size:1rem; margin-bottom:5px; color:#1e293b;">Product Name</h4>
                                <span id="buy-now-price" style="color:#B12704; font-weight:700; font-size:1.1rem;">₹0</span>
                            </div>
                        </div>
                        
                        <div style="border-top:1px solid #eee; border-bottom:1px solid #eee; padding:15px 0; margin-bottom:20px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                <h4 style="font-size:0.95rem; color:#1e293b; margin:0;">Deliver to:</h4>
                                <span style="color:#007185; font-size:0.85rem; font-weight:600; cursor:pointer;" onclick="toggleAddressEdit()">Change Address</span>
                            </div>
                            
                            <!-- Display Mode -->
                            <div id="buy-now-display-loc" style="display:flex; align-items:center; gap:10px; color:#333; font-size:0.9rem;">
                                <i class="fas fa-map-marker-alt" style="color:#666;"></i>
                                <span id="buy-now-loc">Kallakurichi, Tamil Nadu</span>
                            </div>
                            
                            <!-- Edit Mode -->
                            <div id="buy-now-edit-loc" style="display:none; flex-direction:column; gap:10px; margin-top:10px;">
                                <div style="font-size:0.85rem; font-weight:600; color:#1e293b; margin-bottom:-5px;">Previous Address:</div>
                                <div id="buy-now-prev-loc" style="background:#f8fafc; padding:10px; border-radius:6px; font-size:0.85rem; color:#475569; margin-bottom:5px;">Kallakurichi, Tamil Nadu</div>
                                
                                <input type="text" id="addr-name" placeholder="Full Name" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                <input type="tel" id="addr-mobile" placeholder="Mobile Number" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                <input type="text" id="addr-flat" placeholder="Flat, House no., Building, Company, Apartment" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                <input type="text" id="addr-area" placeholder="Area, Street, Sector, Village" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                <input type="text" id="addr-landmark" placeholder="Landmark" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                <div style="display:flex; gap:10px;">
                                    <input type="text" id="addr-pincode" placeholder="Pincode" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                    <input type="text" id="addr-city" placeholder="Town/City" style="flex:1; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                </div>
                                <input type="text" id="addr-state" placeholder="State" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:8px; font-family:inherit; font-size:0.9rem;">
                                
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button style="flex:1; padding:8px; border-radius:6px; background:#e8f4f8; color:#007185; border:1px solid #007185; font-size:0.85rem; font-weight:600; cursor:pointer;" onclick="getLiveLocation()"><i class="fas fa-crosshairs"></i> Live Location</button>
                                    <button style="flex:1; padding:8px; border-radius:6px; background:#FFD814; color:#0F1111; border:none; font-size:0.85rem; font-weight:600; cursor:pointer;" onclick="saveAddress()">Save Address</button>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom:25px;">
                            <h4 style="font-size:0.95rem; color:#1e293b; margin-bottom:10px;">Payment Method:</h4>
                            <div style="display:flex; flex-direction:column; gap:10px;">
                                <label style="padding:10px; border:1px solid #ddd; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
                                    <input type="radio" name="payment_method" value="cod" checked>
                                    <i class="fas fa-money-bill-wave" style="color:#27ae60; width:20px; text-align:center;"></i>
                                    <span style="font-size:0.9rem; font-weight:500;">Cash on Delivery</span>
                                </label>
                                <label style="padding:10px; border:1px solid #ddd; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
                                    <input type="radio" name="payment_method" value="gpay">
                                    <i class="fab fa-google-pay" style="color:#4285F4; width:20px; text-align:center; font-size:1.2rem;"></i>
                                    <span style="font-size:0.9rem; font-weight:500;">Google Pay (GPay)</span>
                                </label>
                                <label style="padding:10px; border:1px solid #ddd; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
                                    <input type="radio" name="payment_method" value="phonepe">
                                    <i class="fas fa-mobile-alt" style="color:#5f259f; width:20px; text-align:center;"></i>
                                    <span style="font-size:0.9rem; font-weight:500;">PhonePe / UPI</span>
                                </label>
                                <label style="padding:10px; border:1px solid #ddd; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
                                    <input type="radio" name="payment_method" value="card">
                                    <i class="fas fa-credit-card" style="color:#e67e22; width:20px; text-align:center;"></i>
                                    <span style="font-size:0.9rem; font-weight:500;">Credit / Debit Card</span>
                                </label>
                                <label style="padding:10px; border:1px solid #ddd; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
                                    <input type="radio" name="payment_method" value="emi">
                                    <i class="fas fa-percentage" style="color:#e74c3c; width:20px; text-align:center;"></i>
                                    <span style="font-size:0.9rem; font-weight:500;">EMI Available</span>
                                </label>
                                <label style="padding:10px; border:1px solid #ddd; border-radius:8px; display:flex; align-items:center; gap:10px; cursor:pointer;">
                                    <input type="radio" name="payment_method" value="netbanking">
                                    <i class="fas fa-university" style="color:#34495e; width:20px; text-align:center;"></i>
                                    <span style="font-size:0.9rem; font-weight:500;">Net Banking</span>
                                </label>
                            </div>
                        </div>
                        
                        <button style="width:100%; border-radius:8px; padding:15px; background:#FFD814; color:#0F1111; font-weight:600; border:none; cursor:pointer; font-size:1rem; box-shadow:0 2px 5px rgba(213,170,11,0.5);" onclick="placeOrder()">Place your order</button>
                    </div>
                </div>
            </div>

            <!-- Seller Mode Toggle & Action Bar -->
            <div class="seller-mode-bar" id="seller-mode-bar" style="background: linear-gradient(135deg, #1e8449, #27ae60); color: white; padding: 14px 18px; border-radius: 16px; margin: 15px 0 20px; box-shadow: 0 4px 15px rgba(39, 174, 96, 0.25); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 38px; height: 38px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                        <i class="fas fa-store-alt" id="seller-bar-icon"></i>
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 0.95rem;" id="seller-status-title">Buyer View</div>
                        <div style="font-size: 0.75rem; opacity: 0.9;" id="seller-status-sub">Are you a seller? Switch to list & sell products!</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button class="seller-add-btn" id="seller-add-btn" onclick="openAddProductModal()" style="display: none; background: #f1c40f; color: #1e293b; border: none; padding: 8px 14px; border-radius: 10px; font-weight: 700; font-size: 0.85rem; cursor: pointer; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                        <i class="fas fa-plus-circle"></i> + Sell Product
                    </button>
                    <button class="seller-toggle-btn" onclick="toggleSellerMode()" style="background: rgba(255,255,255,0.25); color: white; border: 1px solid rgba(255,255,255,0.4); padding: 8px 14px; border-radius: 10px; font-weight: 600; font-size: 0.8rem; cursor: pointer; transition: 0.3s;" id="seller-toggle-btn">
                        Switch to Seller Mode
                    </button>
                </div>
            </div>

            <!-- Add Seller Product Modal -->
            <div id="add-product-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:2600; align-items:center; justify-content:center; padding:15px;">
                <div style="background:white; width:100%; max-width:520px; max-height:90vh; border-radius:24px; overflow-y:auto; animation: slideUp 0.3s ease-out; display:flex; flex-direction:column; box-shadow: 0 15px 35px rgba(0,0,0,0.25);">
                    <div style="padding:20px; background:linear-gradient(135deg, #1e8449, #27ae60); color:white; display:flex; justify-content:space-between; align-items:center; border-radius:24px 24px 0 0;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <i class="fas fa-store" style="font-size:1.4rem; color:#f1c40f;"></i>
                            <h3 style="font-weight:800; margin:0; font-size:1.25rem;">Sell Your Product</h3>
                        </div>
                        <i class="fas fa-times" onclick="closeAddProductModal()" style="font-size:1.4rem; color:white; cursor:pointer; opacity:0.8;"></i>
                    </div>
                    
                    <form id="seller-product-form" onsubmit="saveSellerProduct(event)" style="padding:20px; display:flex; flex-direction:column; gap:15px;">
                        <div>
                            <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Product Name / Title *</label>
                            <input type="text" id="seller-prod-title" required placeholder="e.g. Organic Basmati Paddy Seeds (25kg)" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none; transition:0.2s;">
                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                            <div>
                                <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Category *</label>
                                <select id="seller-prod-category" required style="width:100%; padding:12px 10px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none; background:white;">
                                    <option value="Seeds">🌾 Seeds & Varieties</option>
                                    <option value="Fertilizers">🌱 Fertilizers & Soil</option>
                                    <option value="Pesticides">🛡️ Pesticides & Care</option>
                                    <option value="Farm Equipment">🚜 Farm Machinery & Tools</option>
                                    <option value="Irrigation">💧 Irrigation Systems</option>
                                    <option value="Animal & Dairy">🐄 Animal & Dairy Feed</option>
                                    <option value="Post-Harvest">📦 Post-Harvest Bags & Storage</option>
                                    <option value="Organic Produce">🥦 Organic Produce & Crops</option>
                                </select>
                            </div>
                            <div>
                                <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Price (₹) *</label>
                                <input type="number" id="seller-prod-price" required placeholder="e.g. 450" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none;">
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                            <div>
                                <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Original Price (₹)</label>
                                <input type="number" id="seller-prod-mrp" placeholder="e.g. 600 (Optional)" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none;">
                            </div>
                            <div>
                                <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Unit / Quantity *</label>
                                <input type="text" id="seller-prod-unit" required placeholder="e.g. per 25 kg bag, per kg" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none;">
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                            <div>
                                <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Seller Name *</label>
                                <input type="text" id="seller-name" required placeholder="Your Name or Farm" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none;">
                            </div>
                            <div>
                                <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Phone Number *</label>
                                <input type="tel" id="seller-phone" required placeholder="10-digit mobile" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none;">
                            </div>
                        </div>

                        <div>
                            <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Location / Village *</label>
                            <input type="text" id="seller-location" required placeholder="e.g. Kallakurichi, Tamil Nadu" style="width:100%; padding:12px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.9rem; outline:none;">
                        </div>

                        <div>
                            <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:5px;">Product Description</label>
                            <textarea id="seller-prod-desc" rows="2" placeholder="Describe quality, harvest date, organic certification, etc." style="width:100%; padding:10px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.88rem; outline:none; resize:none;"></textarea>
                        </div>

                        <div>
                            <label style="font-size:0.85rem; font-weight:700; color:#334155; display:block; margin-bottom:8px;">Choose Product Photo / Image</label>
                            <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:8px; margin-bottom:10px;" id="preset-img-container">
                                <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=200&q=80" title="Seeds" class="preset-img-thumb active" onclick="selectPresetImage(this.src, this)" style="width:55px; height:55px; border-radius:10px; object-fit:cover; cursor:pointer; border:3px solid #27ae60;">
                                <img src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80" title="Fertilizer" class="preset-img-thumb" onclick="selectPresetImage(this.src, this)" style="width:55px; height:55px; border-radius:10px; object-fit:cover; cursor:pointer; border:3px solid transparent;">
                                <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=200&q=80" title="Pesticide" class="preset-img-thumb" onclick="selectPresetImage(this.src, this)" style="width:55px; height:55px; border-radius:10px; object-fit:cover; cursor:pointer; border:3px solid transparent;">
                                <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=200&q=80" title="Tractor/Machinery" class="preset-img-thumb" onclick="selectPresetImage(this.src, this)" style="width:55px; height:55px; border-radius:10px; object-fit:cover; cursor:pointer; border:3px solid transparent;">
                                <img src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=200&q=80" title="Vegetables" class="preset-img-thumb" onclick="selectPresetImage(this.src, this)" style="width:55px; height:55px; border-radius:10px; object-fit:cover; cursor:pointer; border:3px solid transparent;">
                                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80" title="Harvest Bags" class="preset-img-thumb" onclick="selectPresetImage(this.src, this)" style="width:55px; height:55px; border-radius:10px; object-fit:cover; cursor:pointer; border:3px solid transparent;">
                            </div>
                            <input type="text" id="seller-prod-img-url" placeholder="Or enter Custom Image URL (Optional)" style="width:100%; padding:10px 14px; border:1.5px solid #cbd5e1; border-radius:12px; font-size:0.85rem; outline:none;">
                        </div>

                        <div style="display:flex; gap:10px; margin-top:10px;">
                            <button type="button" onclick="closeAddProductModal()" style="flex:1; padding:12px; border-radius:12px; background:#f1f5f9; color:#64748b; font-weight:700; border:none; cursor:pointer;">Cancel</button>
                            <button type="submit" style="flex:2; padding:12px; border-radius:12px; background:#27ae60; color:white; font-weight:700; border:none; cursor:pointer; font-size:0.95rem; box-shadow:0 4px 12px rgba(39, 174, 96, 0.3);">
                                <i class="fas fa-check-circle" style="margin-right:6px;"></i> Publish Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Shop Tabs -->
            <div class="shop-tabs">
                <button class="shop-tab active" onclick="switchShopTab(this, 'tab-products')">
                    <i class="fas fa-box-open"></i> Catalog
                </button>
                <button class="shop-tab" onclick="switchShopTab(this, 'tab-farmer-sellers')">
                    <i class="fas fa-apple-whole"></i> Daily Fresh Market (<span id="farmer-seller-count">0</span>)
                </button>
                <button class="shop-tab" onclick="switchShopTab(this, 'tab-nearby')">
                    <i class="fas fa-map-marker-alt"></i> Nearby Shops
                </button>
            </div>

            <!-- Products Tab -->
            <div id="tab-products" class="shop-tab-content active">
                <div class="product-categories">

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(39,174,96,0.1);color:#27ae60"><i class="fas fa-seedling"></i></div>
                            <span>Seeds</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Paddy Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(943)</span></div>
                                <div class="amz-price">₹538 <small>₹827</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Wheat Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2626)</span></div>
                                <div class="amz-price">₹1420 <small>₹1714</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Vegetable Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2444)</span></div>
                                <div class="amz-price">₹1899 <small>₹2197</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Hybrid Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2915)</span></div>
                                <div class="amz-price">₹461 <small>₹632</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Fruit Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(618)</span></div>
                                <div class="amz-price">₹438 <small>₹584</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(52,152,219,0.1);color:#3498db"><i class="fas fa-flask"></i></div>
                            <span>Fertilizers</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Organic Fertilizers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1131)</span></div>
                                <div class="amz-price">₹1455 <small>₹1544</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Urea</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(838)</span></div>
                                <div class="amz-price">₹1744 <small>₹1833</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">DAP (Di-Ammonium Phosphate)</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(377)</span></div>
                                <div class="amz-price">₹1082 <small>₹1379</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Potash</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(883)</span></div>
                                <div class="amz-price">₹628 <small>₹903</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Bio Fertilizers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1242)</span></div>
                                <div class="amz-price">₹942 <small>₹1193</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(231,76,60,0.1);color:#e74c3c"><i class="fas fa-spray-can"></i></div>
                            <span>Pesticides</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Insecticides</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1278)</span></div>
                                <div class="amz-price">₹1770 <small>₹2029</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Fungicides</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(487)</span></div>
                                <div class="amz-price">₹1068 <small>₹1362</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Herbicides</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1297)</span></div>
                                <div class="amz-price">₹1852 <small>₹2077</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Organic Pest Control</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2451)</span></div>
                                <div class="amz-price">₹1102 <small>₹1400</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(243,156,18,0.1);color:#f39c12"><i class="fas fa-tractor"></i></div>
                            <span>Farm Equipment</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Tractors</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2884)</span></div>
                                <div class="amz-price">₹1411 <small>₹1531</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Sprayers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1870)</span></div>
                                <div class="amz-price">₹415 <small>₹655</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Harvesters</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2558)</span></div>
                                <div class="amz-price">₹1112 <small>₹1218</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Irrigation Pumps</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1227)</span></div>
                                <div class="amz-price">₹654 <small>₹872</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Hand Tools</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(882)</span></div>
                                <div class="amz-price">₹876 <small>₹1109</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(52,152,219,0.15);color:#2980b9"><i class="fas fa-droplet"></i></div>
                            <span>Irrigation Products</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Drip Irrigation Systems</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(947)</span></div>
                                <div class="amz-price">₹1319 <small>₹1561</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Sprinklers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1209)</span></div>
                                <div class="amz-price">₹1238 <small>₹1309</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Water Pumps</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2057)</span></div>
                                <div class="amz-price">₹913 <small>₹1093</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Pipes and Fittings</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1215)</span></div>
                                <div class="amz-price">₹1270 <small>₹1360</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(39,174,96,0.15);color:#1e8449"><i class="fas fa-shield-halved"></i></div>
                            <span>Plant Protection</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Plant Growth Regulators</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1494)</span></div>
                                <div class="amz-price">₹1097 <small>₹1256</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Crop Protection Chemicals</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2649)</span></div>
                                <div class="amz-price">₹490 <small>₹762</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Disease Control Products</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(838)</span></div>
                                <div class="amz-price">₹1653 <small>₹1714</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(155,89,182,0.1);color:#9b59b2"><i class="fas fa-cow"></i></div>
                            <span>Animal & Dairy Products</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Cattle Feed</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2014)</span></div>
                                <div class="amz-price">₹1572 <small>₹1686</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Poultry Feed</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1045)</span></div>
                                <div class="amz-price">₹399 <small>₹692</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Veterinary Medicines</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(959)</span></div>
                                <div class="amz-price">₹1741 <small>₹1859</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="prod-cat-card" onclick="toggleCategory(this)">
                        <div class="prod-cat-header">
                            <div class="prod-cat-icon" style="background:rgba(230,126,34,0.1);color:#e67e22"><i class="fas fa-boxes-packing"></i></div>
                            <span>Post-Harvest Products</span>
                            <i class="fas fa-chevron-down prod-arrow"></i>
                        </div>
                        <div class="prod-sub-list">
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Storage Bags</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1434)</span></div>
                                <div class="amz-price">₹1574 <small>₹1813</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Grain Storage Bins</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2413)</span></div>
                                <div class="amz-price">₹496 <small>₹671</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Packaging Material</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1553)</span></div>
                                <div class="amz-price">₹1277 <small>₹1576</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <div style="display:flex; gap:10px; margin-top:10px;">
                                    <button class="amz-add-btn" style="flex:1;">Add to Cart</button>
                                    <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:600; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

            <!-- Daily Fresh Market Tab -->
            <div id="tab-farmer-sellers" class="shop-tab-content">
                <div style="background: linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(46, 204, 113, 0.15)); padding: 16px 20px; border-radius: 16px; margin-bottom: 20px; border: 1px solid rgba(39, 174, 96, 0.2); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <h4 style="margin:0; font-size:1.05rem; color:#1e8449; font-weight: 800; display:flex; align-items:center; gap:8px;">
                            <i class="fas fa-apple-whole" style="color:#e74c3c;"></i> Daily Fresh Market
                        </h4>
                        <p style="margin:4px 0 0 0; font-size:0.82rem; color:#475569;">Fresh farm produce directly from local farmers daily!</p>
                    </div>
                    <button onclick="openAddProductModal()" style="background:#27ae60; color:white; border:none; padding:10px 16px; border-radius:12px; font-weight:700; font-size:0.85rem; cursor:pointer; display:flex; align-items:center; gap:6px; box-shadow: 0 4px 10px rgba(39,174,96,0.25);">
                        <i class="fas fa-plus"></i> Sell Your Item
                    </button>
                </div>
                
                <!-- Two Columns Layout for Vegetables & Fruits -->
                <div class="daily-fresh-columns" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; margin-bottom: 30px;">
                    <!-- Column 1: Vegetables -->
                    <div class="market-column" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.04); transition: all 0.3s ease;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #27ae60;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 42px; height: 42px; background: rgba(39,174,96,0.15); color: #27ae60; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                                    <i class="fas fa-carrot"></i>
                                </div>
                                <div>
                                    <h3 style="margin: 0; font-size: 1.15rem; color: #0f172a; font-weight: 800;">Fresh Vegetables</h3>
                                    <span style="font-size: 0.78rem; color: #64748b; font-weight: 500;">Farm-harvested local veggies</span>
                                </div>
                            </div>
                            <span style="background: rgba(39,174,96,0.12); color: #27ae60; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 20px;">4 Items</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
                            <!-- Vegetable Product 1 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #27ae60; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Farm Fresh</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Organic Country Tomatoes</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star-half-alt" style="color: #f1c40f;"></i> <span>(1,820)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹35 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹50</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Ramesh Kumar (Kallakurichi)</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Vegetable Product 2 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #e67e22; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Organic</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Fresh Red Nashik Onions</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i> <span>(2,140)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹28 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹40</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Suresh Patel (Salem)</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Vegetable Product 3 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #27ae60; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">High Starch</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Hill Harvest Potatoes</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star-half-alt" style="color: #f1c40f;"></i> <span>(1,290)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹25 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹35</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Anita Devi (Nilgiris)</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Vegetable Product 4 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #27ae60; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Crisp Fresh</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Farm Green Capsicum</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i> <span>(870)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹40 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹60</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Murugan (Erode)</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Column 2: Fruits -->
                    <div class="market-column" style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 20px; padding: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.04); transition: all 0.3s ease;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; padding-bottom: 12px; border-bottom: 2px solid #e74c3c;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 42px; height: 42px; background: rgba(231,76,60,0.15); color: #e74c3c; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                                    <i class="fas fa-apple-whole"></i>
                                </div>
                                <div>
                                    <h3 style="margin: 0; font-size: 1.15rem; color: #0f172a; font-weight: 800;">Fresh Fruits</h3>
                                    <span style="font-size: 0.78rem; color: #64748b; font-weight: 500;">Naturally ripened organic fruits</span>
                                </div>
                            </div>
                            <span style="background: rgba(231,76,60,0.12); color: #e74c3c; font-weight: 700; font-size: 0.75rem; padding: 4px 10px; border-radius: 20px;">4 Items</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
                            <!-- Fruit Product 1 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #f39c12; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Tree Ripened</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Robusta Sweet Bananas</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i> <span>(1,490)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹45 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹60</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ dozen</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Selvam (Madurai)</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Fruit Product 2 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #e74c3c; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Top Quality</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Shimla Red Apples</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star-half-alt" style="color: #f1c40f;"></i> <span>(3,100)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹160 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹200</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Himachal Farmers Co-op</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Fruit Product 3 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #27ae60; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">King of Fruits</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Alphonso Organic Mangoes</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i> <span>(4,520)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹320 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹450</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> Ratnagiri Fruit Orchard</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Fruit Product 4 -->
                            <div class="amz-product-card" style="border: 1px solid #f1f5f9; border-radius: 14px; overflow: hidden; background: #fafafa;">
                                <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1536511157201-5222b3a6a5cd?auto=format&fit=crop&w=300&q=80'); position: relative;">
                                    <span style="position: absolute; top: 8px; left: 8px; background: #27ae60; color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px;">Fresh Harvest</span>
                                </div>
                                <div class="amz-info" style="padding: 12px;">
                                    <h4 class="amz-title" style="margin: 0 0 4px 0; font-size: 0.95rem;">Farm Fresh Guavas</h4>
                                    <div class="amz-rating" style="font-size: 0.75rem;"><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star" style="color: #f1c40f;"></i><i class="fas fa-star-half-alt" style="color: #f1c40f;"></i> <span>(920)</span></div>
                                    <div class="amz-price" style="font-weight: 800; color: #1e293b; margin: 6px 0;">₹50 <small style="text-decoration: line-through; color: #94a3b8; font-weight: 400;">₹70</small> <span style="font-size:0.75rem; color:#64748b; font-weight: 500;">/ kg</span></div>
                                    <div class="amz-desc" style="font-size: 0.78rem; color: #475569; margin-bottom: 8px;"><i class="fas fa-user-check" style="color:#27ae60;"></i> K. Palanisamy (Dindigul)</div>
                                    <div style="display:flex; gap:8px;">
                                        <button class="amz-add-btn" style="flex:1; padding: 7px 10px; font-size: 0.8rem;">Add to Cart</button>
                                        <button class="amz-buy-btn" style="flex:1; background:#f39c12; color:white; border:none; border-radius:6px; font-weight:700; font-size: 0.8rem; cursor:pointer;" onclick="openBuyNow(this)">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="farmer-sellers-list" style="display:flex; flex-direction:column; gap: 16px;">
                    <!-- Seller products will be dynamically rendered here -->
                </div>
            </div>

            <!-- Nearby Shops Tab -->
            <div id="tab-nearby" class="shop-tab-content">
                <div class="search-bar" style="margin-bottom:20px">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search fertilizers, seeds...">
                </div>
                <div class="shop-list">
                    <div class="card shop-card">
                        <div class="shop-info">
                            <h4>Green Valley Agri Store</h4>
                            <p><i class="fas fa-map-marker-alt"></i> 1.2 km away • ★ 4.8</p>
                            <div class="stock-badges">
                                <span class="badge in-stock">Urea (In Stock)</span>
                                <span class="badge discount">10% OFF</span>
                            </div>
                        </div>
                        <div class="shop-action">
                            <button class="call-btn"><i class="fas fa-phone"></i></button>
                        </div>
                    </div>
                    <div class="card shop-card">
                        <div class="shop-info">
                            <h4>Farmer's Choice</h4>
                            <p><i class="fas fa-map-marker-alt"></i> 2.5 km away • ★ 4.5</p>
                            <div class="stock-badges">
                                <span class="badge in-stock">Paddy Seeds</span>
                                <span class="badge organic">Organic Alt Available</span>
                            </div>
                        </div>
                        <div class="shop-action">
                            <button class="call-btn"><i class="fas fa-phone"></i></button>
                        </div>
                    </div>
                    <div class="card shop-card">
                        <div class="shop-info">
                            <h4>KisanMart Agro Centre</h4>
                            <p><i class="fas fa-map-marker-alt"></i> 3.0 km away • ★ 4.6</p>
                            <div class="stock-badges">
                                <span class="badge in-stock">DAP Available</span>
                                <span class="badge discount">5% OFF on Seeds</span>
                            </div>
                        </div>
                        <div class="shop-action">
                            <button class="call-btn"><i class="fas fa-phone"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    'fertilizer-calc': `
        <section class="calc-view">
            <div class="view-header" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                    <h2 style="font-weight: 800; font-size: 1.5rem; margin: 0;">Fertilizer Calculator</h2>
                </div>
                <div class="crops-trees-badge" style="background: rgba(39, 174, 96, 0.1); padding: 8px 12px; border-radius: 12px; font-size: 0.75rem; color: var(--primary-color); font-weight: 700; display: flex; align-items: center; gap: 6px; box-shadow: 0 2px 8px rgba(39, 174, 96, 0.1);">
                    <i class="fas fa-seedling"></i>
                    <span>Crops, Trees & Plants</span>
                </div>
            </div>
            
            <div class="crop-selector-inline" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(39, 174, 96, 0.05); padding: 10px; border-radius: 15px; border: 2px solid rgba(39, 174, 96, 0.2);">
                    <span style="font-size: 0.9rem; color: #1e293b; font-weight: 700;">Area Unit:</span>
                    <div class="unit-selector" style="display: flex; background: #e2e8f0; border-radius: 10px; padding: 4px; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);">
                        <button class="unit-btn active" onclick="changeUnit('acre', this)" style="padding: 8px 15px; font-size: 0.8rem;">Acre</button>
                        <button class="unit-btn" onclick="changeUnit('hectare', this)" style="padding: 8px 15px; font-size: 0.8rem;">Hectare</button>
                        <button class="unit-btn" onclick="changeUnit('gunta', this)" style="padding: 8px 15px; font-size: 0.8rem;">Gunta</button>
                    </div>
                </div>
                <div style="font-size: 0.85rem; color: #64748b; font-weight: 500; margin-top: 5px;">Select your cultivation type:</div>
                <div class="selector-box" onclick="showCropSelection()" style="width: 100%; justify-content: space-between; border: 2px solid #e2e8f0; transition: all 0.3s ease;">
                    <span id="selected-crop-name">🍌 Banana</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>

            <!-- Crop Selection Overlay -->
            <div id="crop-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:2000; align-items:flex-end;">
                <div style="background:white; width:100%; max-height:80%; border-radius:25px 25px 0 0; padding:25px; overflow-y:auto; animation: slideUp 0.3s ease-out;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                        <h3 style="font-weight:800; color:#1e293b;">Select Type</h3>
                        <i class="fas fa-times" onclick="closeCropSelection()" style="font-size:1.2rem; color:#94a3b8; cursor:pointer;"></i>
                    </div>
                    
                    <div class="selection-category" style="margin-bottom:20px;">
                        <h4 style="font-size:0.9rem; color:var(--primary-color); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px;">🌾 Field Crops</h4>
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
                            <div class="sel-item" onclick="selectCrop('Paddy', '🌾')">
                                <div class="sel-icon">🌾</div>
                                <span>Paddy</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Wheat', '🥖')">
                                <div class="sel-icon">🥖</div>
                                <span>Wheat</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Maize', '🌽')">
                                <div class="sel-icon">🌽</div>
                                <span>Maize</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Cotton', '☁️')">
                                <div class="sel-icon">☁️</div>
                                <span>Cotton</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Sugarcane', '🎋')">
                                <div class="sel-icon">🎋</div>
                                <span>Sugarcane</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Pulse', '🫘')">
                                <div class="sel-icon">🫘</div>
                                <span>Pulse</span>
                            </div>
                        </div>
                    </div>

                    <div class="selection-category" style="margin-bottom:20px;">
                        <h4 style="font-size:0.9rem; color:var(--accent-blue); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px;">🌱 Plants & Vegetables</h4>
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
                            <div class="sel-item" onclick="selectCrop('Tomato', '🍅')">
                                <div class="sel-icon">🍅</div>
                                <span>Tomato</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Chilli', '🌶️')">
                                <div class="sel-icon">🌶️</div>
                                <span>Chilli</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Brinjal', '🍆')">
                                <div class="sel-icon">🍆</div>
                                <span>Brinjal</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Ladies Finger', '🥦')">
                                <div class="sel-icon">🥦</div>
                                <span>L. Finger</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Onion', '🧅')">
                                <div class="sel-icon">🧅</div>
                                <span>Onion</span>
                            </div>
                        </div>
                    </div>

                    <div class="selection-category" style="margin-bottom:10px;">
                        <h4 style="font-size:0.9rem; color:var(--dark-green); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px;">🌳 Trees & Orchards</h4>
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
                            <div class="sel-item" onclick="selectCrop('Coconut', '🥥')">
                                <div class="sel-icon">🥥</div>
                                <span>Coconut</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Banana', '🍌')">
                                <div class="sel-icon">🍌</div>
                                <span>Banana</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Mango', '🥭')">
                                <div class="sel-icon">🥭</div>
                                <span>Mango</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Teak', '🪵')">
                                <div class="sel-icon">🪵</div>
                                <span>Teak</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Lemon', '🍋')">
                                <div class="sel-icon">🍋</div>
                                <span>Lemon</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Guava', '🍈')">
                                <div class="sel-icon">🍈</div>
                                <span>Guava</span>
                            </div>
                        </div>
                    </div>

                    <div class="selection-category" style="margin-bottom:10px;">
                        <h4 style="font-size:0.9rem; color:var(--accent-orange); margin-bottom:12px; text-transform:uppercase; letter-spacing:1px;">📦 Cultivating Seeds</h4>
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
                            <div class="sel-item" onclick="selectCrop('Paddy Seeds', '🌱')">
                                <div class="sel-icon">🌱</div>
                                <span>Paddy S.</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Wheat Seeds', '🌱')">
                                <div class="sel-icon">🌱</div>
                                <span>Wheat S.</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Sunflower', '🌻')">
                                <div class="sel-icon">🌻</div>
                                <span>Sunflower</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Sesame', '🍂')">
                                <div class="sel-icon">🍂</div>
                                <span>Sesame</span>
                            </div>
                            <div class="sel-item" onclick="selectCrop('Cotton Seeds', '☁️')">
                                <div class="sel-icon">☁️</div>
                                <span>Cotton S.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="nutrient-section">
                <div class="step-title">
                    <span class="step-num">1</span>
                    <h3>Nutrient quantities</h3>
                    <i class="fas fa-info-circle info-icon"></i>
                </div>
                <p class="step-desc">Based on your field size and crop, we've selected a nutrient ratio for you</p>
                
                <div class="nutrient-cards">
                    <div class="n-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <span class="label">N:</span>
                            <i class="fas fa-edit" onclick="editNutrient('n')" style="font-size: 0.8rem; color: var(--primary-color); cursor: pointer; opacity: 0.7; transition: opacity 0.2s;"></i>
                        </div>
                        <strong id="n-val">150 g</strong>
                        <small>150 g/tree</small>
                    </div>
                    <div class="n-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <span class="label">P:</span>
                            <i class="fas fa-edit" onclick="editNutrient('p')" style="font-size: 0.8rem; color: var(--primary-color); cursor: pointer; opacity: 0.7; transition: opacity 0.2s;"></i>
                        </div>
                        <strong id="p-val">63 g</strong>
                        <small>63 g/tree</small>
                    </div>
                    <div class="n-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <span class="label">K:</span>
                            <i class="fas fa-edit" onclick="editNutrient('k')" style="font-size: 0.8rem; color: var(--primary-color); cursor: pointer; opacity: 0.7; transition: opacity 0.2s;"></i>
                        </div>
                        <strong id="k-val">375 g</strong>
                        <small>375 g/tree</small>
                    </div>
                </div>
            </div>

            <div class="tree-counter-section">
                <h3>Number of trees / Amount</h3>
                <div class="counter-control">
                    <button class="count-btn" onclick="updateFertilizerCount(-1)"><i class="fas fa-minus"></i></button>
                    <div class="count-display">
                        <strong id="tree-count">1</strong>
                        <span>Units</span>
                    </div>
                    <button class="count-btn plus" onclick="updateFertilizerCount(1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>

            <button class="calculate-btn" onclick="alert('Success! Fertilizer requirements updated.')">Calculate</button>

            <div class="bottom-illustration">
                <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 130 Q100 110 200 130 T400 130 V150 H0 Z" fill="#f1f5f9"/>
                    <path d="M50 130 L55 110 L60 130 Z" fill="#94a3b8"/>
                    <circle cx="200" cy="110" r="20" fill="#cbd5e1"/>
                    <rect x="198" y="110" width="4" height="20" fill="#94a3b8"/>
                </svg>
            </div>
        </section>
    `,
    'pesticide-calc': `
        <section class="calc-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Pesticide Calculator</h2>
            </div>
            <div class="card" style="margin-top:20px; padding:20px; border-radius:15px">
                <p>Calculate optimal pesticide dilution based on pest type and crop stage.</p>
                <div class="badge-new" style="display:inline-block; position:static; margin-top:10px">Coming Soon</div>
            </div>
        </section>
    `,
    'farming-calc': `
        <section class="calc-view">
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Farming Calculator</h2>
            </div>
            <div class="card" style="margin-top:20px; padding:20px; border-radius:15px">
                <p>Estimate your harvest yield and profits with AI predictions.</p>
                <div class="badge-new" style="display:inline-block; position:static; margin-top:10px">Coming Soon</div>
            </div>
        </section>
    `,
    'weather-details': `
        <section class="weather-details-view" style="background:#282828; color:white; min-height:100vh; padding:20px; font-family:'Outfit',sans-serif; margin:-20px; border-radius:15px;">
            <div class="view-header" style="margin-bottom: 30px;">
                <button onclick="navigateTo('dashboard')" class="back-btn" style="background:transparent; color:white; border:none; width:40px; height:40px; cursor:pointer; font-size:1.2rem; margin-right:5px; padding:0; box-shadow:none;"><i class="fas fa-arrow-left"></i></button>
                <h2 id="current-location" style="color:white; font-size:1.1rem; font-weight:600; margin:0;">Loading Location... <i class="fas fa-map-marker-alt" style="font-size:0.9rem; margin-left:5px;"></i></h2>
            </div>
            
            <div class="weather-main-info" style="margin-bottom:30px;">
                <div style="display:flex; align-items:flex-start;">
                    <h1 id="main-temp-val" data-c="28" data-f="82" style="font-size:4.8rem; font-weight:500; line-height:1; letter-spacing:-2px; margin:0;">28°</h1>
                    <div style="margin-top:10px; margin-left:10px; font-size:1.1rem; color:#aaa; font-weight:500;">
                        <span id="unit-c" style="color:white; cursor:pointer;" onclick="switchWeatherUnit('C')">C</span> / <span id="unit-f" style="cursor:pointer;" onclick="switchWeatherUnit('F')">F</span>
                    </div>
                </div>
                <p style="font-size:1.15rem; margin-top:10px; color:#e8eaed; font-weight:300;">Sunny much of the time</p>
            </div>

            <div class="weather-forecast-scroll" style="display:flex; gap:12px; overflow-x:auto; padding-bottom:15px; margin-bottom:35px; scrollbar-width:none; -webkit-overflow-scrolling:touch;">
                <div class="weather-day-card" onclick="selectWeatherDay(this, 0)" style="background:rgba(255,255,255,0.08); padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:600;">Today</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">28°</p>
                    <p style="color:#aaa; font-size:0.85rem;">22°</p>
                </div>
                <div class="weather-day-card" onclick="selectWeatherDay(this, 1)" style="background:transparent; padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Yesterday</p>
                    <i class="fas fa-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">30°</p>
                    <p style="color:#aaa; font-size:0.85rem;">23°</p>
                </div>
                <div class="weather-day-card" onclick="selectWeatherDay(this, 2)" style="background:transparent; padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">2 days ago</p>
                    <i class="fas fa-cloud-showers-heavy" style="font-size:1.5rem; color:#3498db; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">26°</p>
                    <p style="color:#aaa; font-size:0.85rem;">21°</p>
                </div>
                <div class="weather-day-card" onclick="selectWeatherDay(this, 3)" style="background:transparent; padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">3 days ago</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">29°</p>
                    <p style="color:#aaa; font-size:0.85rem;">22°</p>
                </div>
                <div class="weather-day-card" onclick="selectWeatherDay(this, 4)" style="background:transparent; padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">4 days ago</p>
                    <i class="fas fa-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">31°</p>
                    <p style="color:#aaa; font-size:0.85rem;">23°</p>
                </div>
                <div class="weather-day-card" onclick="selectWeatherDay(this, 5)" style="background:transparent; padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">5 days ago</p>
                    <i class="fas fa-smog" style="font-size:1.5rem; color:#e67e22; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">28°</p>
                    <p style="color:#aaa; font-size:0.85rem;">22°</p>
                </div>
                <div class="weather-day-card" onclick="selectWeatherDay(this, 6)" style="background:transparent; padding:15px; border-radius:12px; text-align:center; min-width:70px; cursor:pointer; transition: 0.3s;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">6 days ago</p>
                    <i class="fas fa-cloud" style="font-size:1.5rem; color:#95a5a6; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">25°</p>
                    <p style="color:#aaa; font-size:0.85rem;">20°</p>
                </div>
            </div>

            <div class="weather-chart-section" style="border-top:1px solid rgba(255,255,255,0.08); padding-top:25px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:40px;">
                    <h3 style="font-size:0.95rem; font-weight:600; color:white;">Temperature - Time Chart <i class="fas fa-clock" style="font-size:0.75rem; margin-left:5px; color:#aaa;"></i></h3>
                </div>
                
                <div id="weather-time-chart" style="position:relative; height:120px; width:100%; overflow:visible;">
                    <!-- Line chart SVG -->
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="width:100%; height:100%; position:absolute; top:0; left:0; overflow:visible;">
                        <defs>
                            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="rgba(168, 114, 69, 0.45)" />
                                <stop offset="100%" stop-color="rgba(168, 114, 69, 0.0)" />
                            </linearGradient>
                        </defs>
                        <!-- The area under the curve -->
                        <path d="M0,50 L0,35 C 7,35 7,37.5 14.2,37.5 C 21.3,37.5 21.3,40 28.5,40 C 35.6,40 35.6,32.5 42.8,32.5 C 49.9,32.5 49.9,17.5 57.1,17.5 C 64.2,17.5 64.2,10 71.4,10 C 78.5,10 78.5,12.5 85.7,12.5 C 92.8,12.5 92.8,30 100,30 L 100,50 Z" fill="url(#curveGradient)" />
                        
                        <!-- The line curve  -->
                        <path d="M 0,35 C 7,35 7,37.5 14.2,37.5 C 21.3,37.5 21.3,40 28.5,40 C 35.6,40 35.6,32.5 42.8,32.5 C 49.9,32.5 49.9,17.5 57.1,17.5 C 64.2,17.5 64.2,10 71.4,10 C 78.5,10 78.5,12.5 85.7,12.5 C 92.8,12.5 92.8,30 100,30" fill="none" stroke="white" stroke-width="0.8" />
                        
                        <!-- Data points -->
                        <circle cx="0" cy="35" r="1.2" fill="white" />
                        <circle cx="14.2" cy="37.5" r="1.2" fill="white" />
                        <circle cx="28.5" cy="40" r="1.2" fill="white" />
                        <circle cx="42.8" cy="32.5" r="1.2" fill="white" />
                        <circle cx="57.1" cy="17.5" r="1.2" fill="white" />
                        <circle cx="71.4" cy="10" r="1.2" fill="white" />
                        <circle cx="85.7" cy="12.5" r="1.2" fill="white" />
                        <circle cx="100" cy="30" r="1.2" fill="white" />
                        
                        <!-- Temperature Labels (above dots) -->
                        <text x="0" y="31.5" fill="white" font-size="3" font-weight="500" text-anchor="middle">25°</text>
                        <text x="14.2" y="34" fill="white" font-size="3" font-weight="500" text-anchor="middle">24°</text>
                        <text x="28.5" y="36.5" fill="white" font-size="3" font-weight="500" text-anchor="middle">23°</text>
                        <text x="42.8" y="29" fill="white" font-size="3" font-weight="500" text-anchor="middle">26°</text>
                        <text x="57.1" y="14" fill="white" font-size="3" font-weight="500" text-anchor="middle">32°</text>
                        <text x="71.4" y="6.5" fill="white" font-size="3" font-weight="500" text-anchor="middle">35°</text>
                        <text x="85.7" y="9" fill="white" font-size="3" font-weight="500" text-anchor="middle">34°</text>
                        <text x="100" y="26.5" fill="white" font-size="3" font-weight="500" text-anchor="middle">27°</text>
                        
                        <!-- Down arrow icon below 9am (42.8) -->
                        <g transform="translate(42.8, 55)">
                            <circle cx="0" cy="0" r="4" fill="#202124" stroke="rgba(255,255,255,0.3)" stroke-width="0.3" />
                            <path d="M-1,-1 L0,0.5 L1,-1 M0,-2 L0,0.5" stroke="white" stroke-width="0.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                    
                    <!-- Time labels -->
                    <div style="position:absolute; bottom:-25px; left:0; right:0; display:flex; justify-content:space-between; color:#999; font-size:0.75rem;">
                        <span style="width:12.5%; text-align:-webkit-left; text-align:left;">12am</span>
                        <span style="width:12.5%; text-align:-webkit-center; text-align:center;">3am</span>
                        <span style="width:12.5%; text-align:-webkit-center; text-align:center;">6am</span>
                        <span style="width:12.5%; text-align:-webkit-center; text-align:center;">9am</span>
                        <span style="width:12.5%; text-align:-webkit-center; text-align:center;">12pm</span>
                        <span style="width:12.5%; text-align:-webkit-center; text-align:center;">3pm</span>
                        <span style="width:12.5%; text-align:-webkit-center; text-align:center;">6pm</span>
                        <span style="width:12.5%; text-align:-webkit-right; text-align:right;">9pm</span>
                    </div>
                </div>
            </div>
            
            <style>
                .weather-details-view {
                    /* ensure background covers the white base */
                    z-index: 1000;
                    position: relative;
                }
            </style>
        </section>
    `
};

// Navigation Controller
function navigateTo(view, category) {
    if (!views[view] && view !== 'dashboard' && view !== 'quiz' && view !== 'auth') {
        alert(`Feature "${view}" is under development!`);
        return;
    }

    if (!state.user && view !== 'auth') {
        renderRegistration();
        return;
    }

    const mainContent = document.getElementById('main-content');
    const bottomNav = document.querySelector('.bottom-nav');

    if (bottomNav) {
        bottomNav.style.display = view === 'auth' ? 'none' : 'flex';
    }
    
    mainContent.style.opacity = '0';

    setTimeout(() => {
        let content = views[view] || views['dashboard'];

        // Dynamic Library Title & Content
        if (view === 'library' && category) {
            content = content.replace('Knowledge Center', `${category} Library`);

            // Demo Content based on category
            let demoDocs = '';
            if (category === 'Crops') {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Major Crops Cultivation</h4><p>2.1 MB • PDF</p></div>
                    </div>
                    <div class="card doc-card">
                        <i class="fas fa-file-video" style="color:#e67e22"></i>
                        <div class="doc-info"><h4>Crop Rotation Methods</h4><p>8.4 MB • MP4</p></div>
                    </div>`;
            } else if (category === 'Pests & Diseases') {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Common Farm Pests</h4><p>1.5 MB • PDF</p></div>
                    </div>
                    <div class="card doc-card">
                        <i class="fas fa-bug" style="color:#e74c3c"></i>
                        <div class="doc-info"><h4>Fungal Disease Guide</h4><p>900 KB • PDF</p></div>
                    </div>`;
            } else if (category === 'Cultivation Tips') {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Yield Optimization Tips</h4><p>1.1 MB • PDF</p></div>
                    </div>
                    <div class="card doc-card">
                        <i class="fas fa-lightbulb" style="color:var(--primary-color)"></i>
                        <div class="doc-info"><h4>Smart Irrigation Tips</h4><p>650 KB • PDF</p></div>
                    </div>`;
            } else if (category === 'Soil') {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Organic Soil Prep</h4><p>1.5 MB • PDF</p></div>
                    </div>
                    <div class="card doc-card">
                        <i class="fas fa-vial" style="color:var(--primary-color)"></i>
                        <div class="doc-info"><h4>pH Testing Guide</h4><p>400 KB • PDF</p></div>
                    </div>`;
            } else {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Organic Pesticide DIY</h4><p>1.1 MB • PDF</p></div>
                    </div>`;
            }
            content = content.replace(/<div class="doc-list">[\s\S]*?<\/div>/, `<div class="doc-list">${demoDocs}</div>`);
        }

        mainContent.innerHTML = content;
        mainContent.style.opacity = '1';

        // Update User Name
        const navUser = document.querySelector('.nav-user');
        if (state.user && navUser) {
            navUser.innerHTML = `<span style="font-size: 0.9rem; margin-right: 8px;">${state.user.name}</span><i class="fas fa-user-circle"></i>`;
        }

        if (view === 'profile' && state.user) {
            setTimeout(() => {
                document.getElementById('profile-name').innerText = state.user.name || 'Farmer Name';
                document.getElementById('profile-email').innerText = state.user.email || 'Email missing';
                document.getElementById('profile-phone').innerText = state.user.phone || '-';
                document.getElementById('profile-loc').innerText = `${state.user.district || '-'}, ${state.user.stateLoc || '-'}`;
                document.getElementById('profile-acres').innerText = (state.user.acres ? state.user.acres + ' acres' : '-');
            }, 50);
        }

        if (view === 'weather-details') {
            setTimeout(() => {
                fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .then(data => {
                        const locEl = document.getElementById('current-location');
                        if (locEl && data.city && data.country_name) {
                            locEl.innerHTML = `${data.city}, ${data.country_name} <i class="fas fa-map-marker-alt" style="font-size:0.9rem; margin-left:5px;"></i>`;
                        }
                    })
                    .catch(e => {
                        const locEl = document.getElementById('current-location');
                        if (locEl) locEl.innerHTML = `Unknown Location <i class="fas fa-map-marker-alt" style="font-size:0.9rem; margin-left:5px;"></i>`;
                    });
            }, 50);
        }

        if (view === 'shops') {
            setTimeout(() => {
                document.querySelectorAll('.amz-add-btn').forEach(btn => {
                    btn.onclick = function() { addToCart(this); };
                });
                updateCartBadge();
                updateSellerUI();
                renderSellerProducts();
            }, 50);
        }

        // Update Bottom Nav Active State
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

        // Update Header Icons Active State
        const quizIcon = document.querySelector('.nav-quiz-icon');
        if (quizIcon) quizIcon.classList.toggle('active', view === 'quiz');

        if (view === 'quiz') {
            setTimeout(initQuiz, 50);
        }

        if (view === 'dashboard') {
            document.querySelector('.nav-item:first-child').classList.add('active');
            startAdsSlideshow();
        } else if (view === 'community') {
            startAdsSlideshow();
        } else {
            if (adInterval) clearInterval(adInterval);
        }

        window.scrollTo(0, 0);
    }, 200);
}

// Governmental Schemes
function showStateSchemes(state) {
    // Highlight selected state
    document.querySelectorAll('.state-card').forEach(c => c.classList.remove('selected'));
    event.currentTarget.classList.add('selected');

    const centralSchemes = [
        { name: 'PM-KISAN', desc: 'Direct income support of ₹6,000/year to eligible farmer families.' },
        { name: 'Pradhan Mantri Fasal Bima Yojana', desc: 'Crop insurance scheme to provide financial support to farmers against crop failure.' },
        { name: 'Kisan Credit Card (KCC)', desc: 'Provides short-term credit needs for farming, post-harvest expenses, and allied activities.' },
        { name: 'Soil Health Card Scheme', desc: 'Provides soil health cards with crop-wise recommendations for fertilizer use.' },
        { name: 'PM Krishi Sinchai Yojana', desc: 'Ensures irrigation access to every farm with water-use efficiency improvements.' },
    ];

    const stateSchemes = {
        'Tamil Nadu': [{ name: 'Uzhavar Sandhai', desc: 'Direct market access for farmers to sell fresh produce at fair prices.' }],
        'Punjab': [{ name: 'Punjab Ghar Ghar Rozgar Scheme', desc: 'Employment generation and crop diversification support for Punjab farmers.' }],
        'Maharashtra': [{ name: 'Mahatma Phule Shetkari Karjmukti Yojana', desc: 'Crop loan waiver scheme for distressed farmers in Maharashtra.' }],
        'Andhra Pradesh': [{ name: 'YSR Rythu Bharosa', desc: 'Annual financial assistance of ₹13,500 to every farmer family.' }],
        'Telangana': [{ name: 'Rythu Bandhu', desc: 'Investment support of ₹10,000/acre/season for farmers owning land.' }],
        'Karnataka': [{ name: 'Raitha Siri', desc: 'State scheme for crop loan waivers and farmer welfare support in Karnataka.' }],
        'Uttar Pradesh': [{ name: 'Mukhyamantri Krishak Durghatna Kalyan Yojana', desc: 'Financial aid for farmers and farm laborers in case of accidents.' }],
        'Madhya Pradesh': [{ name: 'Mukhyamantri Krishak Samridhi Yojana', desc: 'Bonus support and crop insurance for farmers of MP.' }],
    };

    const specific = stateSchemes[state] || [];
    const allSchemes = [...centralSchemes, ...specific];

    const result = document.getElementById('state-schemes-result');
    if (!result) return;

    result.innerHTML = `
        <div class="scheme-result-header">
            <i class="fas fa-landmark"></i>
            <div>
                <strong style="font-size:1rem;">${state}</strong>
                <div style="font-size:0.8rem;opacity:0.8">${allSchemes.length} schemes available</div>
            </div>
        </div>
        ${allSchemes.map(s => `
        <div class="scheme-card">
            <h4>${s.name}</h4>
            <p>${s.desc}</p>
            <span class="scheme-badge">Learn More</span>
        </div>`).join('')}
    `;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Seller Mode Logic
function toggleSellerMode() {
    state.isSellerMode = !state.isSellerMode;
    localStorage.setItem('agri_seller_mode', state.isSellerMode);
    updateSellerUI();
    renderSellerProducts();
}

function updateSellerUI() {
    const bar = document.getElementById('seller-mode-bar');
    const icon = document.getElementById('seller-bar-icon');
    const title = document.getElementById('seller-status-title');
    const sub = document.getElementById('seller-status-sub');
    const addBtn = document.getElementById('seller-add-btn');
    const toggleBtn = document.getElementById('seller-toggle-btn');

    if (!bar) return;

    if (state.isSellerMode) {
        bar.style.background = 'linear-gradient(135deg, #d35400, #e67e22)';
        bar.style.boxShadow = '0 4px 15px rgba(230, 126, 34, 0.3)';
        if (icon) icon.className = 'fas fa-store';
        if (title) title.innerText = '🌾 Seller Mode Active';
        if (sub) sub.innerText = 'You can list items, manage products & receive buyer inquiries!';
        if (addBtn) addBtn.style.display = 'inline-flex';
        if (toggleBtn) {
            toggleBtn.innerText = 'Switch to Buyer Mode';
            toggleBtn.style.background = 'rgba(0,0,0,0.2)';
        }
    } else {
        bar.style.background = 'linear-gradient(135deg, #1e8449, #27ae60)';
        bar.style.boxShadow = '0 4px 15px rgba(39, 174, 96, 0.25)';
        if (icon) icon.className = 'fas fa-store-alt';
        if (title) title.innerText = 'Buyer View';
        if (sub) sub.innerText = 'Are you a seller? Switch to list & sell products!';
        if (addBtn) addBtn.style.display = 'none';
        if (toggleBtn) {
            toggleBtn.innerText = 'Switch to Seller Mode';
            toggleBtn.style.background = 'rgba(255,255,255,0.25)';
        }
    }
}

function openAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    if (!modal) return;

    // Auto-fill seller name & phone & location from state.user if present
    if (state.user) {
        const nameInput = document.getElementById('seller-name');
        const phoneInput = document.getElementById('seller-phone');
        const locInput = document.getElementById('seller-location');
        if (nameInput && !nameInput.value) nameInput.value = state.user.name || '';
        if (phoneInput && !phoneInput.value) phoneInput.value = state.user.phone || '';
        if (locInput && !locInput.value) locInput.value = `${state.user.district || ''}, ${state.user.stateLoc || ''}`.replace(/^, |, $/, '');
    }

    modal.style.display = 'flex';
}

function closeAddProductModal() {
    const modal = document.getElementById('add-product-modal');
    if (modal) modal.style.display = 'none';
}

let selectedPresetImgUrl = 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=200&q=80';

function selectPresetImage(url, el) {
    selectedPresetImgUrl = url;
    document.querySelectorAll('.preset-img-thumb').forEach(img => {
        img.style.borderColor = 'transparent';
        img.classList.remove('active');
    });
    if (el) {
        el.style.borderColor = '#27ae60';
        el.classList.add('active');
    }
}

function saveSellerProduct(e) {
    if (e) e.preventDefault();

    const title = document.getElementById('seller-prod-title').value.trim();
    const category = document.getElementById('seller-prod-category').value;
    const price = document.getElementById('seller-prod-price').value;
    const mrp = document.getElementById('seller-prod-mrp').value;
    const unit = document.getElementById('seller-prod-unit').value.trim();
    const sellerName = document.getElementById('seller-name').value.trim();
    const sellerPhone = document.getElementById('seller-phone').value.trim();
    const location = document.getElementById('seller-location').value.trim();
    const desc = document.getElementById('seller-prod-desc').value.trim();
    const customImgUrl = document.getElementById('seller-prod-img-url').value.trim();

    if (!title || !price || !sellerName || !sellerPhone) {
        alert('Please fill in all required fields.');
        return;
    }

    const imageUrl = customImgUrl || selectedPresetImgUrl;

    const newProduct = {
        id: 'sp_' + Date.now(),
        title: title,
        category: category,
        price: parseInt(price),
        mrp: mrp ? parseInt(mrp) : null,
        unit: unit,
        sellerName: sellerName,
        sellerPhone: sellerPhone,
        location: location,
        desc: desc || 'Direct from farm. Premium quality guaranteed.',
        imageUrl: imageUrl,
        createdAt: new Date().toISOString(),
        isUserListing: true
    };

    state.sellerProducts.unshift(newProduct);
    localStorage.setItem('agri_seller_products', JSON.stringify(state.sellerProducts));

    closeAddProductModal();

    // Reset form
    document.getElementById('seller-product-form').reset();

    renderSellerProducts();

    alert(`🎉 Product "${title}" published successfully to Agri Shop!`);
}

function deleteSellerProduct(productId) {
    if (confirm('Are you sure you want to remove this product listing?')) {
        state.sellerProducts = state.sellerProducts.filter(p => p.id !== productId);
        localStorage.setItem('agri_seller_products', JSON.stringify(state.sellerProducts));
        renderSellerProducts();
    }
}

function renderSellerProducts() {
    // Initialize demo data if empty
    if (!state.sellerProducts || state.sellerProducts.length === 0) {
        state.sellerProducts = [
            {
                id: 'sp_demo_1',
                title: 'Organic CR1009 Paddy Seeds',
                category: 'Seeds',
                price: 520,
                mrp: 650,
                unit: 'per 25 kg bag',
                sellerName: 'Murugan Organic Farm',
                sellerPhone: '9842156789',
                location: 'Kallakurichi, Tamil Nadu',
                desc: 'Certified organic seed paddy with 98% germination rate.',
                imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=200&q=80',
                createdAt: new Date().toISOString(),
                isUserListing: false
            },
            {
                id: 'sp_demo_2',
                title: 'Freshly Harvested Country Tomatoes',
                category: 'Organic Produce',
                price: 35,
                mrp: 45,
                unit: 'per kg',
                sellerName: 'Green Earth Harvest',
                sellerPhone: '9786012345',
                location: 'Salem, Tamil Nadu',
                desc: 'Direct from field. Chemical-free farm fresh tomatoes.',
                imageUrl: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=200&q=80',
                createdAt: new Date().toISOString(),
                isUserListing: false
            }
        ];
        localStorage.setItem('agri_seller_products', JSON.stringify(state.sellerProducts));
    }

    const countEl = document.getElementById('farmer-seller-count');
    if (countEl) countEl.innerText = state.sellerProducts.length;

    const container = document.getElementById('farmer-sellers-list');
    if (!container) return;

    if (state.sellerProducts.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px 20px; background:white; border-radius:18px; border:1px dashed #cbd5e1;">
                <i class="fas fa-store-slash" style="font-size:2.5rem; color:#94a3b8; margin-bottom:12px;"></i>
                <h4 style="margin:0 0 6px 0; color:#334155; font-size:1.05rem;">No Farmer Listings Yet</h4>
                <p style="color:#64748b; font-size:0.85rem; margin-bottom:16px;">Be the first farmer to list seeds, produce, or equipment here!</p>
                <button onclick="openAddProductModal()" style="background:#27ae60; color:white; border:none; padding:10px 18px; border-radius:12px; font-weight:700; font-size:0.85rem; cursor:pointer;">
                    <i class="fas fa-plus-circle"></i> Add Your First Listing
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = state.sellerProducts.map(p => `
        <div class="card" style="padding:16px; border-radius:18px; border:1px solid #e2e8f0; position:relative; background:white; box-shadow:0 4px 12px rgba(0,0,0,0.04);">
            <div style="display:flex; gap:14px;">
                <div style="width:95px; height:95px; border-radius:14px; background-image:url('${p.imageUrl}'); background-size:cover; background-position:center; flex-shrink:0;"></div>
                <div style="flex:1;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <span style="background:rgba(39, 174, 96, 0.12); color:#1e8449; font-weight:700; font-size:0.72rem; padding:3px 8px; border-radius:6px;">
                            🌾 ${p.category}
                        </span>
                        ${p.isUserListing ? `<button onclick="deleteSellerProduct('${p.id}')" title="Delete Listing" style="background:none; border:none; color:#e74c3c; cursor:pointer; font-size:0.9rem; padding:2px 6px;"><i class="fas fa-trash-alt"></i></button>` : '<span style="background:#f1f5f9; color:#64748b; font-size:0.7rem; padding:2px 6px; border-radius:4px; font-weight:600;">Verified Seller</span>'}
                    </div>
                    
                    <h4 style="margin:6px 0 4px 0; font-size:1rem; color:#1e293b; font-weight:700;">${p.title}</h4>
                    
                    <div style="display:flex; align-items:baseline; gap:8px; margin-bottom:4px;">
                        <span style="color:#27ae60; font-weight:800; font-size:1.1rem;">₹${p.price}</span>
                        ${p.mrp ? `<small style="color:#94a3b8; text-decoration:line-through; font-size:0.8rem;">₹${p.mrp}</small>` : ''}
                        <span style="font-size:0.75rem; color:#64748b;">(${p.unit})</span>
                    </div>

                    <div style="font-size:0.78rem; color:#64748b; margin-bottom:10px;">
                        <i class="fas fa-user-circle" style="color:#27ae60;"></i> <strong>${p.sellerName}</strong> • <i class="fas fa-map-marker-alt" style="color:#e67e22;"></i> ${p.location}
                    </div>

                    <div style="display:flex; gap:8px;">
                        <a href="tel:${p.sellerPhone}" style="flex:1; text-align:center; text-decoration:none; background:#27ae60; color:white; padding:8px 12px; border-radius:10px; font-weight:700; font-size:0.82rem; display:flex; align-items:center; justify-content:center; gap:6px;">
                            <i class="fas fa-phone-alt"></i> Call Seller
                        </a>
                        <a href="https://wa.me/91${p.sellerPhone}?text=Hi%20${encodeURIComponent(p.sellerName)},%20I%20am%20interested%20in%20your%20listing%20'${encodeURIComponent(p.title)}'%20on%20AgriNova360." target="_blank" style="flex:1; text-align:center; text-decoration:none; background:#25D366; color:white; padding:8px 12px; border-radius:10px; font-weight:700; font-size:0.82rem; display:flex; align-items:center; justify-content:center; gap:6px;">
                            <i class="fab fa-whatsapp"></i> Chat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Shop Tab Switching
function switchShopTab(btn, tabId) {
    document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.shop-tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tab = document.getElementById(tabId);
    if (tab) tab.classList.add('active');
}

// Product Category Accordion
function toggleCategory(card) {
    const subList = card.querySelector('.prod-sub-list');
    const arrow = card.querySelector('.prod-arrow');
    const isOpen = card.classList.contains('open');
    // Close all
    document.querySelectorAll('.prod-cat-card.open').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.prod-sub-list').style.maxHeight = '0';
        c.querySelector('.prod-arrow').style.transform = 'rotate(0deg)';
        c.querySelector('.prod-sub-list').classList.remove('open-padding');
    });
    if (!isOpen) {
        card.classList.add('open');
        subList.classList.add('open-padding');
        subList.style.maxHeight = subList.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Ads Slideshow Logic
let adInterval;
function startAdsSlideshow() {
    if (adInterval) clearInterval(adInterval);

    const wrapper = document.getElementById('ads-wrapper');
    const dots = document.querySelectorAll('.ad-dot');
    if (!wrapper || dots.length === 0) return;

    let currentSlide = 0;
    const totalSlides = dots.length;

    adInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides(currentSlide);
    }, 4000);

    function updateSlides(index) {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

// Chat Logic
function fillAndSend(text) {
    document.getElementById('user-input').value = text;
    sendMessage();
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;

    const chatContainer = document.getElementById('chat-messages');

    // User message
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.innerText = text;
    chatContainer.appendChild(userDiv);

    input.value = '';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulated Bot Response
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'msg bot pulsate';

        let response = "Processing your query...";
        if (text.includes('weather')) response = "Tomorrow's weather looks good for sowing. Temperature: 24°C, Humidity: 60%.";
        else if (text.includes('wheat')) response = "For better wheat yield, ensure balanced nitrogen application (N:P:K = 4:2:1) and timely irrigation during crown root initiation.";
        else response = "That's a great question! Based on your land size of " + (state.user?.land || '5') + " acres, I recommend focusing on precision irrigation this week.";

        botDiv.innerText = response;
        chatContainer.appendChild(botDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

// Simulation Logic
function simulateUpload() {
    const uploadZone = document.getElementById('upload-zone');
    const resultDiv = document.getElementById('detection-result');

    if (!uploadZone) return;

    uploadZone.innerHTML = `<i class="fas fa-spinner fa-spin"></i><p>Analyzing Crop Sample...</p>`;

    setTimeout(() => {
        uploadZone.innerHTML = `<i class="fas fa-check-circle" style="color:var(--primary-color)"></i><p>Analysis Complete</p>`;
        resultDiv.innerHTML = `
            <div class="card result-card animate-in">
                <div class="result-header">
                    <div class="disease-meta">
                        <h3>Yellow Rust</h3>
                        <span class="confidence-badge">98% AI Match</span>
                    </div>
                </div>
                <div class="suggestion-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=400&q=80')"></div>
                <p class="disease-desc">Fungal disease that affects wheat. Small, yellow-to-orange pustules appear in rows on leaves.</p>
                
                <div class="treatment-box">
                    <h4><i class="fas fa-medkit"></i> Suggested Treatment</h4>
                    <ul>
                        <li>Apply Propiconazole 25 EC fungicide.</li>
                        <li>Destroy infected crop residues.</li>
                        <li>Avoid excessive nitrogen fertilizers.</li>
                    </ul>
                </div>

                </div>
            </div>
    `;
    }, 2000);
}

function toggleReminder(checkEl) {
    const item = checkEl.closest('.reminder-item');
    item.classList.toggle('completed');
    const icon = checkEl.querySelector('i');
    if (item.classList.contains('completed')) {
        icon.className = 'fas fa-check-circle';
        setTimeout(() => {
            item.style.transform = 'translateX(100%)';
            item.style.opacity = '0';
            setTimeout(() => item.remove(), 300);
        }, 800);
    } else {
        icon.className = 'fas fa-circle';
    }
}

const quizDatabase = [
    { q: "Which soil is best for growing cotton?", options: ["Red Soil", "Black Soil", "Alluvial Soil", "Laterite Soil"], correct: 1 },
    { q: "Which of the following is a Kharif crop?", options: ["Wheat", "Mustard", "Paddy", "Barley"], correct: 2 },
    { q: "What is the primary nutrient provided by Urea?", options: ["Phosphorus", "Potassium", "Nitrogen", "Zinc"], correct: 2 },
    { q: "Which irrigation method is most water-efficient?", options: ["Flood", "Drip", "Furrow", "Sprinkler"], correct: 1 },
    { q: "What does NPK stand for in fertilizers?", options: ["Nitrogen, Phosphorus, Potassium", "Nitrous, Phosphate, Krypton", "Neon, Phosphorus, Potassium"], correct: 0 },
    { q: "Which crop enriches soil with Nitrogen?", options: ["Wheat", "Paddy", "Legumes (Beans)", "Sugarcane"], correct: 2 },
    { q: "What is the ideal pH range for most crops?", options: ["3.0 - 4.5", "5.5 - 7.0", "7.5 - 9.0", "1.0 - 3.0"], correct: 1 },
    { q: "Which gas is released from flooded paddy fields?", options: ["Oxygen", "Ammonia", "Methane", "Chlorine"], correct: 2 },
    { q: "Yellow Rust is a disease mainly affecting which crop?", options: ["Paddy", "Wheat", "Maize", "Cotton"], correct: 1 },
    { q: "Vermicompost is prepared using which organism?", options: ["Fungi", "Bacteria", "Earthworms", "Algae"], correct: 2 }
];

let currentQuizQs = [];
let currentQIndex = 0;
let currentScore = 0;

function initQuiz() {
    const pastScore = localStorage.getItem('agri_quiz_score') || 0;
    const scoreDisplay = document.getElementById('past-score-display');
    if (scoreDisplay) scoreDisplay.innerText = pastScore;

    // Select 5 random questions
    currentQuizQs = [...quizDatabase].sort(() => 0.5 - Math.random()).slice(0, 5);
    currentQIndex = 0;
    currentScore = 0;
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (currentQIndex >= currentQuizQs.length) {
        // Quiz complete
        container.innerHTML = `<div style="text-align:center; padding: 20px;">
            <i class="fas fa-trophy" style="font-size:3rem; color:#f1c40f; margin-bottom:15px;"></i>
            <h3 style="margin-bottom:10px;">Quiz Completed!</h3>
            <p style="margin-bottom:20px; color:var(--text-muted);">You scored ${currentScore} out of ${currentQuizQs.length}</p>
            <button class="primary-btn" style="width:100%; border-radius:10px;" onclick="initQuiz()">Play Again</button>
        </div>`;
        
        const prevScore = parseInt(localStorage.getItem('agri_quiz_score') || '0');
        localStorage.setItem('agri_quiz_score', prevScore + currentScore);
        
        const scoreDisplay = document.getElementById('past-score-display');
        if (scoreDisplay) scoreDisplay.innerText = prevScore + currentScore;
        return;
    }

    const q = currentQuizQs[currentQIndex];
    
    // Create new structure directly into the container so layout remains fresh
    container.innerHTML = `
        <div class="quiz-progress" id="quiz-progress" style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">Question ${currentQIndex + 1} of ${currentQuizQs.length}</div>
        <h3 class="quiz-q" id="quiz-question" style="margin-bottom:15px; font-weight:600; font-size:1.1rem;">${q.q}</h3>
        <div class="quiz-options" id="quiz-options" style="display:flex; flex-direction:column; gap:10px;"></div>
        <button id="next-q-btn" class="primary-btn" style="display:none; margin-top:20px; width:100%; border-radius:10px;" onclick="nextQuizQuestion()">Next Question</button>
    `;

    const optionsContainer = document.getElementById('quiz-options');
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.style.width = '100%';
        btn.style.padding = '12px 15px';
        btn.style.textAlign = 'left';
        btn.style.border = '2px solid #eee';
        btn.style.borderRadius = '12px';
        btn.style.background = 'white';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '0.95rem';
        btn.style.transition = 'all 0.2s';
        
        btn.innerText = opt;
        btn.onclick = () => checkQuizDynamic(btn, idx, q.correct);
        optionsContainer.appendChild(btn);
    });
}

function checkQuizDynamic(btn, selectedIdx, correctIdx) {
    const optionsContainer = document.getElementById('quiz-options');
    const btns = optionsContainer.querySelectorAll('.opt-btn');
    
    btns.forEach((b, idx) => {
        b.disabled = true;
        b.style.pointerEvents = 'none';
        
        if (idx === correctIdx) {
            b.style.backgroundColor = '#2ecc71';
            b.style.color = 'white';
            b.style.borderColor = '#27ae60';
        } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
            b.style.backgroundColor = '#e74c3c';
            b.style.color = 'white';
            b.style.borderColor = '#c0392b';
        } else {
            b.style.opacity = '0.6';
        }
    });

    if (selectedIdx === correctIdx) {
        currentScore++;
    }
    
    document.getElementById('next-q-btn').style.display = 'block';
}

function nextQuizQuestion() {
    currentQIndex++;
    renderQuizQuestion();
}

function simulateSoilReport() {
    const reportUpload = document.querySelector('.report-upload');
    const resultDiv = document.getElementById('soil-report-result');

    if (!reportUpload) return;

    reportUpload.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i><p>Reading Report...</p>`;

    setTimeout(() => {
        reportUpload.innerHTML = `<i class="fas fa-check-double" style="color:var(--primary-color)"></i><p>Analysis Result Ready</p>`;
        resultDiv.innerHTML = `
            <div class="card result-card animate-in" style="border-left-color: var(--accent-blue)">
                <div class="result-header">
                    <h4>Soil Health Report</h4>
                </div>
                <p style="font-size:0.9rem; color:var(--text-muted)">Your soil shows low Phosphorus levels but adequate Nitrogen.</p>
                <div class="treatment-box" style="background: rgba(52, 152, 219, 0.05)">
                    <h4 style="color:var(--accent-blue)"><i class="fas fa-lightbulb"></i> AI Recommendation</h4>
                    <p style="font-size:0.85rem">Add Single Super Phosphate (SSP) at 150kg/acre before the next sowing cycle.</p>
                </div>
            </div>
        `;
    }, 1500);
}

function updateFertilizerCount(delta) {
    const treeCountEl = document.getElementById('tree-count');
    if (!treeCountEl) return;

    let count = parseInt(treeCountEl.innerText);
    count += delta;
    if (count < 1) count = 1;

    treeCountEl.innerText = count;

    // Base values for Banana per tree
    const baseN = 150;
    const baseP = 63;
    const baseK = 375;

    document.getElementById('n-val').innerText = `${(baseN * count).toLocaleString()} g`;
    document.getElementById('p-val').innerText = `${(baseP * count).toLocaleString()} g`;
    document.getElementById('k-val').innerText = `${(baseK * count).toLocaleString()} g`;
}

function scanAndAnalyzeAI() {
    const chatContainer = document.getElementById('chat-messages');

    // User message
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.innerHTML = `<i class="fas fa-robot"></i> AI Analysis in progress...`;
    chatContainer.appendChild(userDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simulated Bot Response
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'msg bot pulsate';
        botDiv.innerHTML = `
            <div style="margin-bottom:10px"><strong>AI Analysis result:</strong></div>
            <div style="background:rgba(16,107,82,0.1); padding:10px; border-radius:10px; margin-bottom:10px">
                <i class="fas fa-check-circle" style="color:#106b52"></i> Identified: <strong>Yellow Rust</strong>
                <br><small>Confidence: 98%</small>
            </div>
            <span>Recommended: Apply Propiconazole 25 EC. Need more details about organic alternatives?</span>
        `;
        chatContainer.appendChild(botDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1500);
}

// ===== COMMUNITY GROUPS SYSTEM =====

const communityGroups = [
    {
        id: 'group-farming',
        name: '🌾 Group Farming',
        desc: 'Discuss farming techniques, crop rotation, collective planting strategies.',
        icon: 'fas fa-tractor',
        color: '#27ae60',
        bg: 'rgba(39,174,96,0.1)',
        messages: [
            { user: 'Rajesh Kumar', avatar: 'f1', text: 'Anyone planning cooperative paddy farming this season?', time: '9:30 AM' },
            { user: 'Suresh Patel', avatar: 'f2', text: 'Yes! Last year we grouped 5 farmers and reduced costs by 30%.', time: '9:45 AM' },
            { user: 'Anita Devi', avatar: 'f3', text: 'I am interested. Which village are you from?', time: '10:00 AM' },
        ]
    },
    {
        id: 'group-selling',
        name: '💰 Selling',
        desc: 'Find buyers, discuss market rates, share selling opportunities.',
        icon: 'fas fa-rupee-sign',
        color: '#e67e22',
        bg: 'rgba(230,126,34,0.1)',
        messages: [
            { user: 'Vikram Singh', avatar: 'f4', text: 'Tomatoes going for ₹18/kg at Coimbatore mandi today.', time: '8:00 AM' },
            { user: 'Rajesh Kumar', avatar: 'f1', text: 'Better than yesterday! Last week it was ₹12.', time: '8:15 AM' },
            { user: 'Suresh Patel', avatar: 'f2', text: 'Anyone selling Paddy in bulk? I have a buyer at ₹2100/qtl.', time: '8:30 AM' },
        ]
    },
    {
        id: 'group-fertilizers',
        name: '🧪 Fertilizers',
        desc: 'Ask about fertilizers, chemical vs organic, dosage tips.',
        icon: 'fas fa-flask',
        color: '#9b59b2',
        bg: 'rgba(155,89,182,0.1)',
        messages: [
            { user: 'Anita Devi', avatar: 'f3', text: 'Which organic fertilizer is best for Black soil?', time: '7:00 AM' },
            { user: 'Vikram Singh', avatar: 'f4', text: 'Vermicompost works great. I mix with neem cake.', time: '7:20 AM' },
            { user: 'Rajesh Kumar', avatar: 'f1', text: 'DAP and Urea for kharif. Watch the N-P-K ratio carefully!', time: '7:45 AM' },
        ]
    },
    {
        id: 'group-irrigation',
        name: '💧 Irrigation',
        desc: 'Drip, sprinkler, flood — share irrigation tips and equipment advice.',
        icon: 'fas fa-water',
        color: '#3498db',
        bg: 'rgba(52,152,219,0.1)',
        messages: [
            { user: 'Suresh Patel', avatar: 'f2', text: 'Drip irrigation saved me 40% water this year. Highly recommend!', time: '6:00 AM' },
            { user: 'Anita Devi', avatar: 'f3', text: 'What is the cost to set up drip for 2 acres?', time: '6:20 AM' },
            { user: 'Vikram Singh', avatar: 'f4', text: 'Around ₹25,000-₹35,000. Government subsidy covers 50%!', time: '6:40 AM' },
        ]
    }
];

// Joined groups: stored in localStorage
function getJoinedGroups() {
    return JSON.parse(localStorage.getItem('agri_joined_groups') || '[]');
}
function setJoinedGroups(arr) {
    localStorage.setItem('agri_joined_groups', JSON.stringify(arr));
}

// Group messages stored in localStorage
function getGroupMessages(groupId) {
    const stored = JSON.parse(localStorage.getItem('agri_group_msgs') || '{}');
    const group = communityGroups.find(g => g.id === groupId);
    return stored[groupId] || (group ? group.messages : []);
}
function saveGroupMessage(groupId, msg) {
    const stored = JSON.parse(localStorage.getItem('agri_group_msgs') || '{}');
    if (!stored[groupId]) {
        const group = communityGroups.find(g => g.id === groupId);
        stored[groupId] = group ? [...group.messages] : [];
    }
    stored[groupId].push(msg);
    localStorage.setItem('agri_group_msgs', JSON.stringify(stored));
}

// Render the community groups list
window.renderCommunityView = function() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    const joined = getJoinedGroups();

    let groupsHTML = communityGroups.map(g => {
        const isJoined = joined.includes(g.id);
        return `
        <div class="community-group-card" onclick="openGroupChat('${g.id}')" style="background:white; border-radius:18px; padding:18px; margin-bottom:15px; box-shadow:0 4px 12px rgba(0,0,0,0.05); display:flex; align-items:center; gap:15px; cursor:pointer; border-left:4px solid ${g.color};">
            <div style="width:50px; height:50px; border-radius:14px; background:${g.bg}; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:1.4rem; color:${g.color};">
                <i class="${g.icon}"></i>
            </div>
            <div style="flex:1; min-width:0;">
                <h4 style="font-size:0.95rem; font-weight:700; color:#1e293b; margin-bottom:3px;">${g.name}</h4>
                <p style="font-size:0.78rem; color:#64748b; line-height:1.3; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${g.desc}</p>
            </div>
            <div style="flex-shrink:0; text-align:right;">
                ${isJoined
                    ? `<span style="background:rgba(39,174,96,0.12); color:#27ae60; font-size:0.7rem; font-weight:700; padding:4px 10px; border-radius:8px;">Joined</span>`
                    : `<span style="background:#f1f5f9; color:#64748b; font-size:0.7rem; font-weight:700; padding:4px 10px; border-radius:8px;">Join</span>`
                }
            </div>
        </div>
        `;
    }).join('');

    mainContent.innerHTML = `
        <section style="padding:20px; padding-bottom:90px;">
            <div class="view-header" style="margin-bottom:20px;">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Farmer Community</h2>
            </div>
            <p style="font-size:0.88rem; color:#64748b; margin-bottom:20px;">
                <i class="fas fa-users" style="color:#27ae60;"></i>
                Join a group to discuss and share with fellow farmers.
            </p>
            ${groupsHTML}
        </section>
    `;
};

// Open group chat (join-gated)
window.openGroupChat = function(groupId) {
    const joined = getJoinedGroups();
    const isJoined = joined.includes(groupId);
    const group = communityGroups.find(g => g.id === groupId);
    if (!group) return;

    if (!isJoined) {
        // Show join prompt
        renderGroupJoinPrompt(group);
    } else {
        renderGroupChat(group);
    }
};

function renderGroupJoinPrompt(group) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section style="padding:20px; padding-bottom:90px;">
            <div class="view-header" style="margin-bottom:20px;">
                <button onclick="renderCommunityView()" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>${group.name}</h2>
            </div>
            <div style="background:white; border-radius:20px; padding:30px 20px; text-align:center; box-shadow:0 4px 15px rgba(0,0,0,0.05);">
                <div style="width:70px; height:70px; border-radius:20px; background:${group.bg}; display:flex; align-items:center; justify-content:center; font-size:2rem; color:${group.color}; margin:0 auto 20px;">
                    <i class="${group.icon}"></i>
                </div>
                <h3 style="color:#1e293b; margin-bottom:10px;">${group.name}</h3>
                <p style="color:#64748b; font-size:0.9rem; margin-bottom:25px; line-height:1.5;">${group.desc}</p>
                <div style="background:#f8fafc; border-radius:12px; padding:12px; margin-bottom:25px; text-align:left;">
                    <p style="font-size:0.82rem; color:#475569;"><i class="fas fa-lock" style="color:${group.color}; margin-right:8px;"></i>Join this group to see messages and participate in discussions.</p>
                </div>
                <button onclick="joinGroup('${group.id}')" style="width:100%; background:${group.color}; color:white; border:none; padding:15px; border-radius:14px; font-size:1rem; font-weight:700; cursor:pointer; box-shadow:0 6px 15px rgba(0,0,0,0.1);">
                    <i class="fas fa-plus-circle"></i> Join Group
                </button>
                <button onclick="renderCommunityView()" style="width:100%; background:transparent; color:#64748b; border:1px solid #e2e8f0; padding:12px; border-radius:14px; font-size:0.9rem; cursor:pointer; margin-top:10px;">
                    Maybe Later
                </button>
            </div>
        </section>
    `;
}

window.joinGroup = function(groupId) {
    const joined = getJoinedGroups();
    if (!joined.includes(groupId)) {
        joined.push(groupId);
        setJoinedGroups(joined);
    }
    const group = communityGroups.find(g => g.id === groupId);
    if (group) renderGroupChat(group);
};

function renderGroupChat(group) {
    const mainContent = document.getElementById('main-content');
    const messages = getGroupMessages(group.id);
    const userName = state.user?.name || 'You';

    const msgsHTML = messages.map(m => {
        const isMe = m.user === userName;
        return `
            <div style="display:flex; gap:10px; margin-bottom:14px; ${isMe ? 'flex-direction:row-reverse;' : ''}">
                ${!isMe ? `<img src="https://i.pravatar.cc/150?u=${m.avatar}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; flex-shrink:0;">` : ''}
                <div style="max-width:75%;">
                    ${!isMe ? `<p style="font-size:0.72rem; color:#94a3b8; margin-bottom:3px; font-weight:600;">${m.user}</p>` : ''}
                    <div style="background:${isMe ? group.color : 'white'}; color:${isMe ? 'white' : '#1e293b'}; padding:10px 14px; border-radius:${isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px'}; font-size:0.88rem; box-shadow:0 2px 8px rgba(0,0,0,0.06); line-height:1.4;">${m.text}</div>
                    <p style="font-size:0.68rem; color:#94a3b8; margin-top:3px; ${isMe ? 'text-align:right;' : ''}">${m.time}</p>
                </div>
            </div>
        `;
    }).join('');

    mainContent.innerHTML = `
        <section style="display:flex; flex-direction:column; height:calc(100vh - 80px);">
            <div style="padding:15px 20px; background:white; display:flex; align-items:center; gap:12px; box-shadow:0 2px 10px rgba(0,0,0,0.05); position:sticky; top:0; z-index:10;">
                <button onclick="renderCommunityView()" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <div style="width:40px; height:40px; border-radius:12px; background:${group.bg}; display:flex; align-items:center; justify-content:center; color:${group.color}; font-size:1.1rem;">
                    <i class="${group.icon}"></i>
                </div>
                <div>
                    <h3 style="font-size:0.95rem; font-weight:700; color:#1e293b; margin:0;">${group.name}</h3>
                    <p style="font-size:0.72rem; color:#27ae60; margin:0;">${communityGroups.indexOf(group) >= 0 ? communityGroups.find(g=>g.id===group.id).messages.length + ' members active' : ''}</p>
                </div>
            </div>

            <div id="group-chat-messages" style="flex:1; overflow-y:auto; padding:20px; background:#f4f7f6;">
                ${msgsHTML}
            </div>

            <div style="padding:12px 15px; background:white; display:flex; gap:10px; align-items:center; border-top:1px solid #f1f5f9; position:sticky; bottom:80px;">
                <input id="group-msg-input" type="text" placeholder="Type a suggestion or question..." style="flex:1; border:1px solid #e2e8f0; border-radius:25px; padding:11px 16px; font-family:inherit; font-size:0.9rem; outline:none; background:#f8fafc;">
                <button onclick="sendGroupMessage('${group.id}')" style="width:44px; height:44px; border-radius:50%; background:${group.color}; border:none; color:white; font-size:1.1rem; cursor:pointer; flex-shrink:0; display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </section>
    `;

    // Scroll to bottom
    setTimeout(() => {
        const chatEl = document.getElementById('group-chat-messages');
        if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
    }, 100);
}

window.sendGroupMessage = function(groupId) {
    const input = document.getElementById('group-msg-input');
    if (!input || !input.value.trim()) return;

    const group = communityGroups.find(g => g.id === groupId);
    const userName = state.user?.name || 'You';
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    const msg = {
        user: userName,
        avatar: 'me',
        text: input.value.trim(),
        time: timeStr
    };

    saveGroupMessage(groupId, msg);
    input.value = '';
    renderGroupChat(group);
};

// First-login group suggestion modal
function showGroupSuggestionModal() {
    const alreadyShown = localStorage.getItem('agri_groups_suggested');
    if (alreadyShown) return;

    const overlay = document.createElement('div');
    overlay.id = 'group-suggest-overlay';
    overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.55); z-index:3000; display:flex; align-items:flex-end; justify-content:center;';

    overlay.innerHTML = `
        <div style="background:white; width:100%; max-width:600px; border-radius:30px 30px 0 0; padding:30px 25px 40px; animation:slideUp 0.4s ease;">
            <div style="text-align:center; margin-bottom:20px;">
                <div style="width:60px; height:60px; border-radius:50%; background:rgba(39,174,96,0.1); display:flex; align-items:center; justify-content:center; font-size:1.8rem; margin:0 auto 12px;">🌾</div>
                <h2 style="font-size:1.3rem; color:#1e293b; margin-bottom:6px;">Welcome to AgriNova360!</h2>
                <p style="font-size:0.9rem; color:#64748b; line-height:1.5;">Join farmer groups to get advice, share knowledge, and grow together.</p>
            </div>
            <div id="suggest-groups-list">
                ${communityGroups.map(g => `
                    <div style="display:flex; align-items:center; gap:12px; padding:12px; border-radius:14px; background:#f8fafc; margin-bottom:10px; cursor:pointer;" onclick="quickJoinGroup('${g.id}', this)">
                        <div style="width:42px; height:42px; border-radius:12px; background:${g.bg}; display:flex; align-items:center; justify-content:center; color:${g.color}; font-size:1.2rem; flex-shrink:0;"><i class="${g.icon}"></i></div>
                        <div style="flex:1;">
                            <p style="font-weight:700; font-size:0.9rem; color:#1e293b; margin:0;">${g.name}</p>
                            <p style="font-size:0.75rem; color:#64748b; margin:0;">${g.desc.slice(0,45)}...</p>
                        </div>
                        <div class="join-tick-${g.id}" style="width:28px; height:28px; border-radius:50%; border:2px solid #e2e8f0; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#e2e8f0; font-size:0.8rem;"><i class="fas fa-check"></i></div>
                    </div>
                `).join('')}
            </div>
            <button onclick="dismissGroupSuggestion()" style="width:100%; background:#27ae60; color:white; border:none; padding:15px; border-radius:14px; font-size:1rem; font-weight:700; cursor:pointer; margin-top:10px; box-shadow:0 6px 15px rgba(39,174,96,0.25);">
                Done — Let's Start!
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
    localStorage.setItem('agri_groups_suggested', '1');
}

window.quickJoinGroup = function(groupId, el) {
    const joined = getJoinedGroups();
    const tick = el.querySelector(`.join-tick-${groupId}`);
    if (!joined.includes(groupId)) {
        joined.push(groupId);
        setJoinedGroups(joined);
        if (tick) {
            tick.style.background = '#27ae60';
            tick.style.border = '2px solid #27ae60';
            tick.style.color = 'white';
        }
        el.style.background = 'rgba(39,174,96,0.06)';
    }
};

window.dismissGroupSuggestion = function() {
    const overlay = document.getElementById('group-suggest-overlay');
    if (overlay) overlay.remove();
};

// Override community navigation to use new group view
const _origNavigateTo = window.navigateTo;

// Initial Animation
document.addEventListener('DOMContentLoaded', () => {
    console.log('AgriSmart Initialized');
    if (!state.user) {
        renderRegistration();
    } else {
        navigateTo('dashboard');
        // Show group suggestion on first login
        setTimeout(showGroupSuggestionModal, 800);
    }
});


function logOut() {
    state.user = null;
    localStorage.removeItem('agri_user');
    window.location.reload();
}

// User Dropdown Logic
function toggleUserDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('userDropdown');
    const langDropdown = document.getElementById('langDropdown');
    if (langDropdown) langDropdown.classList.remove('show');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Language Dropdown Logic
function toggleLangDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown) userDropdown.classList.remove('show');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

function changeLanguage(lang, event) {
    if (event) event.stopPropagation();
    
    // Hide dropdown
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('show');
    
    if (lang === 'en') {
        // Clear cookies for english
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${location.hostname}; path=/;`;
    } else {
        // Set google translate cookie
        document.cookie = `googtrans=/en/${lang}; path=/`;
        document.cookie = `googtrans=/en/${lang}; domain=.${location.hostname}; path=/`;
    }
    
    // Reload page to apply google translate
    location.reload();
}

// Close dropdowns when clicking outside
window.addEventListener('click', function(e) {
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown && userDropdown.classList.contains('show') && !e.target.closest('.nav-user')) {
        userDropdown.classList.remove('show');
    }
    
    const langDropdown = document.getElementById('langDropdown');
    if (langDropdown && langDropdown.classList.contains('show') && !e.target.closest('.nav-lang')) {
        langDropdown.classList.remove('show');
    }
});

function changeUnit(unit, btn) {
    document.querySelectorAll('.unit-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = '#64748b';
    });
    btn.classList.add('active');
    btn.style.background = 'white';
    btn.style.color = 'var(--primary-color)';
    console.log(`Unit changed to ${unit}`);
}

function editNutrient(type) {
    const newVal = prompt(`Enter new value for ${type.toUpperCase()} (in grams):`);
    if (newVal !== null && newVal !== "" && !isNaN(newVal)) {
        document.getElementById(`${type}-val`).innerText = newVal + ' g';
    }
}

function showCropSelection() {
    const modal = document.getElementById('crop-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeCropSelection() {
    const modal = document.getElementById('crop-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function selectCrop(name, emoji) {
    const nameEl = document.getElementById('selected-crop-name');
    if (nameEl) {
        nameEl.innerHTML = `${emoji} ${name}`;
    }
    closeCropSelection();
}

window.switchWeatherUnit = function(unit) {
    const tempVal = document.getElementById('main-temp-val');
    const unitC = document.getElementById('unit-c');
    const unitF = document.getElementById('unit-f');
    if (!tempVal) return;
    
    if (unit === 'C') {
        tempVal.innerText = tempVal.getAttribute('data-c') + '°';
        unitC.style.color = 'white';
        unitC.style.fontWeight = 'bold';
        unitF.style.color = '#aaa';
        unitF.style.fontWeight = 'normal';
    } else {
        tempVal.innerText = tempVal.getAttribute('data-f') + '°';
        unitC.style.color = '#aaa';
        unitC.style.fontWeight = 'normal';
        unitF.style.color = 'white';
        unitF.style.fontWeight = 'bold';
    }
};

window.selectWeatherDay = function(el, dayIndex) {
    // Remove active styles from all day cards
    document.querySelectorAll('.weather-day-card').forEach(card => {
        card.style.background = 'transparent';
    });
    // Add active style to selected card
    el.style.background = 'rgba(255,255,255,0.08)';

    // Mock temperature data for past 7 days
    const allTemps = [
        [25, 24, 23, 26, 32, 35, 34, 27], // Today
        [26, 25, 25, 28, 33, 36, 35, 29], // Yesterday
        [24, 23, 22, 25, 30, 32, 31, 26], // 2 days ago
        [22, 21, 20, 24, 29, 31, 30, 25], // 3 days ago
        [23, 22, 21, 25, 31, 33, 32, 27], // 4 days ago
        [25, 24, 23, 27, 32, 34, 33, 28], // 5 days ago
        [26, 25, 24, 28, 34, 36, 35, 29]  // 6 days ago
    ];
    
    const temps = allTemps[dayIndex] || allTemps[0];
    const xs = [0, 14.2, 28.5, 42.8, 57.1, 71.4, 85.7, 100];
    
    // Map temps to Y coords
    const points = temps.map((t, i) => {
        return { x: xs[i], y: 40 - (t - 23) * 2.5, t: t };
    });
    
    // Generate curved path using cubic bezier segments
    let d = `M ${points[0].x},${points[0].y} `;
    for (let i = 1; i < points.length; i++) {
        const pPrev = points[i-1];
        const p = points[i];
        const cp1x = pPrev.x + (p.x - pPrev.x) / 2;
        const cp1y = pPrev.y;
        const cp2x = pPrev.x + (p.x - pPrev.x) / 2;
        const cp2y = p.y;
        d += `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p.x},${p.y} `;
    }
    
    const fillPath = d + ` L 100,50 L 0,50 Z`;

    let html = `
        <!-- Line chart SVG -->
        <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="width:100%; height:100%; position:absolute; top:0; left:0; overflow:visible;">
            <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="rgba(168, 114, 69, 0.45)" />
                    <stop offset="100%" stop-color="rgba(168, 114, 69, 0.0)" />
                </linearGradient>
            </defs>
            <path d="${fillPath}" fill="url(#curveGradient)" />
            <path d="${d}" fill="none" stroke="white" stroke-width="0.8" />
    `;
    
    points.forEach(p => {
        html += `<circle cx="${p.x}" cy="${p.y}" r="1.2" fill="white" />\n`;
        html += `<text x="${p.x}" y="${p.y - 3.5}" fill="white" font-size="3" font-weight="500" text-anchor="middle">${p.t}°</text>\n`;
    });
    
    html += `
            <g transform="translate(42.8, 55)">
                <circle cx="0" cy="0" r="4" fill="#202124" stroke="rgba(255,255,255,0.3)" stroke-width="0.3" />
                <path d="M-1,-1 L0,0.5 L1,-1 M0,-2 L0,0.5" stroke="white" stroke-width="0.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
        <!-- Time labels -->
        <div style="position:absolute; bottom:-25px; left:0; right:0; display:flex; justify-content:space-between; color:#999; font-size:0.75rem;">
            <span style="width:12.5%; text-align:-webkit-left; text-align:left;">12am</span>
            <span style="width:12.5%; text-align:-webkit-center; text-align:center;">3am</span>
            <span style="width:12.5%; text-align:-webkit-center; text-align:center;">6am</span>
            <span style="width:12.5%; text-align:-webkit-center; text-align:center;">9am</span>
            <span style="width:12.5%; text-align:-webkit-center; text-align:center;">12pm</span>
            <span style="width:12.5%; text-align:-webkit-center; text-align:center;">3pm</span>
            <span style="width:12.5%; text-align:-webkit-center; text-align:center;">6pm</span>
            <span style="width:12.5%; text-align:-webkit-right; text-align:right;">9pm</span>
        </div>
    `;
    
    const chartContainer = document.getElementById('weather-time-chart');
    if (chartContainer) {
        chartContainer.innerHTML = html;
    }
};

window.addToCart = function(btn) {
    const card = btn.closest('.amz-product-card');
    const title = card.querySelector('.amz-title').innerText;
    let priceText = card.querySelector('.amz-price').innerText;
    const priceMatch = priceText.match(/₹\s*(\d+)/);
    const price = priceMatch ? parseInt(priceMatch[1]) : 0;
    
    if (!window.agriCart) window.agriCart = [];
    
    const existing = window.agriCart.find(i => i.title === title);
    if (existing) {
        existing.qty++;
    } else {
        window.agriCart.push({ title, price, qty: 1 });
    }
    
    updateCartBadge();
    
    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fas fa-check"></i> Added';
    btn.style.background = '#27ae60';
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = '';
    }, 1500);
};

window.updateCartBadge = function() {
    const countEl = document.getElementById('cart-count');
    if (!countEl) return;
    const totalQty = (window.agriCart || []).reduce((sum, item) => sum + item.qty, 0);
    if (totalQty > 0) {
        countEl.innerText = totalQty;
        countEl.style.opacity = '1';
    } else {
        countEl.style.opacity = '0';
    }
    renderCartItems();
};

window.toggleCart = function() {
    const modal = document.getElementById('cart-modal');
    if (modal) {
        if (modal.style.display === 'none') {
            modal.style.display = 'flex';
            renderCartItems();
        } else {
            modal.style.display = 'none';
        }
    }
};

window.renderCartItems = function() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    if (!container || !totalEl) return;
    
    if (!window.agriCart || window.agriCart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#94a3b8; margin-top:20px;">Your bucket is empty</p>';
        totalEl.innerText = '₹0';
        return;
    }
    
    let html = '';
    let total = 0;
    window.agriCart.forEach((item, index) => {
        total += item.price * item.qty;
        html += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #f1f5f9;">
                <div>
                    <h4 style="font-size:0.95rem; margin-bottom:5px; color:#1e293b;">${item.title}</h4>
                    <span style="color:var(--primary-color); font-weight:600;">₹${item.price}</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <button style="width:25px; height:25px; border-radius:50%; border:1px solid #e2e8f0; background:white; cursor:pointer;" onclick="updateCartQty(${index}, -1)">-</button>
                    <span style="font-weight:600; color:#1e293b;">${item.qty}</span>
                    <button style="width:25px; height:25px; border-radius:50%; border:1px solid #e2e8f0; background:white; cursor:pointer;" onclick="updateCartQty(${index}, 1)">+</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    totalEl.innerText = '₹' + total;
};

window.updateCartQty = function(index, delta) {
    if (window.agriCart[index]) {
        window.agriCart[index].qty += delta;
        if (window.agriCart[index].qty <= 0) {
            window.agriCart.splice(index, 1);
        }
    }
    updateCartBadge();
};

window.checkoutCart = function() {
    if (!window.agriCart || window.agriCart.length === 0) return;
    
    const modal = document.getElementById('buy-now-modal');
    if (modal) {
        const total = window.agriCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        document.getElementById('buy-now-title').innerText = `${window.agriCart.length} Item(s) from Bucket`;
        document.getElementById('buy-now-price').innerText = '₹' + total;
        document.getElementById('buy-now-img').style.backgroundImage = "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80')";
        
        toggleCart();
        modal.style.display = 'flex';
    }
};

window.openBuyNow = function(btn) {
    const card = btn.closest('.amz-product-card');
    const title = card.querySelector('.amz-title').innerText;
    let priceText = card.querySelector('.amz-price').innerText;
    const priceMatch = priceText.match(/₹\s*(\d+)/);
    const price = priceMatch ? parseInt(priceMatch[1]) : 0;
    
    let imgBg = card.querySelector('.amz-prod-img').style.backgroundImage;
    
    const modal = document.getElementById('buy-now-modal');
    if (modal) {
        document.getElementById('buy-now-title').innerText = title;
        document.getElementById('buy-now-price').innerText = '₹' + price;
        document.getElementById('buy-now-img').style.backgroundImage = imgBg;
        modal.style.display = 'flex';
    }
};

window.closeBuyNow = function() {
    const modal = document.getElementById('buy-now-modal');
    if (modal) modal.style.display = 'none';
};

window.placeOrder = function() {
    alert('Order placed successfully via AgriNova!');
    window.agriCart = [];
    updateCartBadge();
    closeBuyNow();
};

window.openAddReminderModal = function() {
    const modal = document.getElementById('add-reminder-modal');
    if (modal) modal.style.display = 'flex';
};

window.closeAddReminderModal = function() {
    const modal = document.getElementById('add-reminder-modal');
    if (modal) modal.style.display = 'none';
};

window.saveReminder = function() {
    const title = document.getElementById('rem-title').value;
    const date = document.getElementById('rem-date').value;
    const time = document.getElementById('rem-time').value;
    const repeat = document.getElementById('rem-repeat').value;
    
    if (!title || !date || !time) {
        alert("Please fill in all details (Title, Date, and Time)!");
        return;
    }
    
    // Format date and time safely
    let dateObj = new Date(date + "T" + time);
    if(isNaN(dateObj)) dateObj = new Date(); // fallback
    let dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    let timeStr = formatAMPM(dateObj);
    
    let repeatText = "";
    if (repeat === '2') repeatText = " • Twice a day";
    else if (repeat === '3') repeatText = " • 3 times a day";
    else if (repeat === 'daily') repeatText = " • Daily";
    else if (repeat === 'weekly') repeatText = " • Weekly";
    
    const list = document.querySelector('.reminder-list');
    const newItem = document.createElement('div');
    newItem.className = 'card reminder-item';
    newItem.innerHTML = `
        <div class="reminder-check" onclick="toggleReminder(this)"><i class="fas fa-circle"></i></div>
        <div class="reminder-text">
            <h4>${title}</h4>
            <p>Scheduled for ${dateStr} at ${timeStr}${repeatText}</p>
        </div>
    `;
    
    list.prepend(newItem);
    
    document.getElementById('rem-title').value = "";
    document.getElementById('rem-date').value = "";
    document.getElementById('rem-time').value = "";
    document.getElementById('rem-repeat').value = "1";
    closeAddReminderModal();
};

window.formatAMPM = function(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

window.toggleAddressEdit = function() {
    const displayMode = document.getElementById('buy-now-display-loc');
    const editMode = document.getElementById('buy-now-edit-loc');
    const currentLoc = document.getElementById('buy-now-loc').innerText;
    const prevLoc = document.getElementById('buy-now-prev-loc');
    
    if(editMode.style.display === 'none') {
        if(prevLoc) prevLoc.innerText = currentLoc;
        displayMode.style.display = 'none';
        editMode.style.display = 'flex';
    } else {
        displayMode.style.display = 'flex';
        editMode.style.display = 'none';
    }
};

window.saveAddress = function() {
    const name = document.getElementById('addr-name').value;
    const mobile = document.getElementById('addr-mobile').value;
    const flat = document.getElementById('addr-flat').value;
    const area = document.getElementById('addr-area').value;
    const city = document.getElementById('addr-city').value;
    const pincode = document.getElementById('addr-pincode').value;
    const state = document.getElementById('addr-state').value;
    
    let parts = [name, flat, area, city, state, pincode].filter(p => p && p.trim() !== '');
    let finalAddr = parts.join(', ');
    if (mobile) finalAddr += ` (Ph: ${mobile})`;
    
    if(!finalAddr || finalAddr.trim() === '') {
        finalAddr = document.getElementById('buy-now-prev-loc').innerText; // fallback
    }
    
    document.getElementById('buy-now-loc').innerText = finalAddr;
    
    document.getElementById('buy-now-edit-loc').style.display = 'none';
    document.getElementById('buy-now-display-loc').style.display = 'flex';
};

window.getLiveLocation = function() {
    const areaInput = document.getElementById('addr-area');
    const cityInput = document.getElementById('addr-city');
    const stateInput = document.getElementById('addr-state');
    
    areaInput.value = "Fetching live location...";
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .then(data => {
                        areaInput.value = "";
                        if(data.city) cityInput.value = data.city;
                        if(data.region) stateInput.value = data.region;
                        if(data.postal) document.getElementById('addr-pincode').value = data.postal;
                    })
                    .catch(() => {
                        areaInput.value = `Lat: ${position.coords.latitude.toFixed(4)}, Lng: ${position.coords.longitude.toFixed(4)}`;
                    });
            },
            err => {
                areaInput.value = "Unable to fetch location.";
            }
        );
    } else {
        areaInput.value = "Geolocation not supported.";
    }
};

// Intercept navigateTo for community to use new groups view
const _nativeNavigateTo = window.navigateTo;
if (typeof navigateTo !== 'undefined') {
    const _origNav = navigateTo;
    navigateTo = function(view, ...args) {
        if (view === 'community') {
            renderCommunityView();
            return;
        }
        _origNav(view, ...args);
    };
}
