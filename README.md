 An AI-powered platform to reward sustainable practices in Kenya with digital credits.

 ## Overview
 EcoRewardsKE incentivizes eco-friendly actions (e.g., recycling, using public transport) by offering digital credits redeemable for discounts or services via M-Pesa. It uses AI for personalized action recommendations, fraud detection (e.g., verifying recycling photos), and behavioral nudging.

 ## Folder Structure
 - `frontend/`: React app for user interface (action logging, rewards display).
 - `backend/`: Django backend for APIs, user management, and rewards logic.
 - `ai-models/`: AI scripts for recommendations and fraud detection.
 - `docs/`: Documentation, including architecture details.

 ## Setup Instructions
 1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Thesurgent/EcoRewardsKE.git
    cd EcoRewardsKE
    ```
 2. **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    npm start
    ```
    Opens the React app at `http://localhost:3000`.
 3. **Backend Setup** (not yet implemented):
    ```bash
    cd backend
    pip install -r requirements.txt
    python manage.py runserver
    ```
 4. See `docs/ARCHITECTURE.md` for technical details.

 ## Next Steps
 - Develop Django models for users, eco actions, and rewards.
 - Build React components for action submission and rewards dashboard.
 - Implement AI recommendation system using scikit-learn.

 ## Contributing
 Feel free to open issues or submit pull requests. Contact the team for collaboration.

 ## License
 MIT License (see `LICENSE` file).
