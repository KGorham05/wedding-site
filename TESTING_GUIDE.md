# Testing the Google Sheets Integration

## Quick Test Plan

### 1. Setup Verification
- [ ] Google Sheet created with correct tab names (`Guest_List` and `RSVP_Responses`)
- [ ] Column headers copied exactly as specified
- [ ] Service account has editor access to the sheet
- [ ] Environment variables added to Vercel

### 2. Guest List Test
1. Add a test guest to your `Guest_List` tab:
   ```
   ID: test-001
   First Name: Test
   Last Name: User
   Email: test@example.com
   Category: friends
   Notes: Test account
   Is Admin: FALSE
   ```

2. Visit your website and try to check in as "Test User"
3. Should successfully find the guest and proceed to party details

### 3. RSVP Submission Test
1. Complete the entire adventure flow as the test guest
2. Go through all 5 days and click "Complete Adventure Journey"
3. Check your `RSVP_Responses` tab - should see a new row with all the data

### 4. Error Testing
1. Try to check in with a name NOT in your guest list
2. Should show "couldn't find your name" error
3. Try checking in with wrong spelling - should also fail

## Expected Data Flow

```
Guest List Tab (Manual) → Website Authentication → Adventure Flow → RSVP Responses Tab (Automatic)
```

### What You Should See in RSVP_Responses:
- Timestamp of when they completed
- All guest information and party details
- Day-by-day preferences and responses
- Complete adventure planning data

## Troubleshooting

### "Failed to load guest list"
- Check that tab name is exactly `Guest_List` (case sensitive)
- Verify service account has access to the sheet
- Check environment variables in Vercel

### "Failed to submit RSVP"  
- Check that tab name is exactly `RSVP_Responses` (case sensitive)
- Verify service account has editor permissions
- Check Vercel function logs for specific errors

### Build/deployment errors
- Verify all environment variables are set in Vercel
- Check that private key includes proper line breaks (`\n`)
- Ensure Google Sheets API is enabled in Google Cloud

## Data Structure Notes

The system now captures a complete picture of each guest's preferences:
- **Authentication**: Verified against your guest list
- **Party Details**: Adults, children, dietary needs
- **Day-by-Day Planning**: All 5 days of adventure preferences
- **Experience Feedback**: Ratings, testimonials, future connections

This gives you everything needed for detailed event planning! 🎉
