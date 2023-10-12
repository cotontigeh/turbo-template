import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "ionic-react",
  webDir: "public",
  server: {
    // Config for livereload
    // 🔗 See https://capacitorjs.com/docs/guides/live-reload#using-with-framework-clis
    // url: "http://192.168.x.xx:3000", // replace with your local IP address
    url: "http://192.168.1.11:3000",
    cleartext: true,
  },
};

export default config;
