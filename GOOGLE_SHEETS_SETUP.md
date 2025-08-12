# Google Sheets Setup for Wedding Website

## Overview
This guide will help you set up Google Sheets integration for:
1. **Guest List Management** - Where Angela can add/manage guests
2. **RSVP Response Database** - Where all adventure planning responses are stored

## Prerequisites
- Google account
- Access to Google Sheets
- Google Cloud Console access for service account creation

## Step 1: Create the Google Sheets

### Sheet 1: Guest List Management
1. Create a new Google Sheet named **"Wedding Guest List"**
2. Set up the first sheet with these exact column headers in row 1:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| ID | First Name | Last Name | Email | Category | Notes | Is Admin |

3. Name this sheet tab **"Guest_List"** (exact spelling matters)

### Sheet 2: RSVP Responses Database  
1. In the same Google Sheet, create a second sheet tab
2. Name it **"RSVP_Responses"** (exact spelling matters)
3. Set up these column headers in row 1:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | AA | BB | CC | DD | EE | FF | GG | HH | II | JJ | KK | LL | MM | NN | OO | PP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Guest ID | First Name | Last Name | Email | Total Guests | Adults | Children | Children Ages | Dietary Restrictions | Special Requests | Day1 Arrival Time | Day1 Accommodation | Day1 Transportation | Day1 Special Requests | Day1 Excitement | Day2 Wedding Attendance | Day2 Ceremony Seating | Day2 Reception Activities | Day2 Photography | Day2 Special Moments | Day2 Energy Level | Day3 Recovery Plan | Day3 Outdoor Activities | Day3 Hiking Level | Day3 Group Activities | Day3 Relaxation | Day3 Energy Recovery | Day4 Farewell Style | Day4 Group Memories | Day4 Final Activities | Day4 Memorabilia | Day4 Future Connections | Day4 Overall Experience | Day4 Special Moments | Day5 Departure Time | Day5 Transportation Needs | Day5 Final Wishes | Day5 Testimonial | Day5 Future Events | Day5 Gratitude | Day5 Stay Connected | Day5 Final Rating | Completed At |

## Step 2: Get Sheet IDs
1. Open your Google Sheet
2. Copy the URL - it looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. The SHEET_ID is the long string between `/d/` and `/edit`
4. Save this ID - you'll need it for environment variables

## Step 3: Create Google Cloud Service Account

### 3.1 Create Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Note the Project ID

### 3.2 Enable Sheets API
1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 3.3 Create Service Account
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Name: `wedding-website-sheets`
4. Description: `Service account for wedding website Google Sheets integration`
5. Click "Create and Continue"

### 3.4 Generate Service Account Key
1. Click on the created service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Download the JSON file - **KEEP THIS SECURE!**

### 3.5 Share Sheets with Service Account
1. Open the JSON file and find the `client_email` field
2. Copy this email address
3. In your Google Sheet, click "Share"
4. Add the service account email with "Editor" permissions

## Step 4: Environment Variables Setup

Create/update your `.env.local` file with these variables from the JSON file:

```env
# Google Sheets Service Account Credentials
GOOGLE_TYPE=service_account
GOOGLE_PROJECT_ID=your-project-id-here
GOOGLE_PRIVATE_KEY_ID=your-private-key-id-here
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour-private-key-here\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your-client-id-here

# Sheet IDs (same spreadsheet, different tabs)
GUEST_LIST_SHEET_ID=your-sheet-id-here
RSVP_RESPONSES_SHEET_ID=your-sheet-id-here
```

### Important Notes:
- The `GUEST_LIST_SHEET_ID` and `RSVP_RESPONSES_SHEET_ID` should be the SAME (it's the same spreadsheet)
- The `GOOGLE_PRIVATE_KEY` should include the actual line breaks (`\n`)
- Keep the JSON file secure and never commit it to version control

## Step 5: Add to Vercel Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each environment variable from your `.env.local` file
5. Make sure to add them for all environments (Production, Preview, Development)

## Step 6: Angela's Guest Management Workflow

### Adding Guests
Angela can add guests by filling in the **Guest_List** sheet:

**Example entries:**
| ID | First Name | Last Name | Email | Category | Notes | Is Admin |
|---|---|---|---|---|---|---|
| smith-001 | John | Smith | john@email.com | friends | College buddy | FALSE |
| jones-002 | Sarah | Jones | sarah@email.com | family | Cousin + 2 kids | FALSE |
| admin-001 | Kevin | Gorham | kevin@email.com | admin | Developer | TRUE |

### Adding Children
For families with children, Angela can:
1. **Option 1**: List in Notes column: `"Mom + Dad + 2 kids (ages 5, 8)"`
2. **Option 2**: Add separate rows for each family member:
   - Parent: `smith-001 | John | Smith | john@email.com | family | Father | FALSE`
   - Spouse: `smith-002 | Jane | Smith | jane@email.com | family | Mother | FALSE`
   - Child: `smith-003 | Tommy | Smith | | family | Son, age 5 | FALSE`

### Categories
- `family` - Immediate family members
- `friends` - Friends of the couple  
- `colleagues` - Work colleagues
- `plus-one` - Plus-one guests
- `admin` - Administrative users (developers, coordinators)

## Step 7: Testing the Integration

1. Make sure all environment variables are set in Vercel
2. Deploy your latest code
3. Test the guest check-in with a name from your Guest_List sheet
4. Complete the adventure flow and submit
5. Check the RSVP_Responses sheet to see the data

## Troubleshooting

### Common Issues:
1. **"Failed to fetch guest list"** - Check sheet name is exactly "Guest_List"
2. **"Failed to submit RSVP"** - Check sheet name is exactly "RSVP_Responses"  
3. **Authentication errors** - Verify service account has editor access to the sheet
4. **Environment variable errors** - Double-check all variables are set correctly in Vercel

### Testing Locally:
1. Add variables to `.env.local`
2. Run `npm run dev`
3. Test the integration
4. Check your Google Sheet for data

## Security Notes
- Never commit the service account JSON file to version control
- The service account email should only have access to the specific spreadsheet
- Consider creating a dedicated Google account for wedding management
- Regularly review who has access to the spreadsheet

## Data Privacy
- Guest email addresses and personal information are stored in Google Sheets
- Make sure Angela understands she's responsible for this data
- Consider adding a privacy notice to your website
- Only collect necessary information

This setup gives Angela full control over guest management while automatically capturing all RSVP responses!
