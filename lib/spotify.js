export async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  // Requesting access token from Spotify
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        clientId + ":" + clientSecret
      ).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenResponse.json();
  if (tokenResponse.status !== 200) {
    throw new Error(`Failed to fetch token: ${tokenData.error_description}`);
  }
  return tokenData.access_token;
}
