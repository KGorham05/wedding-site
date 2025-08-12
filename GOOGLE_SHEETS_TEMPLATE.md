# Google Sheets Template for Angela & Jeff's Wedding

## 📋 Quick Setup Checklist

✅ **Step 1:** Create a Google Sheet named "Angela & Jeff Wedding 2026"  
✅ **Step 2:** Create two tabs with exact names: `Guest_List` and `RSVP_Responses`  
✅ **Step 3:** Copy the column headers below into each tab  
✅ **Step 4:** Set up Google Service Account and share sheet  
✅ **Step 5:** Add environment variables to Vercel  

---

## 📊 Tab 1: Guest_List

**Purpose:** This is your master guest list where you add/manage all invited guests.

### Column Headers (Row 1):
Copy these **exact** column headers into row 1 of the "Guest_List" tab:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| ID | First Name | Last Name | Email | Category | Notes | Is Admin |

### Sample Data (Rows 2+):
Here are examples of how to fill in your guest data:

| ID | First Name | Last Name | Email | Category | Notes | Is Admin |
|---|---|---|---|---|---|---|
| ang-001 | Sarah | Johnson | sarah.j@email.com | family | Angela's sister, has 2 kids | FALSE |
| ang-002 | Mike | Johnson | mike.j@email.com | family | Angela's brother | FALSE |
| jeff-001 | Jessica | Williams | jess.w@email.com | family | Jeff's sister | FALSE |
| friend-001 | Emma | Davis | emma.d@email.com | friends | College roommate | FALSE |
| friend-002 | Ryan | Martinez | ryan.m@email.com | friends | Work colleague | FALSE |
| admin-001 | Angela | Pinamonit | angela@email.com | admin | Bride | TRUE |
| admin-002 | Jeff | Schweizer | jeff@email.com | admin | Groom | TRUE |
| dev-001 | Kevin | Gorham | kevin@email.com | admin | Website developer | TRUE |

### Field Explanations:

- **ID**: Unique identifier (ang-001, jeff-001, friend-001, etc.)
- **First Name**: Guest's first name (used for check-in)
- **Last Name**: Guest's last name (used for check-in)
- **Email**: Optional, can be blank
- **Category**: Must be one of: `family`, `friends`, `colleagues`, `plus-one`, `admin`
- **Notes**: Any additional info (kids, relationships, etc.)
- **Is Admin**: TRUE for bride/groom/developers, FALSE for all guests

---

## 📊 Tab 2: RSVP_Responses

**Purpose:** Automatically captures all guest responses from the adventure planning flow.

### Column Headers (Row 1):
Copy these **exact** column headers into row 1 of the "RSVP_Responses" tab:

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | AA | BB | CC | DD | EE | FF | GG | HH | II | JJ | KK | LL | MM | NN | OO | PP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

1. **Timestamp** (A)
2. **Guest ID** (B)  
3. **First Name** (C)
4. **Last Name** (D)
5. **Email** (E)
6. **Total Guests** (F)
7. **Adults** (G)
8. **Children** (H)
9. **Children Ages** (I)
10. **Dietary Restrictions** (J)
11. **Special Requests** (K)
12. **Day1 Arrival Time** (L)
13. **Day1 Accommodation** (M)
14. **Day1 Transportation** (N)
15. **Day1 Special Requests** (O)
16. **Day1 Excitement** (P)
17. **Day2 Wedding Attendance** (Q)
18. **Day2 Ceremony Seating** (R)
19. **Day2 Reception Activities** (S)
20. **Day2 Photography** (T)
21. **Day2 Special Moments** (U)
22. **Day2 Energy Level** (V)
23. **Day3 Recovery Plan** (W)
24. **Day3 Outdoor Activities** (X)
25. **Day3 Hiking Level** (Y)
26. **Day3 Group Activities** (Z)
27. **Day3 Relaxation** (AA)
28. **Day3 Energy Recovery** (BB)
29. **Day4 Farewell Style** (CC)
30. **Day4 Group Memories** (DD)
31. **Day4 Final Activities** (EE)
32. **Day4 Memorabilia** (FF)
33. **Day4 Future Connections** (GG)
34. **Day4 Overall Experience** (HH)
35. **Day4 Special Moments** (II)
36. **Day5 Departure Time** (JJ)
37. **Day5 Transportation Needs** (KK)
38. **Day5 Final Wishes** (LL)
39. **Day5 Testimonial** (MM)
40. **Day5 Future Events** (NN)
41. **Day5 Gratitude** (OO)
42. **Day5 Stay Connected** (PP)
43. **Day5 Final Rating** (QQ)
44. **Completed At** (RR)

### What This Data Contains:

- **Guest Info**: Name, email, party size, dietary needs
- **Day 1 (Arrival)**: Travel plans, accommodation needs, excitement levels
- **Day 2 (Wedding)**: Ceremony attendance, reception preferences, photo requests
- **Day 3 (Adventure)**: Recovery plans, outdoor activity preferences, energy levels
- **Day 4 (Yellowstone)**: BBQ attendance, memory-making preferences, overall experience
- **Day 5 (Departure)**: Travel plans, testimonials, future connection preferences

---

## 🔑 Environment Variables Needed

After setting up your Google Service Account, you'll need these environment variables in Vercel:

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

**Important:** `GUEST_LIST_SHEET_ID` and `RSVP_RESPONSES_SHEET_ID` should be the SAME value (the same spreadsheet contains both tabs).

---

## 🎯 How to Use This System

### For Guest Management:
1. **Add guests** to the `Guest_List` tab
2. **Guests check in** using their First Name + Last Name
3. **Website validates** against your guest list automatically

### For RSVP Collection:
1. **Guests complete** the 5-day adventure planning experience
2. **Data is automatically saved** to `RSVP_Responses` tab when they finish Day 5
3. **You can download/export** all data for planning purposes

### For Planning the Event:
- **Filter by day** to see who's attending each activity
- **Count totals** for catering, transportation, activities
- **Review preferences** for personalized experiences
- **Export data** for vendors and planners

---

## 🚨 Important Notes

### Security:
- ✅ Only share the Google Sheet with the service account email
- ✅ Keep the service account JSON file secure
- ✅ Don't commit credentials to version control

### Data Flow:
- ✅ **Guest List Tab**: You manage manually
- ✅ **RSVP Responses Tab**: Populated automatically when guests complete the adventure flow
- ✅ **Local Storage**: Guests can continue their progress across sessions

### Testing:
- ✅ Add a test guest (Test User) to try the flow yourself
- ✅ Complete the full adventure to see data appear in RSVP_Responses
- ✅ Verify all form data is captured correctly

This system gives you complete control over guest management while automatically capturing all their adventure planning preferences! 🎉
