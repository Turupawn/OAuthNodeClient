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
 
  const authorizationUri = client.authorizeURL({
    redirect_uri: 'https://test.valid.todolegal.app/oauth/callback',
    scope: 'login'
  });
 
  console.log(authorizationUri);
}
 
run();