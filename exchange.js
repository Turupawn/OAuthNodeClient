const config = {
  client: {
    id: 'OxCYQcaX8h7BHgPdA-BdPmw-tHJIRm66fjZBdVzvH1A',
    secret: '[SECRET HERE]'
  },
  auth: {
    tokenHost: 'https://test.todolegal.app/'
  }
};

const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

async function run() {
  const client = new AuthorizationCode(config);

  const tokenParams = {
    code: '[CODE HERE]',
    redirect_uri: 'https://test.valid.todolegal.app/oauth/callback',
    scope: 'login',
  };
 
  try {
    const accessToken = await client.getToken(tokenParams);
    console.log(accessToken)
  } catch (error) {
    console.log('Access Token Error', error.message);
  }
}
 
run();