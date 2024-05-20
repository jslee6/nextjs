import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lilbmCYDR7pB5EEw',
      clientSecret: '996656543eabc536d5f0f50067379d513b3d20a3',
    }),
    

    // 깃허브 프로바이더 이고 구글하고싶으면 구글로하면 됨
  ],
  secret : 'git6579!!'
};
export default NextAuth(authOptions); 