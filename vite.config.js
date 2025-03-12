import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: [
//       "react-redux",
//       "redux-persist",
//       "redux-persist/integration/react",
//     ],
//   },
// });

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", 
  },
  optimizeDeps: {
    include: ["react-redux", "redux-persist", "redux-persist/integration/react"],
  },
});


