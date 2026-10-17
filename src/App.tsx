import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";

const ProjetPage = lazy(() =>
  import("./components/projets/mesProjet").then((module) => ({
    default: module.ProjetPage,
  })),
);

const CvPage = lazy(() =>
  import("./components/cv/cv").then((module) => ({
    default: module.CvPage,
  })),
);

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<ProjetPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
