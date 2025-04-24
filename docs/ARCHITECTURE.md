# EcoRewardsKE Architecture
## Components
- **Backend**: Django + Django REST Framework for APIs, PostgreSQL for data storage.
- **Frontend**: React for mobile-friendly UI, integrated with M-Pesa for payments.
- **AI**: Scikit-learn for recommendations, TensorFlow Lite for fraud detection (image verification).
- **Integrations**: M-Pesa API, local recycling partners (e.g., TakaTaka Solutions).

## Data Flow
1. User logs eco action (e.g., recycling) via frontend.
2. Backend verifies action (with AI for image/location checks).
3. AI recommends next actions and awards credits.
4. User redeems credits via M-Pesa or partner discounts.

## Scalability
- Use lightweight AI models for low-resource devices.
- Optimize for offline use in rural Kenya.
