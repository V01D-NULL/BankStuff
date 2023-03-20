# BankStuff

Uses [Teller](https://teller.io) to login and retrieve details from your bank account

If you want to use this yourself, you'll need the appropriate keys and certs.

I might host this on AWS for learing purposes and ease of access though.


--- 

Using it is simple.

1. Log into your bank account (a teller popup should appear for this)
2. Enter your monthly paycheck. This value must be a single numeric value
3. Enter your monthly expenses separated by commas. The app will take care of summing it all up. Example: 20,20,20 will result in 60.
4. Click compute and voila

Note: This app uses whatever currency is used by your bank account, no conversions take place. Keep this in mind if you're feeding the app a different currency as you will have to convert it yourself
