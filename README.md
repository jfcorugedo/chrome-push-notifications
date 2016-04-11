# Push Notifications

This is a sample application coded following this excellent tutorial: [Push Notifications codelab](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en).

This app has to do with Service Workers, Google Cloud Messaging (GCM) and push notifications

## Send GCM notifications using cURL

Just type this command on your terminal window:

    curl --header "Authorization: key=<YOUR_GOOGLE_API_KEY>" --header "Content-Type: application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"<YOUR_REGISTRATION_ID>\"]}"

You can find your google API key inside `Credentials` section in your [Google Developers Console](https://console.developers.google.com/).

On the other hand, you can find `YOUR_REGISTRATION_ID` once your application performed a successfully subscription to [Google Cloud Messaging](https://developers.google.com/cloud-messaging/).