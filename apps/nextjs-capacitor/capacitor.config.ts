import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nextjs-capacitor',
  webDir: 'dist',
  server: {
    // Config for livereload
    // 🔗 see https://capacitorjs.com/docs/guides/live-reload#using-with-framework-clis
    "url": "http://192.168.x.xx:3000", // replace with your local IP address
    "cleartext": true
  }
};

export default config;
