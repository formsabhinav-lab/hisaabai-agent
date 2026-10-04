Build a complete working prototype of an agentic personal-finance platform called HisaabAI.

Do not build a mock financial dashboard.

Build the backend, database, AI orchestration, external API adapters, user interface, testing, environment configuration, logging and developer configuration required to demonstrate the full product.

The product must solve the problem:

"Where did my money go?"

The product should not merely categorize transactions. It must reconstruct and preserve transaction context.

CORE PRODUCT:

A user connects financial data through Setu Account Aggregator with appropriate consent.

HisaabAI retrieves transactions.

Each transaction is normalized and enriched.

The system determines:

merchant
counterparty
category
subcategory
purpose
spend type
recurrence
location
confidence
context
user confirmation

If confidence is high:
categorize automatically.

If confidence is low:
ask the user.

Example:

₹18,500 → ABC

System:
"I am not confident what this transaction was for."

User:
"Semester fee."

System:
Save:
Education → Semester Fee
User Confirmed = TRUE

Then recalculate financial summaries.

Build persistent memory.

Build a Safe-to-Spend calculation using actual transaction/commitment data.

Integrate:

SETU AA
SETU INSIGHTS
GNANI/VACHANA
PINE LABS P3P
WHATSAPP
GOOGLE PLACES / GEOCODING
OPENAI OR AN EQUIVALENT TOOL-CALLING LLM

ARCHITECTURE RULES:

Setu = financial-data rail.

Pine Labs = payment/action rail.

Gnani = voice rail.

WhatsApp = communication channel.

Google Maps APIs = merchant/location enrichment.

PostgreSQL = application memory.

LLM = reasoning and classification.

Deterministic backend functions = calculations and financial totals.

The LLM must never invent transaction data or calculate financial totals from memory.

Implement API adapters separately.

Use environment variables for all credentials.

Support sandbox and production environments.

Clearly label DEMO, SANDBOX and LIVE data.

Never present sandbox data as a real user's bank transaction.

IMPORTANT LOCATION FEATURE:

A bank transaction does not necessarily provide the user's physical GPS location.

Support three location evidence levels:

1. Device-confirmed location
2. Merchant-associated location
3. AI inference

Never claim inferred location as confirmed.

Use Google Places/Geocoding to resolve merchant location where possible.

Store source and confidence.

EXTENSIVE CATEGORIZATION:

Use hierarchical categorization.

Examples:

Food
→ Dining
→ Restaurant
→ Dinner

Education
→ University
→ Semester Fee

Transport
→ Ride-hailing
→ Cab

P2P
→ Reimbursement
→ Friend

P2P
→ Loan
→ Family

Financial
→ EMI
→ Education Loan

Subscriptions
→ OTT
→ Monthly

Each transaction should also have:

Essential / Discretionary / Financial Obligation

One-time / Recurring

Merchant / Person / Institution / Self

High / Medium / Low confidence

Build an editable taxonomy.

MEMORY:

Distinguish:

observed facts
AI inferences
user-confirmed facts
system-derived insights

Only confirmed user information should become durable high-confidence personal context.

HUMAN-IN-THE-LOOP:

Provide a clarification interface.

Example:

"I found ₹18,500 sent to ABC.
What was this for?"

Choices:

Semester fee
Reimbursement
Friend/family
Loan
Gift
Other

Allow natural-language responses.

VOICE:

Integrate Gnani STT and TTS.

Support English, Hindi and Hinglish.

Provide text fallback.

WHATSAPP:

Create webhook-based conversational integration.

PINE LABS:

Create a sandbox payment adapter.

Payment execution must be disabled when credentials are missing.

Never fake a payment result.

Use actual P3P challenge/authorization/payment/receipt flow based on the official Pine Labs documentation.

MCP:

Expose important HisaabAI capabilities through MCP if the chosen framework supports it.

DATABASE:

Use PostgreSQL.

Tables/entities:

users
accounts
consents
transactions
merchants
categories
transaction_contexts
locations
memories
clarification_requests
recurring_expenses
safe_to_spend_snapshots
conversation_messages
voice_sessions
payment_intents
payment_receipts
audit_events
integration_health

DASHBOARD:

Build:

Home
Transactions
Timeline
Memory
Insights
Locations
Clarifications
Voice
Payments
Developer/Integrations

The transaction timeline should show:

date
time
merchant/person
amount
category
purpose
location
confidence
context
source

CORE DEMONSTRATION:

User asks:

"Where did my money go?"

System:
fetches transactions

System:
categorizes them

System:
finds an ambiguous P2P transfer

System:
asks user

User:
"That was my semester fee."

System:
updates memory

System:
recalculates

User:
"Where did I make the ₹860 payment?"

System:
uses transaction time + merchant/location evidence

User:
"How much can I safely spend?"

System:
calculates and explains

User:
"Pay my bill."

System:
uses Pine Labs only if an authorized sandbox/payment configuration exists.

QUALITY REQUIREMENTS:

No fake integrations.

No hard-coded financial results.

No secrets in frontend.

No secrets in Git.

No invented GPS.

No invented merchants.

No silent classification of ambiguous transactions.

No autonomous payment without authorization.

All calculations reproducible.

All external APIs have timeout/retry/error handling.

All webhooks are idempotent.

All sensitive logs masked.

Create:

README
ARCHITECTURE
ENVIRONMENT
API_DOCUMENTATION
DATABASE
DEMO_GUIDE
TESTING
SECURITY

Use official provider documentation as the source of truth for endpoint paths, authentication, request schemas and responses.

If an API is unavailable because credentials/onboarding are missing, implement the real integration boundary and a clearly marked sandbox/demo path rather than pretending the integration is live.

The finished application must be deployable and must provide a repeatable end-to-end demo.

see , everything is fine but i want this hisaab ai in such a way that its a inbuilt feature of any payment app okay, like if any person want to go through the additional features like if they want to manage there personal finance to check where is money go , they could click on this hisaab ai and will get there to see where and what has happened as provided in the above prompt. second thing is that i want this prototype to be connected with my gmail id, whatsapp or the telegram, genani voice ai to be added becaouse i have to show the triggering point where it actually happening the voice is asking me hye what kind of transaction is it . and i am too replying it in the voice or by chatting . also its triggering my whatsapp or the telegram with the pop notification with the same query if at that moment i am not able to answer and response there query so that in the given time i could answer it on whatsapp too and so . apart from this i want to coonect it with my google sheet in such a way that its live updating its sheets according to my expenses and everything . so that i could just click it and check it and at the end of the month the updated sheet automatically comes in my whatsapp messages form from the hisaab ai . also change the name hisaab to hisaab ai. apart from this i have to show or answer this following questions very clearly by making the prototype :-

Run A Simulation Of Your Agent, Then Build The Business Around It

In Round 2 you designed your agent on paper. This round has two parts. First you run a simulation of your agent. Then you work out which company turns it into a business, and how.

You’ll build the simulation, using a method called Wizard of Oz. The parts that can run, run. The parts that don’t exist yet are played by someone behind a curtain.

Your agent is the part that runs. It’s an AI model like Claude or Gemini, following a system prompt you write, and it makes every decision on its own. Wherever the model can connect to something directly, like Gmail, WhatsApp or Google Sheets, connect it. Everything else is played by a team member behind the curtain:
What Your Agent Connects To

Gnani: run the audio or text through Gnani’s API yourself, and paste back exactly what Gnani returns.
Pine Labs and Delhivery: reply with the response their documentation says they’d send.
Anything else from the outside world, like a voice note arriving or the clock hitting 5 PM: a team member feeds it in. It must come from a real source. If no real source produces it today, your agent can’t have it.
The person behind the curtain never helps the agent think. They only play the world around it. If your agent needs someone to tell it what to do next, it isn’t an agent yet.
Recording Your Simulation

Record your screen while your agent runs from the first thing that happens to the moment your agent’s outcome is achieved.
The recording must show every input arriving, every call your agent makes to Gnani, Pine Labs or Delhivery and the response that comes back, and every message your agent sends to a person.
Keep it to 5 minutes at most. Fast-forward the parts where the model is thinking.
Share the link, along with your system prompt and the name of the model you used.
Questions To Answer

Part 1: Your Agent

Tell the story of one person using your agent. Name them, name the date, and tell it in the order it happens, the way you’d explain it to a friend. Say what they see, what they say, and what your agent does in reply. 100 words at most.

Then list every decision your agent makes in the recording, in order. A decision is any point where your agent picks one thing over another. For each one, give:

When: the date and time.
What the agent received: the input that triggered the decision.
Where it came from: the connector, and the real source behind it.
What it decided.
Why: the rule in your system prompt it followed.
What it did or said, and to whom: the actual message or action, word for word.
Through what: the connector.
What does your agent know on day one, before anyone has used it? Who gives it that information, and how?

For every call your agent makes to Pine Labs, Delhivery or Gnani, name the exact endpoint from their documentation, and share the request and response. You can imagine up to 3 capabilities that don’t exist yet. List them separately. For each one, name the partner, write the endpoint, and tell us what data that partner already holds that makes it possible.

Show us a mockup of every screen or conversation where your agent meets a person, whether that’s a WhatsApp chat, a call script, an app screen or a notification.

Score each rail out of 10 on how agent-ready it is, and give one reason for each score.
Part 2: Build The Business Around Your Agent

If your agent works, which company turns it into a business, and how?

Where does your agent live, and how does a customer start using it? Is it its own app, a feature inside another company’s app (name the app), a WhatsApp number, or something else?
Which company should build it, and why them? What do they already have that nobody else does? Why haven’t they built it yet?
Who will they sell it to, and how will they make money from it? What do those customers do today instead, and what does that cost them? Will the customer pay, or will the company earn from something else, like more orders?
How will the agent get its first 1,000 users? This is the question we care about most, so be as inventive as you like. Where do these people already spend time, and what gets someone to try it the first time? What keeps them using it after three weeks?
Make the landing page for the agent the way the company you named above would, with a call to action to sign up, and share the link.
What could kill this agent in its first year?