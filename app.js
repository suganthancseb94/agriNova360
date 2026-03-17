// Application State
const state = {
    currentView: 'dashboard',
    registrationStep: 1, // 1: Login, 2: Phone, 3: Username, 4: Land Details, 5: Location
    user: JSON.parse(localStorage.getItem('agri_user')) || null
};

// Simplified Registration Logic
let generatedOtp = '';

function validateStep1AndNext() {
    const name = document.getElementById('reg-name')?.value;
    const email = document.getElementById('reg-email')?.value;
    const phone = document.getElementById('reg-phone')?.value;
    const stateLoc = document.getElementById('reg-state')?.value;
    const district = document.getElementById('reg-district')?.value;
    const pincode = document.getElementById('reg-pincode')?.value;

    if (name && email && phone && stateLoc && district && pincode) {
        state.tempUser = { name, email, phone, stateLoc, district, pincode };
        nextRegStep();
    } else {
        alert("Please fill all details to proceed.");
    }
}

function validateStep2AndSendOtp() {
    const areaSoil = document.getElementById('reg-area-soil')?.value;
    const landSoil = document.getElementById('reg-land-soil')?.value;
    const acres = document.getElementById('reg-acres')?.value;

    if (areaSoil && landSoil && acres) {
        state.tempUser = { ...state.tempUser, areaSoil, landSoil, acres };
        generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
        alert(`OTP sent to ${state.tempUser.phone}: ${generatedOtp}`);
        nextRegStep();
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

function verifyOtpAndComplete() {
    const otp = document.getElementById('reg-otp').value;
    if(otp && otp === generatedOtp) {
        completeRegistration();
    } else if (otp) {
        alert("Invalid OTP! Please try again.");
    } else {
        alert("Please enter OTP.");
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
                <input type="text" id="reg-state" placeholder="State" style="margin-bottom: 10px;">
                <input type="text" id="reg-district" placeholder="District" style="margin-bottom: 10px;">
                <input type="text" id="reg-pincode" placeholder="Pincode" style="margin-bottom: 15px;">
                <button class="primary-btn" onclick="validateStep1AndNext()">Next</button>
                <p style="margin-top: 15px; font-size: 0.9rem;">Already have an account? <a href="#" onclick="showLogin(); return false;" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">Login</a></p>
            </div>
        </div>
        `,
        `
        <div class="auth-card">
            <h3 style="margin-bottom: 15px;">Farm Details</h3>
            <input type="text" id="reg-area-soil" placeholder="Types of soil in your area" style="margin-bottom: 10px;">
            <input type="text" id="reg-land-soil" placeholder="Types of soil in your land" style="margin-bottom: 10px;">
            <input type="number" id="reg-acres" placeholder="How many acres you are having?" style="margin-bottom: 15px;">
            <button class="primary-btn" onclick="validateStep2AndSendOtp()">Next</button>
        </div>
        `,
        `
        <div class="auth-card">
            <h3 style="margin-bottom: 15px;">Verify Mobile Number</h3>
            <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 15px;">We have sent an OTP to your mobile number.</p>
            <input type="text" id="reg-otp" placeholder="Enter OTP" style="margin-bottom: 15px; text-align: center; letter-spacing: 2px;">
            <button class="primary-btn" onclick="verifyOtpAndComplete()">Verify & Start</button>
        </div>
        `
    ];

    document.getElementById('main-content').innerHTML = `
        <section class="auth-view">
            ${steps[state.registrationStep - 1]}
            <div class="reg-progress">
                <div class="progress-dot ${state.registrationStep >= 1 ? 'active' : ''}"></div>
                <div class="progress-dot ${state.registrationStep >= 2 ? 'active' : ''}"></div>
                <div class="progress-dot ${state.registrationStep >= 3 ? 'active' : ''}"></div>
            </div>
        </section>
    `;
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

            <!-- Library Section -->
            <div class="section-title" style="margin-top: 25px; margin-bottom: 15px;">
                <h3 style="font-size: 1.2rem; font-weight: 700; color: #1e293b;">Library</h3>
            </div>
            <div class="library-grid">
                <div class="lib-card" onclick="navigateTo('library', 'Paddy')">
                    <div class="lib-icon"><i class="fas fa-seedling"></i></div>
                    <p>Paddy<br>Library</p>
                </div>
                <div class="lib-card" onclick="navigateTo('library', 'Wheat')">
                    <div class="lib-icon"><i class="fas fa-wheat-awn"></i></div>
                    <p>Wheat<br>Library</p>
                </div>
                <div class="lib-card" onclick="navigateTo('library', 'Soil')">
                    <div class="lib-icon"><i class="fas fa-flask-vial"></i></div>
                    <p>Soil<br>Library</p>
                </div>
                <div class="lib-card" onclick="navigateTo('library', 'Organic')">
                    <div class="lib-icon"><i class="fas fa-leaf"></i></div>
                    <p>Organic<br>Library</p>
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
    < section class="library-view" >
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Knowledge Center</h2>
            </div>
            <div class="category-scroll">
                <button class="cat-chip active">All</button>
                <button class="cat-chip">Paddy</button>
                <button class="cat-chip">Wheat</button>
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
            <button class="primary-btn" style="margin-top:20px">+ Add Reminder</button>
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
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2>Agri Shop</h2>
            </div>

            <!-- Shop Tabs -->
            <div class="shop-tabs">
                <button class="shop-tab active" onclick="switchShopTab(this, 'tab-products')">
                    <i class="fas fa-box-open"></i> Products
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Wheat Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2626)</span></div>
                                <div class="amz-price">₹1420 <small>₹1714</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Vegetable Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2444)</span></div>
                                <div class="amz-price">₹1899 <small>₹2197</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Hybrid Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2915)</span></div>
                                <div class="amz-price">₹461 <small>₹632</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Fruit Seeds</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(618)</span></div>
                                <div class="amz-price">₹438 <small>₹584</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Urea</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(838)</span></div>
                                <div class="amz-price">₹1744 <small>₹1833</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">DAP (Di-Ammonium Phosphate)</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(377)</span></div>
                                <div class="amz-price">₹1082 <small>₹1379</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Potash</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(883)</span></div>
                                <div class="amz-price">₹628 <small>₹903</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Bio Fertilizers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1242)</span></div>
                                <div class="amz-price">₹942 <small>₹1193</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Fungicides</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(487)</span></div>
                                <div class="amz-price">₹1068 <small>₹1362</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Herbicides</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1297)</span></div>
                                <div class="amz-price">₹1852 <small>₹2077</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Organic Pest Control</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2451)</span></div>
                                <div class="amz-price">₹1102 <small>₹1400</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Sprayers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1870)</span></div>
                                <div class="amz-price">₹415 <small>₹655</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Harvesters</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2558)</span></div>
                                <div class="amz-price">₹1112 <small>₹1218</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Irrigation Pumps</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1227)</span></div>
                                <div class="amz-price">₹654 <small>₹872</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Hand Tools</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(882)</span></div>
                                <div class="amz-price">₹876 <small>₹1109</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Sprinklers</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1209)</span></div>
                                <div class="amz-price">₹1238 <small>₹1309</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Water Pumps</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2057)</span></div>
                                <div class="amz-price">₹913 <small>₹1093</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Pipes and Fittings</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1215)</span></div>
                                <div class="amz-price">₹1270 <small>₹1360</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Crop Protection Chemicals</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2649)</span></div>
                                <div class="amz-price">₹490 <small>₹762</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Disease Control Products</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(838)</span></div>
                                <div class="amz-price">₹1653 <small>₹1714</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Poultry Feed</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1045)</span></div>
                                <div class="amz-price">₹399 <small>₹692</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Veterinary Medicines</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(959)</span></div>
                                <div class="amz-price">₹1741 <small>₹1859</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
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
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c1b?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Grain Storage Bins</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(2413)</span></div>
                                <div class="amz-price">₹496 <small>₹671</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                            <div class="amz-product-card">
                            <div class="amz-prod-img" style="background-image: url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=200&q=80')"></div>
                            <div class="amz-info">
                                <h4 class="amz-title">Packaging Material</h4>
                                <div class="amz-rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> <span>(1553)</span></div>
                                <div class="amz-price">₹1277 <small>₹1576</small></div>
                                <div class="amz-desc">Premium quality. 100% genuine.</div>
                                <button class="amz-add-btn">Add to Cart</button>
                            </div>
                        </div>
                        </div>
                    </div>

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
            <div class="view-header">
                <button onclick="navigateTo('dashboard')" class="back-btn"><i class="fas fa-arrow-left"></i></button>
                <h2 style="font-weight: 800; font-size: 1.5rem;">Fertilizer Calculator</h2>
            </div>
            
            <div class="crop-selector-inline">
                <span>See relevant information on</span>
                <div class="selector-box">
                    <span>🍌 Banana</span>
                    <i class="fas fa-chevron-down"></i>
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
                        <span class="label">N:</span>
                        <strong id="n-val">150 g</strong>
                        <small>150 g/tree</small>
                    </div>
                    <div class="n-card">
                        <span class="label">P:</span>
                        <strong id="p-val">63 g</strong>
                        <small>63 g/tree</small>
                    </div>
                    <div class="n-card">
                        <span class="label">K:</span>
                        <strong id="k-val">375 g</strong>
                        <small>375 g/tree</small>
                    </div>
                </div>
            </div>

            <div class="tree-counter-section">
                <h3>Number of trees</h3>
                <div class="counter-control">
                    <button class="count-btn" onclick="updateFertilizerCount(-1)"><i class="fas fa-minus"></i></button>
                    <div class="count-display">
                        <strong id="tree-count">1</strong>
                        <span>Trees</span>
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
                <h2 style="color:white; font-size:1.1rem; font-weight:600; margin:0;">Kallakurichi, India</h2>
            </div>
            
            <div class="weather-main-info" style="margin-bottom:30px;">
                <div style="display:flex; align-items:flex-start;">
                    <h1 style="font-size:4.8rem; font-weight:500; line-height:1; letter-spacing:-2px; margin:0;">28°</h1>
                    <div style="margin-top:10px; margin-left:10px; font-size:1.1rem; color:#aaa; font-weight:500;">
                        <span style="color:white;">C</span> / <span>F</span>
                    </div>
                </div>
                <p style="font-size:1.15rem; margin-top:10px; color:#e8eaed; font-weight:300;">Sunny much of the time</p>
            </div>

            <div class="weather-forecast-scroll" style="display:flex; gap:12px; overflow-x:auto; padding-bottom:15px; margin-bottom:35px; scrollbar-width:none; -webkit-overflow-scrolling:touch;">
                <div style="background:rgba(255,255,255,0.08); padding:15px; border-radius:12px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:600;">Thu</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">35°</p>
                    <p style="color:#aaa; font-size:0.85rem;">22°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Fri</p>
                    <i class="fas fa-smog" style="font-size:1.5rem; color:#e67e22; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">36°</p>
                    <p style="color:#aaa; font-size:0.85rem;">23°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Sat</p>
                    <i class="fas fa-smog" style="font-size:1.5rem; color:#e67e22; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">36°</p>
                    <p style="color:#aaa; font-size:0.85rem;">23°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Sun</p>
                    <i class="fas fa-smog" style="font-size:1.5rem; color:#e67e22; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">36°</p>
                    <p style="color:#aaa; font-size:0.85rem;">24°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Mon</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">36°</p>
                    <p style="color:#aaa; font-size:0.85rem;">24°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Tue</p>
                    <i class="fas fa-smog" style="font-size:1.5rem; color:#e67e22; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">36°</p>
                    <p style="color:#aaa; font-size:0.85rem;">25°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Wed</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">35°</p>
                    <p style="color:#aaa; font-size:0.85rem;">23°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Thu</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">37°</p>
                    <p style="color:#aaa; font-size:0.85rem;">23°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Fri</p>
                    <i class="fas fa-cloud-showers-heavy" style="font-size:1.5rem; color:#3498db; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">34°</p>
                    <p style="color:#aaa; font-size:0.85rem;">21°</p>
                </div>
                <div style="padding:15px; text-align:center; min-width:70px;">
                    <p style="margin-bottom:12px; font-size:0.9rem; font-weight:500; color:#ddd;">Sat</p>
                    <i class="fas fa-cloud-sun" style="font-size:1.5rem; color:#f39c12; margin-bottom:15px;"></i>
                    <p style="font-weight:600; font-size:1rem; margin-bottom:6px;">37°</p>
                    <p style="color:#aaa; font-size:0.85rem;">20°</p>
                </div>
            </div>

            <div class="weather-chart-section" style="border-top:1px solid rgba(255,255,255,0.08); padding-top:25px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:40px;">
                    <h3 style="font-size:0.95rem; font-weight:600; color:white;">Temperature <i class="fas fa-chevron-down" style="font-size:0.7rem; margin-left:5px; color:#aaa;"></i></h3>
                </div>
                
                <div style="position:relative; height:120px; width:100%; overflow:visible;">
                    <!-- Line chart SVG -->
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none" style="width:100%; height:100%; position:absolute; top:0; left:0; overflow:visible;">
                        <defs>
                            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="rgba(168, 114, 69, 0.45)" />
                                <stop offset="100%" stop-color="rgba(168, 114, 69, 0.0)" />
                            </linearGradient>
                        </defs>
                        <!-- The area under the curve -->
                        <path d="M0,50 L0,35 C 7,36 7,37 14.2,37.5 C 21,38 21,40 28.5,40 C 35,40 35,32.5 42.8,32.5 C 50,32.5 50,17.5 57.1,17.5 C 64,17.5 64,10 71.4,10 C 78,10 78,12.5 85.7,12.5 C 92,12.5 92,30 100,30 L 100,50 Z" fill="url(#curveGradient)" />
                        
                        <!-- The line curve  -->
                        <path d="M 0,35 C 7,36 7,37 14.2,37.5 C 21,38 21,40 28.5,40 C 35,40 35,32.5 42.8,32.5 C 50,32.5 50,17.5 57.1,17.5 C 64,17.5 64,10 71.4,10 C 78,10 78,12.5 85.7,12.5 C 92,12.5 92,30 100,30" fill="none" stroke="white" stroke-width="0.8" />
                        
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
    if (!views[view] && view !== 'dashboard') {
        alert(`Feature "${view}" is under development!`);
        return;
    }

    const mainContent = document.getElementById('main-content');
    const bottomNav = document.querySelector('.bottom-nav');

    bottomNav.style.display = view === 'auth' ? 'none' : 'flex';
    mainContent.style.opacity = '0';

    setTimeout(() => {
        let content = views[view] || views['dashboard'];

        // Dynamic Library Title & Content
        if (view === 'library' && category) {
            content = content.replace('Knowledge Center', `${category} Library`);

            // Demo Content based on category
            let demoDocs = '';
            if (category === 'Paddy') {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Paddy Cultivation Guide</h4><p>1.2 MB • PDF</p></div>
                    </div>
                    <div class="card doc-card">
                        <i class="fas fa-file-video" style="color:#e67e22"></i>
                        <div class="doc-info"><h4>Seed Treatment Video</h4><p>5.4 MB • MP4</p></div>
                    </div>`;
            } else if (category === 'Wheat') {
                demoDocs = `
                    <div class="card doc-card">
                        <i class="fas fa-file-pdf pdf-icon"></i>
                        <div class="doc-info"><h4>Wheat Rust Control</h4><p>950 KB • PDF</p></div>
                    </div>
                    <div class="card doc-card">
                        <i class="fas fa-file-word word-icon"></i>
                        <div class="doc-info"><h4>Sowing Best Practices</h4><p>250 KB • DOCX</p></div>
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

// Initial Animation
document.addEventListener('DOMContentLoaded', () => {
    console.log('AgriSmart Initialized');
    if (!state.user) {
        renderRegistration();
    } else {
        navigateTo('dashboard');
    }
});

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
