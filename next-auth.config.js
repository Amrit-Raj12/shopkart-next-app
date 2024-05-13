import GoogleProvider from "next-auth/providers/google"

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.G_CLEINT_ID,
      clientSecret: process.env.G_SECRET,
    }),
    // Add other providers as needed
  ],
  // Optional configuration options
  // Add custom callbacks, pages, etc.
}
