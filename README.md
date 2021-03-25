# OAuthNodeClient

# Dependencies

```bash
npm install
```

# Usage

## Step 1 get the exchange code

In `get_code.js` add your OAuth secret in `secret: '[SECRET HERE]'` and run:

```bash
node get_code.js
```

Now paste the url returned by the terminal in the browser, authorize the application if necessary and you will be redirected to the `redirect_uri` callback with the code on the url.

## Step 2 get exchange the code for the access token

In `exchange.js` add your OAuth secret in `secret: '[SECRET HERE]'` and the code retrieved from the url in `code: '[CODE HERE]'`. And run:

```bash
node exchange.js
```

Now the access token will be printed in the terminal.
