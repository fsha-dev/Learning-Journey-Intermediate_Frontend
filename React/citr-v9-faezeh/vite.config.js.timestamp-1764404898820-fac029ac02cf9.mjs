// vite.config.js
import { defineConfig } from "file:///D:/GitHub/Learning-Journey-Intermediate_Frontend/React/citr-v9-faezeh/node_modules/.pnpm/vite@7.2.2_tsx@4.20.6/node_modules/vite/dist/node/index.js";
import react from "file:///D:/GitHub/Learning-Journey-Intermediate_Frontend/React/citr-v9-faezeh/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@7.2.2_tsx@4.20.6_/node_modules/@vitejs/plugin-react/dist/index.js";
import { tanstackRouter } from "file:///D:/GitHub/Learning-Journey-Intermediate_Frontend/React/citr-v9-faezeh/node_modules/.pnpm/@tanstack+router-plugin@1.1_b9fdbcf73d1191861a2b124ebfd70dd9/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
        // Ensure the request appears to come from the frontend server
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  plugins: [tanstackRouter(), react()],
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json", "html"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcTGVhcm5pbmctSm91cm5leS1JbnRlcm1lZGlhdGVfRnJvbnRlbmRcXFxcUmVhY3RcXFxcY2l0ci12OS1mYWV6ZWhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdpdEh1YlxcXFxMZWFybmluZy1Kb3VybmV5LUludGVybWVkaWF0ZV9Gcm9udGVuZFxcXFxSZWFjdFxcXFxjaXRyLXY5LWZhZXplaFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0SHViL0xlYXJuaW5nLUpvdXJuZXktSW50ZXJtZWRpYXRlX0Zyb250ZW5kL1JlYWN0L2NpdHItdjktZmFlemVoL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyB0YW5zdGFja1JvdXRlciB9IGZyb20gXCJAdGFuc3RhY2svcm91dGVyLXBsdWdpbi92aXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgXCIvYXBpXCI6IHtcclxuICAgICAgICB0YXJnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLCAvLyBFbnN1cmUgdGhlIHJlcXVlc3QgYXBwZWFycyB0byBjb21lIGZyb20gdGhlIGZyb250ZW5kIHNlcnZlclxyXG4gICAgICB9LFxyXG4gICAgICBcIi9wdWJsaWNcIjoge1xyXG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3RhbnN0YWNrUm91dGVyKCksIHJlYWN0KCldLFxyXG4gIHRlc3Q6IHtcclxuICAgIGVudmlyb25tZW50OiBcImhhcHB5LWRvbVwiLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcmVwb3J0ZXI6IFtcInRleHRcIiwgXCJqc29uXCIsIFwiaHRtbFwiXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlksU0FBUyxvQkFBb0I7QUFDeGEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsc0JBQXNCO0FBRS9CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBLE1BQ2hCO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7QUFBQSxFQUNuQyxNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQSxJQUNuQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
